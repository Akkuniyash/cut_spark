@echo off
echo ========================================
echo CUT SPARK - Starting Local Server
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Python detected! Starting server...
    echo.
    echo Server will run at: http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    echo Opening browser in 3 seconds...
    timeout /t 3 /nobreak >nul
    start http://localhost:8000
    python -m http.server 8000
) else (
    echo Python not found!
    echo.
    echo Please install Python from: https://www.python.org/downloads/
    echo Or use another method from RUN_INSTRUCTIONS.txt
    echo.
    pause
)
