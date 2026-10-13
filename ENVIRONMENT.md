# Environment Configuration & Execution Rules

## System Details
- **OS**: Windows (PowerShell / Command Prompt)
- **Python venv binary**: `.\venv\Scripts\python.exe`
- **Pip binary**: `.\venv\Scripts\pip.exe`
- **External Credentials File**: `C:\Users\diond\Desktop\Projects\EXTERNAL_TO_REPOS\credentials\secrets.env`

## Security & Secrets Management Rules
1. **External Credentials Storage**: Credentials and API keys live externally at `C:\Users\diond\Desktop\Projects\EXTERNAL_TO_REPOS\credentials\secrets.env` and must be loaded via `backend/config.py`.
2. **No Repository Secrets**: NEVER copy API keys, secrets, or service account JSON files into the repository root or codebase.

## Windows-Specific Execution Rules
1. **Direct Binary Invocation**: NEVER use Linux commands like `source venv/bin/activate`. Always call `.\venv\Scripts\python.exe` directly (or `.\venv\Scripts\pip.exe`).
2. **PowerShell ExecutionPolicy Restrictions**: Do not run `.ps1` scripts (including `activate.ps1`) due to PowerShell ExecutionPolicy restrictions.
