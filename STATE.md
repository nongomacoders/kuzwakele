# Project State

## Environment & Dependencies
- **Status**: Verified
- **Virtual Environment**: Configured at `.\venv` using `.\venv\Scripts\python.exe`
- **Dependencies**: Verified and installed from `requirements.txt`:
  - `google-cloud-aiplatform>=1.60.0`
  - `fastapi>=0.115.0`
  - `uvicorn[standard]>=0.30.0`
  - `python-dotenv>=1.0.0`
  - `pydantic>=2.8.0`
  - `httpx>=0.27.0`
- **Execution Rules**: Windows-specific guidelines documented in `ENVIRONMENT.md`.

## Backend Configuration & Secrets
- **Status**: Configured and verified
- **Configuration Module**: `backend/config.py`
- **Secrets Store**: Credentials loaded externally from `C:\Users\diond\Desktop\Projects\EXTERNAL_TO_REPOS\credentials\secrets.env`
- **Exported Settings**:
  - `OPENROUTER_API_KEY` (loaded from external secrets)
  - `GOOGLE_APPLICATION_CREDENTIALS` (resolved and explicitly populated in `os.environ` for Google Cloud SDK)
  - `VERTEX_MODEL = "gemini-3.5-flash-lite"`
  - `VERTEX_LOCATION = "global"`
  - `THINKING_BUDGET = "low"`
  - `OPENROUTER_FALLBACK_MODEL = "openrouter/free"`
  - `DEFAULT_MODEL` (configured with fallback provider resolution)

## AI Pipeline
- **Status**: Active & Verified
- **Client Module**: `backend/ai_client.py`
- **Function**: `generate_response(prompt: str, system_instruction: str = "") -> dict`
- **Primary Provider**: Vertex AI (`gemini-3.5-flash-lite`, location: `global`, thinking effort: `low`) authenticated via service account.
- **Failover / Fallback Provider**: OpenRouter (`openrouter/free`) via async HTTP POST using `httpx`.
- **Resilience**: Catches quota exhaustion (429/ResourceExhausted), billing errors (402), client/not-found errors, connection issues, or bypassed credentials, seamlessly routing to OpenRouter.
- **Validation**: Verified end-to-end via `backend/test_server.py` and `backend/test_ai.py` with native Vertex AI response and fallback mechanisms passing.

## FastAPI Server & Live Co-Pilot API
- **Status**: Active & Verified
- **Server Module**: `backend/main.py`
- **App**: `Kuzwakele API` v1.0.0
- **CORS Configuration**: Wildcard CORS enabled (`allow_origins=["*"]`, `allow_methods=["*"]`, `allow_headers=["*"]`) for desktop (`localhost`) and mobile access across local Wi-Fi subnet.
- **Consultation Loop Schemas**: `PatientResponseOption`, `LoopQuestionItem`, `ConsultLoopResponse`, and `ConsultRequest` (with `history` and `steer_instruction`).
- **Clinical System Prompt**: Enhanced with rules for natural question openings, caring bedside tone, and 2-3 realistic colloquial patient/caregiver anticipated replies per question.
- **Robust Parser**: `parse_questions_response()` ensures `anticipated_patient_replies` are always structured, with table/row fallbacks.
- **Endpoints**:
  - `GET /api/health`: Health status and active AI provider (`vertex`).
  - `POST /api/consult`: Interactive consultation co-pilot accepting intake notes, ongoing conversation history, and custom steering instructions.
  - `POST /api/scenario/turn`: "Beyond the Prescription" dialogue simulator advancing KZN persona interaction (Gogo MaMthethwa) and delivering coaching feedback with Widex hearing aid phonetic listening cues.
- **Validation**: Fully verified via `backend/test_server.py` (200 OK across health, consult questions, loop steering, translation, and scenario turn endpoints).

## Frontend PWA & Interactive Steering Loop
- **Status**: Active & Verified
- **Directory**: `frontend/`
- **Stack**: Vite + React + Tailwind CSS + Lucide React + VitePWA + ReactMarkdown + RemarkGfm
- **Interactive Steering Loop**:
  - **Clickable Patient Response Chips**: Under each clinical card, 2-3 anticipated replies (with colloquial isiZulu, English translation, and clinical meaning tags) allow the clinician to advance turns with a single tap.
  - **Consultation History Log**: Collapsible turn-by-turn history log tracking completed doctor/patient exchanges and clinical findings.
  - **Sticky Bottom Steering Bar**: Fixed high-contrast input at the viewport bottom with quick steering chips (e.g. wet nappies, fever duration, traditional medicine) and direct prompt input.
  - **Utility Controls**: Reset / "New Consult" button to clear history and start fresh, alongside quick KZN Presets.

## Scenario Dialogue Simulator (TASK-006)
- **Status**: Active & Verified
- **Component**: `frontend/src/components/ScenariosView.jsx`
- **Features**:
  - **Flagship Scenario**: "Gogo MaMthethwa: Beyond the Prescription" (62yo elder, routine hypertension follow-up, shifting into "ukubonisana" mutual life counseling).
  - **Collapsible Scenario Dossier**: Displays clinical context, social context (gravel roads, SASSA queue, whoonga youth crisis), and conversational coaching objective.
  - **High-Contrast Dialogue Bubble**: Spoken isiZulu rendered in prominent typography (`text-xl sm:text-2xl font-bold text-emerald-300`) with English translation toggle.
  - **Bedside Coaching & Listening Card**:
    - **Natural Phrasing Alternative**: Warm bedside phrasing in natural isiZulu with copy action.
    - **Cultural & Tone Nuance**: Explains kinship respect (*gogo*, *mntanami*), validating hardship, and destigmatizing screening.
    - **Hearing Aid & Phonetic Listening Cue (Widex Tuning)**: Explains elided/dropped vowels (e.g. *uphuz'amanzi*, *baphil'ekhaya*), cadence, and pitch changes for auditory comprehension.
  - **Interactive Controls**: One-tap suggested steer chips, sticky bottom response input bar, and scenario restart reset.
- **Build Verification**: `npm run build` compiled cleanly (2,164 modules, service worker precache generated).

