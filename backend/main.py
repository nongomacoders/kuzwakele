"""FastAPI backend application for Kuzwakele Live Clinical Co-Pilot.

Exposes health check and consultation endpoints with CORS enabled for desktop
and local Wi-Fi mobile clients.
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from backend import ai_client, config

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


class ConsultResponse(BaseModel):
    result: str
    provider_used: str
    model: str


KZN_CLINICAL_SYSTEM_PROMPT = """You are an expert isiZulu clinical communication assistant for doctors working in rural KwaZulu-Natal.
Principles:
1. Prioritize natural, culturally respectful, colloquial spoken isiZulu (e.g. polite openers like 'Ingabe...', collective framing like 'asinamali', and euphemisms like 'ukushintsha isisu' for diarrhoea).
2. Never produce rigid or archaic dictionary Zulu. Keep phrasing clear and accessible.
3. Mode 'questions': Given a short clinical intake summary, return 3 to 4 culturally appropriate, natural isiZulu questions to ask the patient/caregiver, with a brief English translation and cultural rationale for each.
4. Mode 'translate': Given an English phrase or instruction, return natural spoken isiZulu with an explanation of any idioms or concords used."""


@app.get("/api/health")
async def health_check():
    """Health check endpoint exposing system readiness and active AI provider."""
    return {"status": "ok", "provider": config.get_active_provider()}


@app.post("/api/consult", response_model=ConsultResponse)
async def consult(request: ConsultRequest):
    """Clinical Co-Pilot consultation endpoint.

    Generates culturally appropriate isiZulu clinical questions or translations
    based on the requested mode.
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
            f"{request.text}"
        )

    try:
        resp = await ai_client.generate_response(
            prompt=prompt,
            system_instruction=KZN_CLINICAL_SYSTEM_PROMPT,
        )
        return ConsultResponse(
            result=resp["text"],
            provider_used=resp["provider_used"],
            model=resp["model"],
        )
    except Exception as exc:
        raise HTTPException(
            status_code=500,
            detail=f"AI generation failed: {str(exc)}",
        ) from exc
