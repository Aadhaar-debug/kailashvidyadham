import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./BookingDetails.css";

const BookingDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    address: '',
    specialRequests: ''
  });

  const eventCategories = {
    'spiritual-ceremonies': {
      name: 'Spiritual Ceremonies',
      events: [
        { name: 'Ganesh Puja', price: '₹2,100', duration: '2-3 hours', description: 'Complete Ganesh puja with prasad and blessings' },
        { name: 'Shiv Puja', price: '₹3,500', duration: '3-4 hours', description: 'Traditional Shiv puja with rudrabhishek' },
        { name: 'Lakshmi Puja', price: '₹2,800', duration: '2-3 hours', description: 'Lakshmi puja for prosperity and wealth' },
        { name: 'Durga Puja', price: '₹4,200', duration: '4-5 hours', description: 'Complete Durga puja with special rituals' }
      ]
    },
    'life-cycle-events': {
      name: 'Life Cycle Events',
      events: [
        { name: 'Namkaran Ceremony', price: '₹1,800', duration: '1-2 hours', description: 'Baby naming ceremony with traditional rituals' },
        { name: 'Upanayan Ceremony', price: '₹5,500', duration: '6-8 hours', description: 'Sacred thread ceremony for boys' },
        { name: 'Vivah Ceremony', price: '₹8,500', duration: 'Full day', description: 'Complete wedding ceremony with all rituals' },
        { name: 'Griha Pravesh', price: '₹3,200', duration: '2-3 hours', description: 'House warming ceremony' }
      ]
    },
    'remedial-pujas': {
      name: 'Remedial Pujas',
      events: [
        { name: 'Mangal Dosha Puja', price: '₹4,500', duration: '3-4 hours', description: 'Remedial puja for Mangal dosha' },
        { name: 'Kalsarpa Dosha Puja', price: '₹6,200', duration: '4-5 hours', description: 'Special puja for Kalsarpa dosha' },
        { name: 'Pitru Dosha Puja', price: '₹3,800', duration: '2-3 hours', description: 'Puja for ancestral peace' },
        { name: 'Graha Shanti Puja', price: '₹5,500', duration: '3-4 hours', description: 'Planetary peace puja' }
      ]
    },
    'special-events': {
      name: 'Special Events',
      events: [
        { name: 'Satyanarayan Puja', price: '₹2,500', duration: '2-3 hours', description: 'Traditional Satyanarayan katha and puja' },
        { name: 'Rudrabhishek', price: '₹7,500', duration: '5-6 hours', description: 'Complete Rudrabhishek ceremony' },
        { name: 'Vishnu Sahasranama', price: '₹4,800', duration: '3-4 hours', description: 'Recitation of 1000 names of Vishnu' },
        { name: 'Bhagavad Gita Path', price: '₹3,200', duration: '2-3 hours', description: 'Complete Gita recitation' }
      ]
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getSelectedEventPrice = () => {
    if (selectedCategory && selectedEvent) {
      const event = eventCategories[selectedCategory].events.find(e => e.name === selectedEvent);
      return event ? event.price : '';
    }
    return '';
  };

  const getCeremonyPriceNumeric = () => {
    if (selectedCategory && selectedEvent) {
      const event = eventCategories[selectedCategory].events.find(e => e.name === selectedEvent);
      if (event) {
        return parseInt(event.price.replace(/[₹,]/g, ''));
      }
    }
    return 0;
  };

  const getTaxAmount = () => {
    const ceremonyPrice = getCeremonyPriceNumeric();
    const registrationFee = 500;
    const totalBeforeTax = ceremonyPrice + registrationFee;
    const taxAmount = Math.round(totalBeforeTax * 0.02); // 2% tax
    return `₹${taxAmount.toLocaleString()}`;
  };

  const getTotalAmount = () => {
    if (selectedCategory && selectedEvent) {
      const event = eventCategories[selectedCategory].events.find(e => e.name === selectedEvent);
      if (event) {
        // Extract numeric value from price (remove ₹ and commas)
        const ceremonyPrice = parseInt(event.price.replace(/[₹,]/g, ''));
        const registrationFee = 500;
        const totalBeforeTax = ceremonyPrice + registrationFee;
        const taxAmount = Math.round(totalBeforeTax * 0.02); // 2% tax
        const totalAmount = totalBeforeTax + taxAmount;
        return `₹${totalAmount.toLocaleString()}`;
      }
    }
    return '';
  };

  const handlePayNow = (e) => {
    e.preventDefault();
    // Handle payment logic here
    console.log('Payment initiated for:', formData);
    alert('Payment gateway will open here. This is a demo.');
  };

  return (
    <div className="booking-page">
      <div className="booking-main">
        <div className="container">
          {/* Left Card - Information & Details */}
          <div className="info-card">
            <h2>Registration & Process Details</h2>
            
            <div className="info-section">
              <h3>Registration Fee Structure</h3>
              <ul>
                <li><strong>Registration Fee:</strong> ₹500 (non-refundable)</li>
                <li><strong>Service Tax:</strong> 2% on total amount</li>
                <li><strong>Total Cost:</strong> Ceremony price + ₹500 registration + 2% tax</li>
                <li><strong>Payment Methods:</strong> UPI, Card, Net Banking, Cash</li>
              </ul>
            </div>

            <div className="info-section">
              <h3>What's Included in Your Registration</h3>
              <ul>
                <li>✅ Experienced Vedic priests (15+ years)</li>
                <li>✅ All puja materials and samagri</li>
                <li>✅ Traditional prasad and offerings</li>
                <li>✅ Sacred mantras and rituals</li>
                <li>✅ Certificate of completion</li>
                <li>✅ Photography and video recording</li>
                <li>✅ Clean and sacred environment</li>
                <li>✅ Post-ceremony guidance</li>
              </ul>
            </div>

            <div className="info-section">
              <h3>Next Steps After Registration</h3>
              <ol>
                <li><strong>Step 1:</strong> Complete registration form and pay total amount</li>
                <li><strong>Step 2:</strong> Receive confirmation email within 24 hours</li>
                <li><strong>Step 3:</strong> Schedule consultation call with priest</li>
                <li><strong>Step 4:</strong> Receive detailed ceremony schedule</li>
                <li><strong>Step 5:</strong> Attend ceremony on scheduled date</li>
                <li><strong>Step 6:</strong> Receive certificate and blessings</li>
              </ol>
            </div>

            <div className="info-section">
              <h3>Need Help?</h3>
              <ul>
                <li><strong>Phone:</strong> +91-9419362813</li>
                <li><strong>WhatsApp:</strong> +91-9419362813</li>
                <li><strong>Email:</strong> booking@kailashvidyadham.com</li>
                <li><strong>Address:</strong> Chinore, Jammu, J&K - 180013</li>
              </ul>
            </div>
          </div>

          {/* Right Card - Registration Form */}
          <div className="registration-card">
            <h2>Register for Your Event</h2>
            
            <form onSubmit={handlePayNow} className="registration-form">
              {/* Ceremony Selection */}
              <div className="form-section">
                <h3>Select Your Ceremony</h3>
                
                <div className="form-group">
                  <label htmlFor="category">Ceremony Category *</label>
                  <select 
                    id="category" 
                    value={selectedCategory} 
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setSelectedEvent('');
                    }}
                    required
                  >
                    <option value="">Select Category</option>
                    {Object.keys(eventCategories).map(category => (
                      <option key={category} value={category}>
                        {eventCategories[category].name}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedCategory && (
                  <div className="form-group">
                    <label htmlFor="event">Specific Ceremony *</label>
                    <select 
                      id="event" 
                      value={selectedEvent} 
                      onChange={(e) => setSelectedEvent(e.target.value)}
                      required
                    >
                      <option value="">Select Ceremony</option>
                      {eventCategories[selectedCategory].events.map((event, index) => (
                        <option key={index} value={event.name}>
                          {event.name} - {event.price} ({event.duration})
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {selectedEvent && (
                  <div className="selected-event">
                    <h4>Selected: {selectedEvent}</h4>
                    <p className="event-price">Price: {getSelectedEventPrice()}</p>
                    <p className="event-duration">
                      Duration: {eventCategories[selectedCategory].events.find(e => e.name === selectedEvent).duration}
                    </p>
                  </div>
                )}
              </div>

              {/* Personal Information */}
              <div className="form-section">
                <h3>Personal Information</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="time">Preferred Time *</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Time</option>
                      <option value="06:00">6:00 AM</option>
                      <option value="07:00">7:00 AM</option>
                      <option value="08:00">8:00 AM</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address *</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="specialRequests">Special Requests (Optional)</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Any special requirements or requests..."
                  />
                </div>
              </div>

              {/* Payment Section */}
              {selectedEvent && (
                <div className="payment-section">
                  <h3>Payment Details</h3>
                  <div className="payment-summary">
                    <div className="payment-row">
                      <span>Ceremony Cost:</span>
                      <span>{getSelectedEventPrice()}</span>
                    </div>
                    <div className="payment-row">
                      <span>Registration Fee:</span>
                      <span>₹500</span>
                    </div>
                    <div className="payment-row">
                      <span>Service Tax (2%):</span>
                      <span>{getTaxAmount()}</span>
                    </div>
                    <div className="payment-row total">
                      <span>Total Amount:</span>
                      <span>{getTotalAmount()}</span>
                    </div>
                  </div>
                  
                  <button type="submit" className="pay-now-btn">
                    Pay Now - {getTotalAmount()}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
