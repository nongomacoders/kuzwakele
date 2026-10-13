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
- **Status**: Active & Verified (Hardened against hallucinations)
- **Client Module**: `backend/ai_client.py`
- **Function**: `generate_response(prompt: str, system_instruction: str = "") -> dict`
- **Primary Provider**: Vertex AI (`gemini-3.5-flash-lite`, location: `global`, thinking effort: `low`, `temperature=0.1`) authenticated via service account.
- **Failover / Fallback Provider**: OpenRouter (`openrouter/free`, `temperature=0.1`) via async HTTP POST using `httpx`.
- **Hallucination Hardening**:
  - Clamped `temperature=0.1` on both Vertex AI `GenerateContentConfig` and OpenRouter fallback payload to maximize deterministic grounding.
  - Injected Grounding & Naming Guardrails in `KZN_CLINICAL_SYSTEM_PROMPT` forbidding invented proper names, enforcing standard generic kinship terms (`umntwana`, `ingane`, `umfana`, `intombazane`, `mama`), mandating biological sex alignment, and requiring 1:1 translation fidelity.
- **Resilience**: Catches quota exhaustion (429/ResourceExhausted), billing errors (402), client/not-found errors, connection issues, or bypassed credentials, seamlessly routing to OpenRouter.
- **Validation**: Verified end-to-end via `backend/test_server.py` (200 OK across all endpoints) and targeted paediatric skin rash intake test verifying zero invented proper names.

## FastAPI Server & Live Co-Pilot API
- **Status**: Active & Verified (Pure Linguistic & Cultural Scoping)
- **Server Module**: `backend/main.py`
- **App**: `Kuzwakele API` v1.0.0
- **CORS Configuration**: Wildcard CORS enabled (`allow_origins=["*"]`, `allow_methods=["*"]`, `allow_headers=["*"]`) for desktop (`localhost`) and mobile access across local Wi-Fi subnet.
- **Consultation Loop Schemas**: `PatientResponseOption` (strictly `isizulu` and `english`), `LoopQuestionItem`, `ConsultLoopResponse`, and `ConsultRequest`.
- **Linguistic Scoping & Prompt Policy**: The model is explicitly scoped to linguistic and cultural assistance for experienced doctors. All clinical advice, diagnostic labels, severity grading, and summary framing are strictly prohibited.
- **Robust Parser**: `parse_questions_response()` strips any hallucinated diagnostic meaning or summaries and returns clean linguistic questions and anticipated patient replies.
- **Endpoints**:
  - `GET /api/health`: Health status and active AI provider (`vertex`).
  - `POST /api/consult`: Interactive consultation co-pilot delivering conversational questions and realistic patient replies without medical advice or diagnostic tags.
  - `POST /api/scenario/turn`: "Beyond the Prescription" dialogue simulator advancing KZN persona interaction (Gogo MaMthethwa) and delivering coaching feedback with Widex hearing aid phonetic listening cues.
- **Validation**: Fully verified via `backend/test_server.py` (200 OK across health, consult questions, loop steering, translation, and scenario turn endpoints).

## Frontend PWA & Desktop Split-Screen Optimization
- **Status**: Active & Verified
- **Directory**: `frontend/`
- **Stack**: Vite + React + Tailwind CSS + Lucide React + VitePWA + ReactMarkdown + RemarkGfm
- **Desktop Split-Screen Architecture & Streamlining**:
  - **Streamlined Workspace**: Removed the mode toggle bar; defaults directly to the Interactive Consultation Loop co-pilot.
  - **Top-Level Intake Banner**: Placed active case intake above the split grid for clean top alignment across desktop columns.
  - **Left Pane (`lg:col-span-8`)**: Active Consultation Console with quick KZN presets and equalized question cards.
  - **Typography Equalization**: Primary isiZulu phrase styling is equalized to match the English text size (`text-base font-semibold text-emerald-300` and `text-base text-slate-300`).
  - **UI Simplification**: Removed the "Clinical Focus" advice card, the "ACTIVE RECOMMENDATIONS" header wrapper, and all diagnostic labels.
  - **Entrance Fade-In Animation**: Fast, smooth 200ms ease-out fade-in animation (`animate-fadeIn`) triggers on the question cards container and Option 1 when new responses arrive.
  - **Clean Patient Response Chips**: Stripped all "Clinical Sign: ..." badges; displays solely the patient's spoken isiZulu and English translation in clean, balanced text.
  - **Animated Waiting State Card**: Glowing pulse card with live second-counter ticking (`⏱️ {elapsedWaitSec}s`), typing animation, and `"Waiting for Gemini (gemini-3.5-flash-lite)..."` status.
  - **Right Pane (`lg:col-span-4`) - Reverse History Aligned with Option 1**: Renders turns in reverse chronological order (`[...history].reverse()`) with the latest turn at the very top (bearing a `Latest` badge and `Turn #N`), aligned with Option 1 across the desktop split grid (`items-start`).
  - **Interactive Steering Loop**: Clickable anticipated patient reply chips and fixed bottom steering bar with rapid prompt chips.

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


