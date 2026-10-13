"""FastAPI backend application for Kuzwakele Live Clinical Co-Pilot.

Exposes health check and consultation endpoints with CORS enabled for desktop
and local Wi-Fi mobile clients. Supports an interactive consultation steering loop
with clickable anticipated patient replies and dynamic steering.
"""

import json
import logging
import re
from typing import Any, Dict, List, Optional
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

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


class PatientResponseOption(BaseModel):
    isizulu: str
    english: str
    clinical_meaning: str


class LoopQuestionItem(BaseModel):
    isizulu: str
    english: str
    cultural_note: str
    anticipated_patient_replies: List[PatientResponseOption] = Field(default_factory=list)


class ConsultLoopResponse(BaseModel):
    summary: str
    questions: List[LoopQuestionItem]


class ConsultRequest(BaseModel):
    text: str
    mode: str = "questions"  # "questions" | "translate" | "loop"
    history: Optional[List[Dict[str, Any]]] = None
    steer_instruction: Optional[str] = None


class ConsultResponse(BaseModel):
    result: Any
    provider_used: str
    model: str


class ChatMessage(BaseModel):
    role: str  # "doctor" or "patient"
    text: str


class ScenarioFeedback(BaseModel):
    natural_alternative: str
    cultural_and_tone_notes: str
    listening_cues: str  # Phonetic cues, dropped vowels, and cadence to help Widex hearing aid tuning


class ScenarioTurnRequest(BaseModel):
    scenario_id: str = "gogo-mamthethwa"
    history: List[ChatMessage] = Field(default_factory=list)
    doctor_input: str


class ScenarioTurnResponse(BaseModel):
    patient_reply_isizulu: str
    patient_reply_english: str
    feedback: ScenarioFeedback
    suggested_steer_chips: List[str]  # 2-3 quick conversational prompts doctor could say next


KZN_CLINICAL_SYSTEM_PROMPT = """You are an expert isiZulu clinical communication assistant for doctors working in rural KwaZulu-Natal.
Principles:
1. Prioritize natural, culturally respectful, colloquial spoken isiZulu (e.g. polite openers like 'Ake ungitshele...', collective framing like 'asinamali', and euphemisms like 'ukushintsha isisu' for diarrhoea).
2. Never produce rigid or archaic dictionary Zulu. Keep phrasing clear and accessible.
3. Mode 'questions' or 'loop': You MUST respond with pure JSON conforming exactly to this schema:
{
  "summary": "Brief clinical framing of the patient presentation and current focus",
  "questions": [
    {
      "isizulu": "Natural isiZulu phrase to ask patient or caregiver",
      "english": "Clear English translation",
      "cultural_note": "Why this phrasing works in rural KZN and linguistic nuance",
      "anticipated_patient_replies": [
        {
          "isizulu": "Realistic colloquial patient or caregiver reply in isiZulu",
          "english": "English translation",
          "clinical_meaning": "Clinical sign / meaning (e.g., severe sign, mild, timeline, traditional medicine used)"
        }
      ]
    }
  ]
}
Do not wrap your JSON in conversational filler.

Rules for Question Generation:
- Vary sentence openings naturally. NEVER start multiple consecutive questions with 'Ingabe'.
- Mix conversational structures:
  * Direct questions using natural intonation and enclitics (e.g., 'Siqale nini...?', 'Kukhona...?')
  * Polite imperative softeners (e.g., 'Ake ungitshele...', 'Ngicela ukubuza...', 'Ngisize lapha...')
  * Trailing polarity tags (e.g., '...yini?')
- Keep the dialogue sounding like a caring bedside clinician in rural KZN, not an official survey form.

Rules for Anticipated Patient Replies:
- Each question MUST include 2 to 3 realistic anticipated replies representing common rural KZN clinical responses (e.g., affirmative with timeline, negative reassurance, or traditional medicine usage like 'intelezi' or 'imbiza').
- Keep patient replies conversational and true to how patients/caregivers speak (e.g., 'Ewe dokotela, uqale kuthangi...', 'Cha, akakaze abenomkhuhlane...', 'Nginikeze umuthi wesintu omncane...').

Rules for Language & Script Purity:
- Both isiZulu and English MUST be written strictly using the standard Latin alphabet.
- NEVER output non-Latin or Indic scripts (such as Bengali 'আমরা', Devanagari, Arabic, or Cyrillic).
- All English translations and notes must use standard English words (e.g. use 'We', never Bengali 'আমরা').

GROUNDING & NAMING GUARDRAILS:
- Strictly forbid inventing patient, child, or family names. NEVER fabricate proper names (e.g. do not invent names like 'Sipho', 'Thabo', 'Lindiwe', 'Bandile', 'Nandi', etc.) unless explicitly specified in the intake prompt.
- Mandate standard generic kinship terms ('umntwana', 'ingane', 'umfana', 'intombazane', 'mama', 'gogo', 'baba') when no name is provided in the case description:
  * For infant/child: 'umntwana' or 'ingane'
  * For male child/boy: 'umfana' or 'umntwana womfana'
  * For female child/girl: 'intombazane' or 'umntwana wentombazane'
  * For mother/caregiver: 'mama'
- Enforce strict gender alignment with the clinical intake:
  * Maintain exact consistency with the biological sex and gender specified in the clinical case (e.g. if the intake specifies a 'boy', refer to him strictly as 'umfana' / 'boy' / 'he', NEVER mismatch or flip to a female child / 'intombazane' / 'she').
- Require 1:1 translation fidelity between isiZulu and English:
  * Ensure exact semantic alignment between the spoken isiZulu sentence and its English translation. Never invent details, names, or symptoms in one language that are absent in the other.

4. Mode 'translate': Given an English phrase or instruction, return natural spoken isiZulu with an explanation of any idioms or concords used."""


