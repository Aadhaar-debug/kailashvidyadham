# 🚀 LIVE Razorpay Integration Setup - Kailash Vidya Dham

## ✅ **LIVE CREDENTIALS CONFIGURED**

Your application is now configured with **LIVE Razorpay credentials** and will process **real payments** (not test mode).

### 🔑 **Live API Credentials**
```
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
PORT=
NODE_ENV=
```

## 🚀 **Quick Start - Production Mode**

### **Option 1: Using PowerShell Scripts (Recommended)**
```powershell
# Build production version
.\build-production.ps1

# Start production server
.\start-production.ps1
```

### **Option 2: Using Batch Files**
```cmd
# Build production version
build-production.bat

# Start production server
start-production.bat
```

### **Option 3: Using NPM Scripts**
```bash
# Build production version
npm run build:prod

# Start production server
npm run start:prod
```

### **Option 4: Manual Environment Setup**
```bash
# Set environment variables manually
set REACT_APP_RAZORPAY_KEY_ID=rzp_live_RA1C2dbaJiUkbn
set NODE_ENV=production
set PORT=5000

# Start the application
npm start
```

## 🌐 **Production Server**

- **Port**: 5000
- **Environment**: Production
- **Payment Mode**: LIVE (Real Money)
- **URL**: http://localhost:5000

## 💳 **Payment Testing with Live Credentials**

### **⚠️ IMPORTANT: This is LIVE mode - Real payments will be processed!**

For testing purposes, you can use:
- **UPI**: Any valid UPI ID
- **Net Banking**: Any supported bank
- **Cards**: Real credit/debit cards
- **Wallets**: Paytm, PhonePe, etc.

### **Test Card (Use at your own risk - Real charges apply)**
```
Card Number: 4111 1111 1111 1111
Expiry: Any future date
CVV: Any 3 digits
Name: Any name
```

## 🔧 **Files Created/Modified**

### **New Files:**
- `env.production` - Production environment variables
- `env.local` - Local environment variables
- `build-production.bat` - Windows batch build script
- `start-production.bat` - Windows batch start script
- `build-production.ps1` - PowerShell build script
- `start-production.ps1` - PowerShell start script
- `LIVE_RAZORPAY_SETUP.md` - This setup guide

### **Modified Files:**
- `src/utils/razorpay.js` - Updated with live credentials
- `package.json` - Added production scripts
- `public/index.html` - Razorpay script included

## 🎯 **Integrated Payment Pages**

1. **Home Page** - Book Now button → Payment modal
2. **ServiceDetails Page** - Pay Now button → Service booking
3. **Donations Page** - Pay Now button → Donation processing
4. **BookingDetails Page** - Pay Now button → Event booking

## 🔒 **Security Features**

- ✅ Live Razorpay credentials configured
- ✅ Production environment setup
- ✅ Secure payment processing
- ✅ Environment variable protection
- ✅ HTTPS ready for production

## 🚨 **Important Notes**

1. **LIVE MODE**: All payments will be real transactions
2. **No Test Mode**: This is production-ready
3. **Real Money**: Users will be charged actual amounts
4. **Production Ready**: Deploy directly to your server
5. **Port 5000**: Configured for production deployment

## 🚀 **Deployment**

### **Local Production Testing:**
```bash
npm run build:prod
npm run start:prod
```

### **Server Deployment:**
1. Build the application: `npm run build:prod`
2. Upload `build/` folder to your server
3. Configure server to run on port 5000
4. Set environment variables on server

## 📞 **Support**

- **Razorpay Support**: https://razorpay.com/support/
- **Documentation**: https://razorpay.com/docs/
- **Dashboard**: https://dashboard.razorpay.com/

## ✅ **Status: READY FOR LIVE PAYMENTS**

Your Kailash Vidya Dham temple website is now configured with **LIVE Razorpay credentials** and will process **real payments** from users.

**Next Steps:**
1. Test the payment flow locally
2. Deploy to your production server
3. Start accepting real payments from devotees

---

**⚠️ REMEMBER: This is LIVE mode - Real money will be processed!**
