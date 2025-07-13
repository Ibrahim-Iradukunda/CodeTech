Write-Host "Starting CodeTech Learning Platform..." -ForegroundColor Green
Write-Host ""

# Check if virtual environment exists
if (-not (Test-Path "backend\venv")) {
    Write-Host "Error: Virtual environment not found!" -ForegroundColor Red
    Write-Host "Please run '.\run-all.ps1' first to set up the environment." -ForegroundColor Yellow
    exit 1
}

Write-Host "Starting Backend Server..." -ForegroundColor Yellow
Set-Location backend
Start-Process powershell -ArgumentList "-NoExit", "-Command", ".\venv\Scripts\Activate.ps1; uvicorn main:app --reload --host 0.0.0.0 --port 8000"

Write-Host ""
Write-Host "Starting Frontend Server..." -ForegroundColor Yellow
Set-Location ..
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev"

Write-Host ""
Write-Host "Both servers are starting..." -ForegroundColor Green
Write-Host "Backend: http://localhost:8000" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Admin Login: AdminIbra@gmail.com / IbraGold@1" -ForegroundColor Magenta
Write-Host "Student Login: student@alu.edu / password123" -ForegroundColor Magenta
Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 