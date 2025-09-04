# PowerShell script to build Kailash Vidya Dham with LIVE Razorpay credentials

Write-Host "Building Kailash Vidya Dham with LIVE Razorpay credentials..." -ForegroundColor Green
Write-Host ""

# Set production environment variables
$env:REACT_APP_RAZORPAY_KEY_ID = "rzp_live_RA1C2dbaJiUkbn"
$env:REACT_APP_RAZORPAY_KEY_SECRET = "LT7jlwBgSLiXQmaL4cym0I6g"
$env:NODE_ENV = "production"
$env:PORT = "5000"

Write-Host "Environment variables set:" -ForegroundColor Yellow
Write-Host "REACT_APP_RAZORPAY_KEY_ID: $env:REACT_APP_RAZORPAY_KEY_ID" -ForegroundColor Cyan
Write-Host "NODE_ENV: $env:NODE_ENV" -ForegroundColor Cyan
Write-Host "PORT: $env:PORT" -ForegroundColor Cyan
Write-Host ""

Write-Host "Starting production build..." -ForegroundColor Green
npm run build

Write-Host ""
Write-Host "Build completed! Check the build folder for production files." -ForegroundColor Green
Write-Host "To start the production server, run: serve -s build -p 5000" -ForegroundColor Yellow
Write-Host "Or use: .\start-production.ps1" -ForegroundColor Yellow
