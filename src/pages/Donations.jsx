import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Donations.css';

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
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would integrate with a payment gateway
    // For now, we'll just show a success message
    setShowSuccessPopup(true);
    setTimeout(() => {
      setShowSuccessPopup(false);
      // Reset form
      setSelectedCategory('');
      setAmount('');
      setName('');
      setEmail('');
      setPhone('');
      setPan('');
    }, 3000);
  };

  return (
    <div className="donations-container">
      <Helmet>
        <title>Donate to Kailash Vidya Dham | Support Our Temple & Community Services</title>
        <meta name="description" content="Make a donation to Kailash Vidya Dham temple's various charitable causes including Gurukul, Gaushala, orphan care, and more. Support our community services." />
        <meta name="keywords" content="temple donation, charitable giving, Gurukul donation, Gaushala donation, temple services, community support" />
        <link rel="canonical" href="https://kailashvidyadham.com/donations" />
      </Helmet>

      <div className="donations-header">
        <h1>Support Our Causes</h1>
        <p>Your contributions help us serve the community and maintain our sacred traditions</p>
      </div>

      <div className="donations-grid">
        {donationCategories.map((category) => (
          <div 
            key={category.id} 
            className={`donation-card ${selectedCategory === category.id ? 'selected' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <p className="min-amount">Min. Amount: ₹{category.minAmount}</p>
          </div>
        ))}
      </div>

      <div className="donation-form-container">
        <h2>Make a Donation</h2>
        <form onSubmit={handleSubmit} className="donation-form">
          <div className="form-group">
            <label>Select Category</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              required
            >
              <option value="">Choose a category</option>
              {donationCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Amount (₹)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min={selectedCategory ? donationCategories.find(c => c.id === selectedCategory)?.minAmount : 0}
              required
            />
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div className="form-group">
            <label>PAN Number (Optional)</label>
            <input
              type="text"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
              title="Enter valid PAN number"
            />
          </div>

          <button type="submit" className="donate-button">
            Proceed to Pay
          </button>
        </form>
      </div>

      {showSuccessPopup && (
        <div className="success-popup">
          <div className="popup-content">
            <h3>Thank You for Your Donation!</h3>
            <p>Your contribution will help make a difference.</p>
          </div>
        </div>
      )}

      <div className="donation-info">
        <h3>Important Information</h3>
        <ul>
          <li>All donations are tax-deductible under Section 80G</li>
          <li>You will receive a receipt via email after your donation</li>
          <li>For donations above ₹2000, PAN number is mandatory</li>
          <li>For any queries, please contact our office at +91-9419362813</li>
        </ul>
      </div>
    </div>
  );
};

export default Donations; 