# Razorpay Payment Integration Setup

This guide explains how to set up Razorpay payment integration for the Kailash Vidya Dham temple website.

## Prerequisites

1. Razorpay account (https://razorpay.com)
2. Test and Live API keys from Razorpay dashboard

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Razorpay Configuration
REACT_APP_RAZORPAY_KEY_ID=rzp_test_YOUR_TEST_KEY_ID
REACT_APP_RAZORPAY_KEY_SECRET=YOUR_TEST_KEY_SECRET

# For production, use live keys
# REACT_APP_RAZORPAY_KEY_ID=rzp_live_YOUR_LIVE_KEY_ID
# REACT_APP_RAZORPAY_KEY_SECRET=YOUR_LIVE_KEY_SECRET
```

### 2. Get Your Razorpay Keys

1. Log in to your Razorpay dashboard
2. Go to Settings > API Keys
3. Generate a new key pair
4. Copy the Key ID and Key Secret to your `.env` file

### 3. Test the Integration

1. Start the development server: `npm start`
2. Navigate to the Home page and click "Book Now"
3. Fill in the payment form and click "Pay Now - ₹2,040"
4. The Razorpay payment modal should open
5. Use test card details for testing:
   - Card Number: 4111 1111 1111 1111
   - Expiry: Any future date
   - CVV: Any 3 digits
   - Name: Any name

### 4. Production Deployment

Before deploying to production:

1. Replace test keys with live keys in your environment variables
2. Update the logo URL in `src/utils/razorpay.js`
3. Test the live integration thoroughly
4. Ensure your backend can handle payment verification

## Integrated Pages

The following pages now have Razorpay payment integration:

1. **Home Page** - Book Now button opens payment modal
2. **ServiceDetails Page** - Pay Now button processes service booking payments
3. **Donations Page** - Pay Now button processes donation payments
4. **BookingDetails Page** - Pay Now button processes event booking payments

## Payment Flow

1. User fills out the form
2. Clicks "Pay Now" button
3. Razorpay payment modal opens
4. User completes payment
5. Success/failure callback handles the response
6. Form is reset and success message is shown

## Customization

You can customize the payment integration by modifying:

- `src/utils/razorpay.js` - Payment configuration and functions
- Payment amounts and descriptions in individual pages
- Success/failure handling logic
- UI styling and branding

## Security Notes

- Never expose your Razorpay secret key in client-side code
- Always verify payments on your backend
- Use HTTPS in production
- Implement proper error handling and validation

## Support

For Razorpay-related issues, refer to:
- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Support](https://razorpay.com/support/)

For application-specific issues, check the browser console for error logs.
