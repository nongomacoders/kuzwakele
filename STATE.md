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
- **Execution Rules**: Windows-specific guidelines documented in `ENVIRONMENT.md`.

## Backend Configuration & Secrets
- **Status**: Configured and verified
- **Configuration Module**: `backend/config.py`
- **Secrets Store**: Credentials loaded externally from `C:\Users\diond\Desktop\Projects\EXTERNAL_TO_REPOS\credentials\secrets.env`
- **Exported Settings**:
  - `OPENROUTER_API_KEY` (loaded from external secrets)
  - `GOOGLE_APPLICATION_CREDENTIALS` (resolved and explicitly populated in `os.environ` for Google Cloud SDK)
  - `DEFAULT_MODEL` (`gemini-1.5-flash` with fallback provider resolution)
- **AI Providers**: Configured with primary (`google`) and fallback (`openrouter`) provider routing.
