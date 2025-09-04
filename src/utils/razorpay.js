// Note: We're not importing Razorpay directly to avoid webpack issues
// Instead, we'll use the global Razorpay object that gets loaded via script tag

// Initialize Razorpay configuration with LIVE credentials
const razorpayConfig = {
  key: process.env.REACT_APP_RAZORPAY_KEY_ID || '',
  currency: 'INR',
  name: 'Kailash Vidya Dham',
  description: 'Temple Services & Donations',
  image: 'https://kailashvidyadham.com/logo.png', // Update with your actual logo URL
  prefill: {
    name: '',
    email: '',
    contact: ''
  },
  notes: {
    address: 'Kailash Vidya Dham, Jammu'
  },
  theme: {
    color: '#BF0000' // Using the temple's crimson color
  }
};

// Function to create payment order
export const createPaymentOrder = async (amount, currency = 'INR') => {
  try {
    // For live mode, Razorpay will create the order internally
    // We just need to provide the amount and currency
    return {
      amount: amount * 100, // Razorpay expects amount in paise
      currency: currency
    };
  } catch (error) {
    console.error('Error creating payment order:', error);
    throw error;
  }
};

// Function to process payment
export const processPayment = (orderDetails, userDetails, onSuccess, onFailure) => {
  // Check if Razorpay is loaded
  if (typeof window.Razorpay === 'undefined') {
    console.error('Razorpay not loaded. Please ensure the Razorpay script is included.');
    if (onFailure) {
      onFailure('Payment gateway not available');
    }
    return;
  }

  const options = {
    key: process.env.REACT_APP_RAZORPAY_KEY_ID || '',
    amount: orderDetails.amount,
    currency: orderDetails.currency || 'INR',
    name: 'Kailash Vidya Dham',
    description: orderDetails.description || 'Temple Services & Donations',
    image: 'https://kailashvidyadham.com/logo.png',
    prefill: {
      name: userDetails.name || '',
      email: userDetails.email || '',
      contact: userDetails.phone || ''
    },
    notes: {
      address: userDetails.address || 'Kailash Vidya Dham, Jammu',
      service: orderDetails.serviceName || 'Temple Service'
    },
    theme: {
      color: '#BF0000'
    },
    handler: function (response) {
      // Payment successful
      console.log('Payment successful:', response);
      if (onSuccess) {
        onSuccess(response);
      }
    },
    modal: {
      ondismiss: function () {
        // Payment modal dismissed
        console.log('Payment modal dismissed');
        if (onFailure) {
          onFailure('Payment cancelled by user');
        }
      }
    }
  };

  try {
    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error('Error opening Razorpay:', error);
    if (onFailure) {
      onFailure('Failed to open payment gateway');
    }
  }
};

// Function to handle payment success
export const handlePaymentSuccess = (response, orderDetails) => {
  // In a real application, you would verify the payment with your backend
  // and update the order status
  console.log('Payment verification response:', response);
  
  return {
    success: true,
    paymentId: response.razorpay_payment_id,
    orderId: response.razorpay_order_id,
    signature: response.razorpay_signature,
    amount: orderDetails.amount / 100, // Convert back from paise to rupees
    timestamp: new Date().toISOString()
  };
};

// Function to handle payment failure
export const handlePaymentFailure = (error) => {
  console.error('Payment failed:', error);
  
  return {
    success: false,
    error: error.message || 'Payment failed',
    timestamp: new Date().toISOString()
  };
};

export default razorpayConfig;
