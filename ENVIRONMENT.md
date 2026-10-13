# Environment Configuration & Execution Rules

## System Details
- **OS**: Windows (PowerShell / Command Prompt)
- **Python venv binary**: `.\venv\Scripts\python.exe`
- **Pip binary**: `.\venv\Scripts\pip.exe`
- **External Credentials File**: `C:\Users\diond\Desktop\Projects\EXTERNAL_TO_REPOS\credentials\secrets.env`

## Running Backend and Frontend Concurrently

### Terminal 1: Backend Server (FastAPI)
Run the development API server locally:
```powershell
.\venv\Scripts\python.exe -m uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload
```
> [!NOTE]
> Binding to `--host 0.0.0.0` allows both desktop browsers (`http://localhost:8000`) and mobile devices on the same Wi-Fi subnet to access the API via the PC's local IP address (e.g. `http://<LAN-IP>:8000`).

### Terminal 2: Frontend Server (Vite PWA)
Run the Vite development server:
```powershell
cd frontend
npm run dev
```
> [!NOTE]
> Vite runs on `http://localhost:5173` (and binds to `0.0.0.0` for phone/LAN access at `http://<LAN-IP>:5173`). All `/api/*` calls are automatically proxied to the backend at `http://localhost:8000`.

## Security & Secrets Management Rules
1. **External Credentials Storage**: Credentials and API keys live externally at `C:\Users\diond\Desktop\Projects\EXTERNAL_TO_REPOS\credentials\secrets.env` and must be loaded via `backend/config.py`.
2. **No Repository Secrets**: NEVER copy API keys, secrets, or service account JSON files into the repository root or codebase.

## Windows-Specific Execution Rules
1. **Direct Binary Invocation**: NEVER use Linux commands like `source venv/bin/activate`. Always call `.\venv\Scripts\python.exe` directly (or `.\venv\Scripts\pip.exe`).
2. **PowerShell ExecutionPolicy Restrictions**: Do not run `.ps1` scripts (including `activate.ps1`) due to PowerShell ExecutionPolicy restrictions.
