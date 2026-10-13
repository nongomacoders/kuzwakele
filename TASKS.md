# Project Tasks

## Setup & Environment
- [x] Set up Python virtual environment and tracking documentation on Windows
  - [x] Create `requirements.txt` with core dependencies
  - [x] Create virtual environment `venv`
  - [x] Upgrade pip and install `requirements.txt` using `.\venv\Scripts\python.exe`
  - [x] Document Windows execution rules in `ENVIRONMENT.md`
  - [x] Configure `.gitignore`
  - [x] Update `STATE.md` and `TASKS.md`

## Backend Configuration
- [x] Configure backend secrets loading from external credentials store
  - [x] Create `backend/` package and `backend/config.py`
  - [x] Load external `secrets.env` via `python-dotenv`
  - [x] Read and export `OPENROUTER_API_KEY`, `GOOGLE_APPLICATION_CREDENTIALS`, and `DEFAULT_MODEL`
  - [x] Ensure `os.environ["GOOGLE_APPLICATION_CREDENTIALS"]` is explicitly set
  - [x] Configure fallback AI provider resolution
  - [x] Update `ENVIRONMENT.md` with credentials location and security rules
  - [x] Update `STATE.md`

## AI Pipeline
- [x] Configure dual-provider AI pipeline with Vertex AI and OpenRouter fallback
  - [x] Add `httpx>=0.27.0` to `requirements.txt` and install in venv
  - [x] Configure `VERTEX_MODEL = "gemini-3.8-flash"`, `THINKING_BUDGET = "low"`, and `OPENROUTER_FALLBACK_MODEL = "openrouter/free"` in `backend/config.py`
  - [x] Create `backend/ai_client.py` with resilient `generate_response()`
  - [x] Create test script `backend/test_ai.py` and verify all tests pass
  - [x] Update `STATE.md` and `TASKS.md`
