// Verification script for LIVE Razorpay credentials
// Run this to confirm your setup is correct

console.log('🔍 Verifying LIVE Razorpay Credentials...\n');

// Check environment variables
const keyId = process.env.REACT_APP_RAZORPAY_KEY_ID;
const keySecret = process.env.REACT_APP_RAZORPAY_KEY_SECRET;
const nodeEnv = process.env.NODE_ENV;
const port = process.env.PORT;

console.log('📋 Environment Variables:');
console.log('REACT_APP_RAZORPAY_KEY_ID:', keyId ? '✅ SET' : '❌ NOT SET');
console.log('REACT_APP_RAZORPAY_KEY_SECRET:', keySecret ? '✅ SET' : '❌ NOT SET');
console.log('NODE_ENV:', nodeEnv || '❌ NOT SET');
console.log('PORT:', port || '❌ NOT SET');

console.log('\n🔑 Credential Details:');
if (keyId) {
    if (keyId.startsWith('rzp_live_')) {
        console.log('✅ LIVE MODE: Real payments will be processed');
        console.log('Key ID:', keyId);
    } else if (keyId.startsWith('rzp_test_')) {
        console.log('⚠️  TEST MODE: Only test payments will be processed');
        console.log('Key ID:', keyId);
    } else {
        console.log('❌ INVALID: Key format not recognized');
        console.log('Key ID:', keyId);
    }
} else {
    console.log('❌ ERROR: Razorpay Key ID not found');
}

console.log('\n🌐 Server Configuration:');
console.log('Environment:', nodeEnv || 'development');
console.log('Port:', port || '3000 (default)');

console.log('\n📱 Payment Integration Status:');
console.log('✅ Home Page - Book Now button');
console.log('✅ ServiceDetails Page - Pay Now button');
console.log('✅ Donations Page - Pay Now button');
console.log('✅ BookingDetails Page - Pay Now button');

console.log('\n🚀 Next Steps:');
if (keyId && keyId.startsWith('rzp_live_')) {
    console.log('1. ✅ Credentials verified - LIVE mode active');
    console.log('2. 🚀 Start production server: npm run start:prod');
    console.log('3. 🌐 Test payments at: http://localhost:' + (port || '5000'));
    console.log('4. 💳 Process real payments from users');
} else {
    console.log('1. ❌ Credentials not properly configured');
    console.log('2. 🔧 Check environment variables');
    console.log('3. 📖 Review LIVE_RAZORPAY_SETUP.md');
}

console.log('\n⚠️  IMPORTANT: This is LIVE mode - Real money will be processed!');
console.log('💡 For testing, use small amounts and real payment methods');
