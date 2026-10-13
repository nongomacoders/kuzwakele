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

## Mobile Scenario Stepper & Offline Practice
- **Status**: Active & Verified (Text-Only, Zero Mic/Audio Dependencies)
- **Components**:
  - `frontend/src/components/ScenariosView.jsx`: Mobile-first dialogue stepper with Back/Next navigation.
  - `frontend/src/data/scenariosData.js`: Pre-filled community dialogue scenarios.
  - `frontend/src/utils/drillsStorage.js`: LocalStorage manager (`kuzwakele_flagged_drills`) with reactive window events.
  - `frontend/src/components/DrillsGym.jsx`: Spaced repetition drill deck with Review List for flagged phrases.
- **Scenarios Included**:
  - **Scenario 1**: "Gogo MaMthethwa — Ukubonisana (Life Counseling)" (washed-out roads, caregiver burden, whoonga crisis, swollen feet, medication side-effects, dignity).
  - **Scenario 2**: "The Roadside Greeting — Ukubingelela & News" (respectful plural greeting, homestead well-being, drought/water crisis, non-condescending water purification).
- **Core Capabilities**:
  - **Text-Only Design**: Completely eliminated audio players, recording permissions, and live generation latency for fluid mobile reading.
  - **Dual Independent Toggles**: `[ 🌐 English ]` and `[ 🔬 Detailed Grammar ]` switches for focused immersion or grammatical deep-dives.
  - **Phonetic & Cadence Cues**: Plain-text acoustic guidance on vowel coalescence (*yemvula*), contractions (*kukhon'okuhambayo*), click pronunciations (*q*, *c*, *x*), and penultimate lengthening.
  - **Morphological Analysis**: Granular breakdown cards detailing subject concords, noun classes, stative suffixes (*-ile*), negative participials, applicatives, and causatives.
  - **1-Tap Sentence Bookmarking**: Instant flagging for both patient colloquialisms and doctor response choices with live badge counter synchronization.
  - **Drills Gym Review List**: Dedicated review deck displaying flagged sentences, complete grammar breakdowns, speaker filters (`Patient`, `Doctor`, `All`), and remove actions.

## SQLite Seed Harvester & Zero-Click Auto-Harvesting
- **Status**: Active & Verified (Silent Fire-and-Forget Auto-Persist)
- **Database Module**: `backend/database.py` using standard library `sqlite3`
- **Database File**: `backend/kuzwakele.db` (git-ignored)
- **Table Schema**: `interaction_seeds` (`id`, `session_id`, `created_at`, `intake_summary`, `turn_number`, `doctor_isizulu`, `doctor_english`, `patient_isizulu`, `patient_english`, `cultural_note`, `steer_context`, `tags`, `distill_target`, `sync_status`, `firebase_id`, `raw_turn_payload`)
- **API Endpoints**:
  - `POST /api/seeds`: Saves interaction seed, generates UUID and ISO-8601 UTC timestamp.
  - `GET /api/seeds`: Lists saved seeds sorted by `created_at DESC` with optional `sync_status` filter.
  - `DELETE /api/seeds/{seed_id}`: Deletes a seed record.
  - `GET /api/seeds/export`: Formats seeds into Firestore batch collection document format (`collection: "interaction_seeds"`, `data: {...}`).
- **Zero-Click Silent Auto-Harvesting**:
  - `autoSaveTurn(turnData)`: Non-blocking fire-and-forget helper silently persisting consultation turns directly to `POST /api/seeds`.
  - Automatically triggered whenever a turn is committed to history (upon selecting an anticipated patient reply) and after steering responses resolve.
  - Silent error handling ensures consultation flow is never interrupted or blocked by network or database issues.
  - Removed all manual bookmarking UI: stripped `[ Save Seed ]` / `[ Saved Seed ]` buttons, intent dropdowns, and associated component state.
  - Minimal History Cards: each card now displays solely the Turn header (Turn #N, latency badge, timestamp), Doctor turn (isiZulu & English subtitle), and Patient turn (isiZulu & English subtitle).