KZN_SCENARIO_SYSTEM_PROMPT = """You are the roleplay engine and expert clinical communication coach for 'Kuzwakele' - an isiZulu clinical training platform for healthcare workers in rural KwaZulu-Natal (KZN), South Africa.

PERSONA: Gogo MaMthethwa (62-year-old grandmother, managing hypertension on Enalapril in a rural homestead).
- Tone & Demeanor: Warm, matriarchal, slightly burdened by rural hardships, speaks colloquial rural isiZulu with common contractions and elder honorifics.
- Consultation Context: Routine medical check is finished (BP 150/92 recorded, prescription collected). The consultation now shifts to "ukubonisana" (mutual life counseling and holistic care).
- Key Life Themes: Weather and damaged rural dirt roads, household stress, youth unemployment, whoonga/substance abuse in the community, SASSA grant queues and expenses, and gentle preventative health screening (cervical cancer screening / Pap smear / ukuhlolwa kwesibeletho, diet, blood pressure).

YOUR DUAL OBJECTIVE:
Act realistically as Gogo MaMthethwa while simultaneously generating clinical coaching notes for the doctor.

Response Format:
Return a STRICT JSON object conforming exactly to this structure:
{
  "patient_reply_isizulu": "Natural conversational response in spoken rural isiZulu",
  "patient_reply_english": "Accurate English translation of the patient's reply",
  "feedback": {
    "natural_alternative": "How an experienced rural KZN bedside doctor would phrase their response or inquiry in natural isiZulu with empathy and correct honorifics",
    "cultural_and_tone_notes": "Clinical and cultural nuance (e.g., kinship honorifics like 'gogo' / 'mntanami', validating hardship before giving advice, destigmatizing cervical screening)",
    "listening_cues": "Phonetic and acoustic listening cues to assist clinicians wearing hearing aids (e.g. Widex) - specifically note elided/dropped vowels (e.g., 'uphuz'amanzi', 'baphil'ekhaya'), syllable rhythm, and consonant sounds"
  },
  "suggested_steer_chips": [
    "2-3 quick conversational prompts or questions the doctor could say next (with English gloss)"
  ]
}

Rules:
- Both isiZulu and English MUST be written strictly using the standard Latin alphabet.
- NEVER output non-Latin or Indic scripts (such as Bengali, Devanagari, Arabic, or Cyrillic characters).
- Do not wrap response in markdown code blocks or conversational preface. Return pure JSON only.
"""


