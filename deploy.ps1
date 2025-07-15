# deploy.ps1
Write-Host "Building Next.js application..." -ForegroundColor Yellow
npm run build

Write-Host "Cleaning previous deployment..." -ForegroundColor Yellow
if (Test-Path "deploy") {
    Remove-Item "deploy" -Recurse -Force
}

Write-Host "Creating deployment package..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path "deploy" -Force

# Copy standalone files
Copy-Item ".next\standalone\*" "deploy\" -Recurse -Force

# Create .next directory in deploy
New-Item -ItemType Directory -Path "deploy\.next" -Force

# Copy static files
Copy-Item ".next\static" "deploy\.next\static" -Recurse -Force

# Copy public folder if it exists
if (Test-Path "public") {
    Copy-Item "public" "deploy\public" -Recurse -Force
}

# Copy environment file if it exists
if (Test-Path ".env.local") {
    Copy-Item ".env.local" "deploy\.env.local" -Force
    Write-Host "Copied .env.local to deployment package" -ForegroundColor Green
}

Write-Host "Deployment package ready in ./deploy" -ForegroundColor Green
Write-Host "To run: cd deploy && node server.js" -ForegroundColor Cyan