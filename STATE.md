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
  - `VERTEX_MODEL = "gemini-3.8-flash"`
  - `THINKING_BUDGET = "low"`
  - `OPENROUTER_FALLBACK_MODEL = "openrouter/free"`
  - `DEFAULT_MODEL` (configured with fallback provider resolution)

## AI Pipeline
- **Status**: Active & Verified
- **Client Module**: `backend/ai_client.py`
- **Function**: `generate_response(prompt: str, system_instruction: str = "") -> dict`
- **Primary Provider**: Vertex AI (`gemini-3.8-flash`, thinking effort: `low`) authenticated via service account.
- **Failover / Fallback Provider**: OpenRouter (`openrouter/free`) via async HTTP POST using `httpx`.
- **Resilience**: Catches quota exhaustion (429/ResourceExhausted), billing errors (402), client/not-found errors, connection issues, or bypassed credentials, seamlessly routing to OpenRouter.
- **Validation**: Verified end-to-end via `backend/test_ai.py` (Vertex ping, bypassed credentials fallback, live failover, and mocked Vertex contract all passing).

## FastAPI Server & Live Co-Pilot API
- **Status**: Active & Verified
- **Server Module**: `backend/main.py`
- **App**: `Kuzwakele API` v1.0.0
- **CORS Configuration**: Wildcard CORS enabled (`allow_origins=["*"]`, `allow_methods=["*"]`, `allow_headers=["*"]`) for desktop (`localhost`) and mobile access across local Wi-Fi subnet.
- **Endpoints**:
  - `GET /api/health`: Health status and active AI provider.
  - `POST /api/consult`: Clinical Co-Pilot consultation endpoint accepting `ConsultRequest` (`text`, `mode`: `questions` | `translate`) and returning `ConsultResponse` (`result`, `provider_used`, `model`).
  - **Clinical System Prompt**: `KZN_CLINICAL_SYSTEM_PROMPT` tailored for rural KwaZulu-Natal healthcare communication.
- **Validation**: Fully verified via `backend/test_server.py` with 200 OK responses on all endpoints.

## Frontend PWA & Live Interface
- **Status**: Active & Verified
- **Directory**: `frontend/`
- **Stack**: Vite + React + Tailwind CSS + Lucide React + VitePWA
- **Navigation Shell**: 3 tabs (`Live Co-Pilot`, `Scenarios`, `Drills Gym`) with header health indicator pinging `/api/health`.
- **Live Tab (`LiveConsult.jsx`)**: Operational consultation co-pilot with `Clinical Questions` and `Express Translate` modes, KZN presets, high-contrast inputs, provider badge, and copy functionality.
- **Build Verification**: `npm run build` compiled cleanly (1912 modules, service worker precache generated).
