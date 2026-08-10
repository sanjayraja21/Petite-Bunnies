@echo off
cd /d "%~dp0"
start "Frontend" cmd /k npm run dev
start "Backend" cmd /k C:/Users/sanjay/AppData/Local/Microsoft/WindowsApps/python3.11.exe -m uvicorn backend.main:app --reload --host 0.0.0.0 --port 8001
