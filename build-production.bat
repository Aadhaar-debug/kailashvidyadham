@echo off
echo Building Kailash Vidya Dham with LIVE Razorpay credentials...
echo.

REM Set production environment variables
set REACT_APP_RAZORPAY_KEY_ID=
set REACT_APP_RAZORPAY_KEY_SECRET=
set NODE_ENV=
set PORT=

echo Environment variables set:
echo REACT_APP_RAZORPAY_KEY_ID=%REACT_APP_RAZORPAY_KEY_ID%
echo NODE_ENV=%NODE_ENV%
echo PORT=%PORT%
echo.

echo Starting production build...
npm run build

echo.
echo Build completed! Check the build folder for production files.
echo To start the production server, run: serve -s build -p 5000
pause
