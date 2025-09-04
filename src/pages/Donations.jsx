import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Donations.css';
import Popup from '../components/Popup';
import photo19 from '../assets/images/photo (19).jpeg';
import { processPayment, createPaymentOrder } from '../utils/razorpay';

const donationCategories = [
  {
    id: 'gurukul',
    name: 'Gurukul',
    description: 'Support Vedic education and traditional learning',
    minAmount: 101
  },
  {
    id: 'jansena',
    name: 'Jansena',
    description: 'Support our community service initiatives',
    minAmount: 101
  },
  {
    id: 'ghoshala',
    name: 'Ghoshala',
    description: 'Support cow protection and care',
    minAmount: 101
  },
  {
    id: 'vidwaAshram',
    name: 'Vidwa Ashram',
    description: 'Support shelter and care for widows',
    minAmount: 101
  },
  {
    id: 'kanyagurukul',
    name: 'Kanya Gurukul',
    description: 'Support education for girls in Vedic traditions',
    minAmount: 101
  },
  {
    id: 'mandirNirman',
    name: 'Mandir Nirman',
    description: 'Contribute to temple construction and maintenance',
    minAmount: 101
  },
  {
    id: 'mandirland',
    name: 'Mandir Land',
    description: 'Support land acquisition for temple expansion',
    minAmount: 1001
  },
  {
    id: 'murthySthapna',
    name: 'Murthy Sthapna',
    description: 'Contribute to deity installation ceremonies',
    minAmount: 1001
  },
  {
    id: 'murthyPooja',
    name: 'Murthy Pooja',
    description: 'Support daily deity worship and ceremonies',
    minAmount: 101
  },
  {
    id: 'kanyaPujan',
    name: 'Kanya Pujan',
    description: 'Support worship and welfare of young girls',
    minAmount: 101
  },
  {
    id: 'anatKanya',
    name: 'Anat Kanya',
    description: 'Support orphaned girls education and care',
    minAmount: 101
  },
  {
    id: 'orphanMeals',
    name: 'Meals for Orphan Kids',
    description: 'Provide meals to orphaned children',
    minAmount: 51
  },
  {
    id: 'ashaWrith',
    name: 'Asha & Writh',
    description: 'Support hope and prosperity initiatives',
    minAmount: 101
  },
  {
    id: 'gaushalaSaathur',
    name: 'Gaushala Saathur',
    description: 'Support specific cow shelter maintenance',
    minAmount: 101
  },
  {
    id: 'sanyas',
    name: 'Sanyas',
    description: 'Support ascetic and spiritual practices',
    minAmount: 101
  },
  {
    id: 'langarSeva',
    name: 'Langar Seva',
    description: 'Support free food distribution service',
    minAmount: 51
  }
];

const Donations = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pan, setPan] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: '', type: '' });

  const closePopup = () => {
    setPopup({ show: false, message: '', type: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedCategory) {
      setPopup({
        show: true,
        type: 'error',
        message: 'Please select a donation category'
      });
      return;
    }

    const selectedCat = donationCategories.find(cat => cat.id === selectedCategory);
    if (parseInt(amount) < selectedCat.minAmount) {
      setPopup({
        show: true,
        type: 'error',
        message: `Minimum amount for ${selectedCat.name} is ₹${selectedCat.minAmount}`
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create payment order
      const orderDetails = await createPaymentOrder(parseInt(amount));
      
      // Process payment
      processPayment(
        {
          ...orderDetails,
          description: `Donation to ${selectedCat.name}`,
          serviceName: `Donation - ${selectedCat.name}`
        },
        {
          name: name,
          email: email,
          phone: phone,
          address: 'Kailash Vidya Dham, Jammu'
        },
        (response) => {
          // Payment success
          setPopup({
            show: true,
            type: 'success',
            message: 'Thank you for your donation! Your contribution will help make a difference.'
          });
          
          // Reset form
          setSelectedCategory('');
          setAmount('');
          setName('');
          setEmail('');
          setPhone('');
          setPan('');
          setIsSubmitting(false);
        },
        (error) => {
          // Payment failed
          setPopup({
            show: true,
            type: 'error',
            message: `Payment failed: ${error}. Please try again.`
          });
          setIsSubmitting(false);
        }
      );
    } catch (error) {
      console.error('Error processing payment:', error);
      setPopup({
        show: true,
        type: 'error',
        message: 'Error processing payment. Please try again later.'
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mothercontainer">
      <Helmet>
        <title>Donate to Kailash Vidya Dham | Support Our Temple & Community Services</title>
        <meta name="description" content="Make a donation to Kailash Vidya Dham temple's various charitable causes including Gurukul, Gaushala, orphan care, and more. Support our community services." />
        <meta name="keywords" content="temple donation, charitable giving, Gurukul donation, Gaushala donation, temple services, community support" />
        <link rel="canonical" href="https://kailashvidyadham.com/donations" />
      </Helmet>

      <h1 className="page-title" style={{color:'gold'}}>Make a Donation</h1>
      
      <div className="contactcontain">
        <div className="contactphoto">
          <img src={photo19} alt="Temple Donation" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '25px' }} />
        </div>
        <div className="contacttext">
          <h2 style={{color: 'gold', marginBottom: '1.5rem'}}>Donation Form</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="category">Donation Category</label>
              <select 
                id="category" 
                name="category" 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                required
              >
                <option value="" disabled>Select a category</option>
                {donationCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} (Min: ₹{category.minAmount})
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="amount">Amount (₹)</label>
              <input 
                type="number" 
                id="amount" 
                name="amount" 
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min={selectedCategory ? donationCategories.find(c => c.id === selectedCategory)?.minAmount : 0}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required 
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="pan">PAN Number (Optional)</label>
              <input 
                type="text" 
                id="pan" 
                name="pan" 
                placeholder="Enter PAN number for tax benefits"
                value={pan}
                onChange={(e) => setPan(e.target.value)}
                pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                title="Enter valid PAN number"
              />
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Pay Now'}
            </button>
          </form>
        </div>
      </div>

      <div className="contactothertext">
        <div className="donation-benefits">
          <h3 style={{color: 'gold'}}>Benefits of Donating</h3>
          <ul style={{textAlign: 'left', maxWidth: '600px', margin: '0 auto'}}>
            <li>Tax deduction under Section 80G of Income Tax Act</li>
            <li>Contribute to meaningful social causes</li>
            <li>Support preservation of Vedic traditions</li>
            <li>Help provide education and care to underprivileged</li>
          </ul>
        </div>
        
        <div className="donation-info">
          <h3 style={{color: 'gold', marginBottom: '1rem'}}>Important Information</h3>
          <p>All donations are tax-deductible under Section 80G</p>
          <p>You will receive a receipt via email after your donation</p>
          <p>For donations above ₹2000, PAN number is mandatory</p>
          <p>For any queries, please contact: +91-9419362813</p>
        </div>

        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" style={{ width: '30px', height: '30px' }} />
          </a>
        </div>
      </div>

      {popup.show && (
        <Popup
          message={popup.message}
          type={popup.type}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default Donations; 