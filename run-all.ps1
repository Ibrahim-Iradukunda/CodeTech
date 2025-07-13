# PowerShell script to run both backend and frontend

Write-Host "Setting up CodeTech development environment..." -ForegroundColor Green

# Check if Python is installed
try {
    $pythonVersion = python --version
    Write-Host "Python found: $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "Error: Python is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Python from https://python.org" -ForegroundColor Yellow
    exit 1
}

# Navigate to backend directory
Set-Location backend

# Check if virtual environment exists, if not create it
if (-not (Test-Path "venv")) {
    Write-Host "Creating virtual environment..." -ForegroundColor Yellow
    python -m venv venv
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Error: Failed to create virtual environment" -ForegroundColor Red
        exit 1
    }
    Write-Host "Virtual environment created successfully" -ForegroundColor Green
}

# Activate virtual environment and install dependencies
Write-Host "Installing Python dependencies..." -ForegroundColor Yellow
& ".\venv\Scripts\Activate.ps1"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Failed to activate virtual environment" -ForegroundColor Red
    exit 1
}

# Install requirements
pip install -r requirements.txt
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Failed to install Python dependencies" -ForegroundColor Red
    exit 1
}

Write-Host "Python dependencies installed successfully" -ForegroundColor Green

# Go back to root directory
Set-Location ..

# Check if node_modules exists, if not install npm dependencies
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing Node.js dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Error: Failed to install Node.js dependencies" -ForegroundColor Red
        exit 1
    }
    Write-Host "Node.js dependencies installed successfully" -ForegroundColor Green
}

Write-Host "Starting backend server..." -ForegroundColor Green
# Start backend in a new PowerShell window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; .\venv\Scripts\Activate.ps1; uvicorn main:app --reload --host 0.0.0.0 --port 8000"

Write-Host "Starting frontend development server..." -ForegroundColor Green
# Start frontend in a new PowerShell window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev"

Write-Host "Both servers are starting..." -ForegroundColor Green
Write-Host "Backend will be available at: http://localhost:8000" -ForegroundColor Cyan
Write-Host "Frontend will be available at: http://localhost:3000" -ForegroundColor Cyan
Write-Host "Press Ctrl+C in any of the server windows to stop them" -ForegroundColor Yellow 