def sanitize_hallucinated_scripts(text: str) -> str:
    """Sanitize foreign script token bleeding (e.g., Bengali/Indic characters) from generated text.

    LLMs can occasionally bleed multilingual pronouns (e.g. Bengali 'আমরা' for 'We')
    when translating low-resource languages into English.
    """
    if not isinstance(text, str):
        return text

    # Common multilingual token bleeding replacements
    replacements = {
        "\u0986\u09ae\u09b0\u09be": "We",      # Bengali 'amra' -> We
        "\u0986\u09ae\u09bf": "I",        # Bengali 'ami' -> I
        "\u09a4\u09be\u09b0\u09be": "They",    # Bengali 'tara' -> They
        "\u09b8\u09c7": "He/She",         # Bengali 'se' -> He/She
        "\u09b9\u09cd\u09af\u09be\u0981": "Yes", # Bengali 'hyan' -> Yes
        "\u09a8\u09be": "No",             # Bengali 'na' -> No
        "\u0986\u09ae\u09be\u09a6\u09c7\u09b0": "Our", # Bengali 'amader' -> Our
        "আমরা": "We",
        "আমি": "I",
        "তারা": "They",
    }
    for foreign, english_sub in replacements.items():
        text = text.replace(foreign, english_sub)

    # Strip any remaining stray Indic / Arabic / Cyrillic / CJK scripts
    text = re.sub(r'[\u0900-\u0DFF\u0600-\u06FF\u0400-\u04FF\u4E00-\u9FFF]+', '', text)
    # Clean redundant spaces
    text = re.sub(r'\s{2,}', ' ', text).strip()
    return text


def sanitize_data_tree(obj: Any) -> Any:
    """Recursively sanitize text in dictionaries, lists, and strings."""
    if isinstance(obj, str):
        return sanitize_hallucinated_scripts(obj)
    elif isinstance(obj, dict):
        return {k: sanitize_data_tree(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [sanitize_data_tree(item) for item in obj]
    return obj


def parse_questions_response(raw_text: str) -> Dict[str, Any]:
    """Parse AI response into structured JSON questions with anticipated patient replies."""
    text = raw_text.strip()

    # Strip code block fences if present
    cleaned = re.sub(r"^```(?:json)?\s*", "", text, flags=re.IGNORECASE)
    cleaned = re.sub(r"\s*```$", "", cleaned)

    data = None
    try:
        data = json.loads(cleaned.strip())
    except Exception:
        match = re.search(r"\{.*\}", text, re.DOTALL)
        if match:
            try:
                data = json.loads(match.group(0))
            except Exception:
                pass

    if isinstance(data, dict) and "questions" in data and isinstance(data["questions"], list):
        # Normalize each question to ensure anticipated_patient_replies exists
        for q in data["questions"]:
            if not isinstance(q, dict):
                continue
            if "anticipated_patient_replies" not in q or not isinstance(q["anticipated_patient_replies"], list) or len(q["anticipated_patient_replies"]) == 0:
                q["anticipated_patient_replies"] = [
                    {
                        "isizulu": "Yebo dokotela, kunjalo.",
                        "english": "Yes doctor, that is so.",
                        "clinical_meaning": "Positive / confirmed symptom"
                    },
                    {
                        "isizulu": "Cha dokotela, akwenzeki lokho.",
                        "english": "No doctor, that has not occurred.",
                        "clinical_meaning": "Negative / denied symptom"
                    },
                    {
                        "isizulu": "Kancane nje, kodwa asiqiniseki.",
                        "english": "Just a little, but we are not sure.",
                        "clinical_meaning": "Mild or uncertain symptom"
                    }
                ]
        return sanitize_data_tree(data)

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
                    "anticipated_patient_replies": [
                        {
                            "isizulu": "Yebo dokotela.",
                            "english": "Yes doctor.",
                            "clinical_meaning": "Affirmative confirmation"
                        },
                        {
                            "isizulu": "Cha dokotela.",
                            "english": "No doctor.",
                            "clinical_meaning": "Negative report"
                        }
                    ]
                })

    if extracted_questions:
        return sanitize_data_tree({
            "summary": "Clinical consultation questions",
            "questions": extracted_questions,
        })

    # If parsing completely fails, wrap safely so the frontend never crashes
    return {
        "summary": "Consultation Summary",
        "questions": [],
        "raw_text": sanitize_hallucinated_scripts(raw_text),
    }


