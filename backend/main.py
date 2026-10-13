"""FastAPI backend application for Kuzwakele Live Clinical Co-Pilot.

Exposes health check and consultation endpoints with CORS enabled for desktop
and local Wi-Fi mobile clients. Supports structured JSON clinical question cards.
"""

import json
import logging
import re
from typing import Any, Dict, List, Optional, Union
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from backend import ai_client, config

logger = logging.getLogger(__name__)

app = FastAPI(title="Kuzwakele API", version="1.0.0")

# Enable CORS for desktop (localhost) and mobile devices on local network
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ConsultRequest(BaseModel):
    text: str
    mode: str = "questions"  # "questions" | "translate"


class QuestionCard(BaseModel):
    isizulu: str
    english: str
    cultural_note: str


class StructuredQuestions(BaseModel):
    summary: str
    questions: List[QuestionCard]
    raw_text: Optional[str] = None


class ConsultResponse(BaseModel):
    result: Any
    provider_used: str
    model: str


KZN_CLINICAL_SYSTEM_PROMPT = """You are an expert isiZulu clinical communication assistant for doctors working in rural KwaZulu-Natal.
Principles:
1. Prioritize natural, culturally respectful, colloquial spoken isiZulu (e.g. polite openers like 'Ingabe...', collective framing like 'asinamali', and euphemisms like 'ukushintsha isisu' for diarrhoea).
2. Never produce rigid or archaic dictionary Zulu. Keep phrasing clear and accessible.
3. Mode 'questions': You MUST respond with pure JSON conforming exactly to this schema:
{
  "summary": "Brief clinical framing",
  "questions": [
    {
      "isizulu": "Natural isiZulu phrase",
      "english": "Clear English translation",
      "cultural_note": "Why this phrasing works in rural KZN"
    }
  ]
}
Do not wrap your JSON in conversational filler.

Rules for Question Generation:
- Vary sentence openings naturally. NEVER start multiple consecutive questions with 'Ingabe'.
- Mix conversational structures:
  * Direct questions using natural intonation and enclitics (e.g., 'Siqale nini...?', 'Kukhona...?')
  * Polite imperative softeners (e.g., 'Ake ungitshele...', 'Ngicela ukubuza...')
  * Trailing polarity tags (e.g., '...yini?')
- Keep the dialogue sounding like a caring bedside clinician in rural KZN, not an official survey form.

4. Mode 'translate': Given an English phrase or instruction, return natural spoken isiZulu with an explanation of any idioms or concords used."""


def parse_questions_response(raw_text: str) -> Dict[str, Any]:
    """Parse AI response into structured JSON questions, with robust fallbacks."""
    text = raw_text.strip()

    # Strip code block fences if present
    cleaned = re.sub(r"^```(?:json)?\s*", "", text, flags=re.IGNORECASE)
    cleaned = re.sub(r"\s*```$", "", cleaned)

    try:
        data = json.loads(cleaned.strip())
        if isinstance(data, dict) and "questions" in data and isinstance(data["questions"], list):
            return data
    except Exception:
        pass

    # Extract JSON object substring if model included leading/trailing commentary
    match = re.search(r"\{.*\}", text, re.DOTALL)
    if match:
        try:
            data = json.loads(match.group(0))
            if isinstance(data, dict) and "questions" in data and isinstance(data["questions"], list):
                return data
        except Exception:
            pass

    # Fallback: extract questions from markdown tables or rows
    extracted_questions = []
    lines = [line.strip() for line in raw_text.splitlines() if line.strip()]
    for line in lines:
        if line.startswith("|") and not line.startswith("|---") and "#" not in line and "isizulu" not in line.lower():
            cols = [col.strip() for col in line.split("|")[1:-1]]
            if len(cols) >= 3:
                isizulu_idx = 1 if cols[0].isdigit() else 0
                english_idx = isizulu_idx + 1
                note_idx = isizulu_idx + 2 if len(cols) > isizulu_idx + 2 else isizulu_idx + 1
                extracted_questions.append({
                    "isizulu": cols[isizulu_idx],
                    "english": cols[english_idx] if len(cols) > english_idx else "",
                    "cultural_note": cols[note_idx] if len(cols) > note_idx else "",
                })

    if extracted_questions:
        return {
            "summary": "Clinical consultation questions",
            "questions": extracted_questions,
        }

    # If parsing completely fails, wrap safely so the frontend never crashes
    return {
        "summary": "Consultation Summary",
        "questions": [],
        "raw_text": raw_text,
    }


@app.get("/api/health")
async def health_check():
    """Health check endpoint exposing system readiness and active AI provider."""
    return {"status": "ok", "provider": config.get_active_provider()}


@app.post("/api/consult", response_model=ConsultResponse)
async def consult(request: ConsultRequest):
    """Clinical Co-Pilot consultation endpoint.

    Generates culturally appropriate isiZulu clinical questions (as structured JSON cards)
    or instructions translations based on requested mode.
    """
    if not request.text.strip():
        raise HTTPException(status_code=400, detail="Text prompt cannot be empty.")

    if request.mode == "translate":
        prompt = (
            f"Mode: translate\n"
            f"English phrase or instruction to translate into natural spoken isiZulu:\n"
            f"{request.text}"
        )
    else:
        prompt = (
            f"Mode: questions\n"
            f"Clinical intake summary:\n"
            f"{request.text}\n\n"
            f"Respond with a valid JSON object containing 'summary' and 'questions' array only."
        )

    try:
        resp = await ai_client.generate_response(
            prompt=prompt,
            system_instruction=KZN_CLINICAL_SYSTEM_PROMPT,
        )

        raw_output = resp["text"]

        if request.mode == "questions":
            parsed_result = parse_questions_response(raw_output)
            return ConsultResponse(
                result=parsed_result,
                provider_used=resp["provider_used"],
                model=resp["model"],
            )

        return ConsultResponse(
            result=raw_output,
            provider_used=resp["provider_used"],
            model=resp["model"],
        )
    except Exception as exc:
        logger.exception("AI generation error: %s", exc)
        raise HTTPException(
            status_code=500,
            detail=f"AI generation failed: {str(exc)}",
        ) from exc
