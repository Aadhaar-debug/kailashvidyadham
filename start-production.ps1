# PowerShell script to start Kailash Vidya Dham with LIVE Razorpay credentials

Write-Host "Starting Kailash Vidya Dham with LIVE Razorpay credentials..." -ForegroundColor Green
Write-Host ""

# Set production environment variables
$env:REACT_APP_RAZORPAY_KEY_ID = ""
$env:REACT_APP_RAZORPAY_KEY_SECRET = ""
$env:NODE_ENV = ""
$env:PORT = ""

Write-Host "Environment variables set:" -ForegroundColor Yellow
Write-Host "REACT_APP_RAZORPAY_KEY_ID: $env:REACT_APP_RAZORPAY_KEY_ID" -ForegroundColor Cyan
Write-Host "NODE_ENV: $env:NODE_ENV" -ForegroundColor Cyan
Write-Host "PORT: $env:PORT" -ForegroundColor Cyan
Write-Host ""

Write-Host "Starting production server on port 5000..." -ForegroundColor Green
npm start