def parse_scenario_response(raw_text: str) -> Dict[str, Any]:
    """Parse scenario turn AI response into structured JSON matching ScenarioTurnResponse."""
    text = raw_text.strip()
    cleaned = re.sub(r"^```(?:json)?\s*", "", text, flags=re.IGNORECASE)
    cleaned = re.sub(r"\s*```$", "", cleaned)

    data = None
    try:
        data = json.loads(cleaned.strip())
    except Exception:
        match = re.search(r"\{.*\}", text, re.DOTALL)
        if match:
            try:
                data = json.loads(match.group(0))
            except Exception:
                pass

    if isinstance(data, dict) and "patient_reply_isizulu" in data:
        feedback = data.get("feedback", {})
        if not isinstance(feedback, dict):
            feedback = {}
        data["feedback"] = {
            "natural_alternative": feedback.get("natural_alternative", "Yebo dokotela, ngiyabonga kakhulu."),
            "cultural_and_tone_notes": feedback.get("cultural_and_tone_notes", "Maintain warm bedside presence and respect elder kinship honorifics."),
            "listening_cues": feedback.get("listening_cues", "Notice contracted vowels and penultimate syllable lengthening.")
        }
        if "suggested_steer_chips" not in data or not isinstance(data["suggested_steer_chips"], list) or len(data["suggested_steer_chips"]) == 0:
            data["suggested_steer_chips"] = [
                "Baphila kanjani ekhaya gogo?",
                "Kukhona okunye okukukhathazayo emoyeni?",
                "Ake sikhulume ngalokho kuhlolwa kwabesifazane."
            ]
        return sanitize_data_tree(data)

    # Safe fallback if parsing fails
    return sanitize_data_tree({
        "patient_reply_isizulu": "Yebo dokotela, ngiyabonga kakhulu ngokungilalela. Ekhaya kunzima kodwa siyazama.",
        "patient_reply_english": "Yes doctor, thank you so much for listening to me. At home things are tough but we are trying.",
        "feedback": {
            "natural_alternative": "Ngiyabonga ukuthi ubekezele gogo, sonke silwa nalesi simo.",
            "cultural_and_tone_notes": "Acknowledge the elder's daily resilience and family burdens before offering clinical directions.",
            "listening_cues": "Notice vowel elision: 'kodwa siyazama' pronounced rapidly as 'kodw'siyazama'."
        },
        "suggested_steer_chips": [
            "Baphila kanjani ekhaya gogo? (How is the family doing at home?)",
            "Kukhona okunye okukukhathazayo? (Is there anything else on your mind?)",
            "Sikhulume ngokuvikela impilo yakho. (Let us talk about protecting your health.)"
        ]
    })


@app.get("/api/health")
async def health_check():
    """Health check endpoint exposing system readiness and active AI provider."""
    return {"status": "ok", "provider": config.get_active_provider()}


