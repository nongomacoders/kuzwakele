# Environment Configuration & Execution Rules

## System Details
- **OS**: Windows (PowerShell / Command Prompt)
- **Python venv binary**: `.\venv\Scripts\python.exe`
- **Pip binary**: `.\venv\Scripts\pip.exe`

## Windows-Specific Execution Rules
1. **Direct Binary Invocation**: NEVER use Linux commands like `source venv/bin/activate`. Always call `.\venv\Scripts\python.exe` directly (or `.\venv\Scripts\pip.exe`).
2. **PowerShell ExecutionPolicy Restrictions**: Do not run `.ps1` scripts (including `activate.ps1`) due to PowerShell ExecutionPolicy restrictions.