@app.post("/api/consult", response_model=ConsultResponse)
async def consult(request: ConsultRequest):
    """Clinical Co-Pilot consultation endpoint.

    Generates culturally appropriate isiZulu clinical questions with anticipated
    patient responses (for the interactive steering loop) or translation instructions.
    """
    if not request.text.strip() and not request.steer_instruction:
        raise HTTPException(status_code=400, detail="Text prompt or steering instruction cannot be empty.")

    if request.mode == "translate":
        prompt = (
            f"Mode: translate\n"
            f"English phrase or instruction to translate into natural spoken isiZulu:\n"
            f"{request.text}"
        )
    else:
        # Build contextual prompt for questions or steering loop
        prompt_parts = []
        prompt_parts.append("Mode: questions\n")
        prompt_parts.append(f"Clinical Intake / Case Summary:\n{request.text.strip()}\n")

        # Include prior turns if present
        if request.history and len(request.history) > 0:
            prompt_parts.append("Consultation History so far:")
            for turn in request.history:
                role = turn.get("role", "Clinician").capitalize()
                text = turn.get("text", "")
                subtext = turn.get("subtext", "")
                turn_desc = f"- {role}: {text}"
                if subtext:
                    turn_desc += f" (Meaning/English: {subtext})"
                prompt_parts.append(turn_desc)
            prompt_parts.append("\nBased on this history, advance the clinical consultation logically.")

        # Include steering instruction if present
        if request.steer_instruction and request.steer_instruction.strip():
            prompt_parts.append(f"\nDoctor's Current Steering Focus:\n{request.steer_instruction.strip()}")
            prompt_parts.append("Prioritize questions addressing this specific clinical steering direction.")

        prompt_parts.append("\nRespond with a valid JSON object containing 'summary' and 'questions' array only.")
        prompt_parts.append("Each question MUST have 'isizulu', 'english', 'cultural_note', and 2 to 3 'anticipated_patient_replies'.")
        prompt = "\n".join(prompt_parts)

    try:
        resp = await ai_client.generate_response(
            prompt=prompt,
            system_instruction=KZN_CLINICAL_SYSTEM_PROMPT,
        )

        raw_output = resp["text"]

        if request.mode in ("questions", "loop"):
            parsed_result = parse_questions_response(raw_output)
            return ConsultResponse(
                result=parsed_result,
                provider_used=resp["provider_used"],
                model=resp["model"],
            )

        return ConsultResponse(
            result=sanitize_hallucinated_scripts(raw_output),
            provider_used=resp["provider_used"],
            model=resp["model"],
        )
    except Exception as exc:
        logger.exception("AI generation error: %s", exc)
        raise HTTPException(
            status_code=500,
            detail=f"AI generation failed: {str(exc)}",
        ) from exc


@app.post("/api/scenario/turn", response_model=ScenarioTurnResponse)
async def scenario_turn(request: ScenarioTurnRequest):
    """Beyond the Prescription Scenario Dialogue Simulator turn endpoint.

    Advances the interactive dialogue with a rural KZN persona (e.g. Gogo MaMthethwa)
    and returns nuanced clinical coaching, Widex hearing aid phonetic listening cues,
    and suggested steer prompts.
    """
    if not request.doctor_input.strip() and not request.history:
        raise HTTPException(status_code=400, detail="Doctor input or dialogue history cannot be empty.")

    prompt_parts = [
        f"Active Scenario: {request.scenario_id or 'gogo-mamthethwa'}",
        "Context: Routine medical check is completed; the consultation now shifts to 'ukubonisana' (mutual life counseling), discussing weather/roads, household stress, youth unemployment, whoonga/crime, SASSA grants, and gentle preventative screening (cervical screening, diet, blood pressure).",
        "\nDialogue History so far:"
    ]

    for msg in request.history:
        speaker = "Doctor" if msg.role == "doctor" else "Patient (Gogo MaMthethwa)"
        prompt_parts.append(f"- {speaker}: {msg.text}")

    prompt_parts.append(f"\nDoctor's latest statement: {request.doctor_input}")
    prompt_parts.append("\nGenerate the patient's realistic reply, clinical coaching feedback, and 2-3 steering chips.")
    prompt_parts.append("Return pure JSON matching the ScenarioTurnResponse schema.")

    prompt = "\n".join(prompt_parts)

    try:
        resp = await ai_client.generate_response(
            prompt=prompt,
            system_instruction=KZN_SCENARIO_SYSTEM_PROMPT,
        )

        parsed_result = parse_scenario_response(resp["text"])
        return ScenarioTurnResponse(**parsed_result)
    except Exception as exc:
        logger.exception("Scenario turn generation error: %s", exc)
        raise HTTPException(
            status_code=500,
            detail=f"Scenario generation failed: {str(exc)}",
        ) from exc

