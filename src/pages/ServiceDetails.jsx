import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { serviceCategories, servicePrices } from '../data/services';
import Popup from '../components/Popup';
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    address: '',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: '', type: '' });

  console.log('🚀 ServiceDetails: Component loaded with serviceId:', serviceId);

  useEffect(() => {
    console.log('🔍 ServiceDetails: useEffect triggered with serviceId:', serviceId);
    
    // Safety check for serviceCategories
    if (!serviceCategories || !Array.isArray(serviceCategories)) {
      console.error('❌ ServiceDetails: serviceCategories is not available:', serviceCategories);
      return;
    }
    
    // Find the service based on the serviceId
    let foundService = null;
    let foundCategory = null;

    for (const category of serviceCategories) {
      if (!category || !category.services || !Array.isArray(category.services)) {
        console.warn('⚠️ ServiceDetails: Invalid category structure:', category);
        continue;
      }
      
      const serviceInCategory = category.services.find(s => 
        s && s.link === `/services/${serviceId}`
      );
      if (serviceInCategory) {
        foundService = serviceInCategory;
        foundCategory = category;
        console.log('✅ ServiceDetails: Found service:', foundService.title);
        break;
      }
    }

    if (foundService) {
      console.log('✅ ServiceDetails: Setting service with price:', servicePrices[foundService.title] || 1100);
      setService({
        ...foundService,
        category: foundCategory.title,
        price: servicePrices[foundService.title] || 1100
      });
    } else {
      console.log('❌ ServiceDetails: Service not found for ID:', serviceId);
      console.log('📋 ServiceDetails: Available services:');
      serviceCategories.forEach(cat => {
        if (cat && cat.services) {
          cat.services.forEach(s => {
            if (s) {
              console.log(`   - ${s.title}: ${s.link}`);
            }
          });
        }
      });
    }
  }, [serviceId]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getServiceDuration = (serviceTitle) => {
    const durations = {
      "Vivaha Sanskar": "4-5 hours",
      "Upanayana Sanskar": "3-4 hours",
      "Garbhadhana Sanskar": "1-2 hours",
      "Pumsavana Sanskar": "1-2 hours",
      "Simantonnayana Sanskar": "1-2 hours",
      "Jatakarma Sanskar": "1-2 hours",
      "Namakarana Sanskar": "1-2 hours",
      "Nishkramana Sanskar": "1-2 hours",
      "Annaprasana Sanskar": "1-2 hours",
      "Chudakarana Sanskar": "1-2 hours",
      "Karnavedha Sanskar": "1-2 hours",
      "Vidyarambha Sanskar": "1-2 hours",
      "Vedarambha Sanskar": "1-2 hours",
      "Keshanta Sanskar": "1-2 hours",
      "Samavartana Sanskar": "1-2 hours",
      "Antyeshti Sanskar": "2-3 hours",
      "Morning Abhishekam": "1 hour",
      "Nityarchana": "1 hour",
      "Evening Aarti": "45 mins",
      "Pushpanjali": "30 mins",
      "Sankalpam": "30 mins",
      "Morning Surya Namaskar": "1 hour",
      "Tulsi Puja": "30 mins",
      "Bhog Offering": "1 hour",
      "Ganapati Homam": "2-3 hours",
      "Navagraha Homam": "3-4 hours",
      "Rudra Homam": "3-4 hours",
      "Lakshmi Homam": "2-3 hours",
      "Ayush Homam": "2-3 hours",
      "Sudarshana Homam": "2-3 hours",
      "Diwali Celebrations": "3-4 hours",
      "Navaratri Festival": "5-6 hours",
      "Krishna Janmashtami": "2-3 hours",
      "Maha Shivaratri": "4-5 hours",
      "Ganesh Chaturthi": "3-4 hours",
      "Ketu Shanti Puja": "2-3 hours",
      "Rahu Shanti Puja": "2-3 hours",
      "Shani Shanti Puja": "2-3 hours",
      "Mangal Dosha Nivaran": "3-4 hours",
      "Budh Graha Shanti": "2-3 hours",
      "Mrityunjaya Homa": "3-4 hours",
      "Dhanvantari Puja": "2-3 hours",
      "Arogya Puja": "2-3 hours",
      "Sarpa Dosha Nivaran": "2-3 hours"
    };
    return durations[serviceTitle] || "1-2 hours";
  };

  const getPriestCount = (serviceTitle) => {
    const priestCounts = {
      "Vivaha Sanskar": "3-4 priests",
      "Upanayana Sanskar": "2-3 priests",
      "Garbhadhana Sanskar": "1-2 priests",
      "Pumsavana Sanskar": "1-2 priests",
      "Simantonnayana Sanskar": "1-2 priests",
      "Jatakarma Sanskar": "1-2 priests",
      "Namakarana Sanskar": "1-2 priests",
      "Nishkramana Sanskar": "1-2 priests",
      "Annaprasana Sanskar": "1-2 priests",
      "Chudakarana Sanskar": "1-2 priests",
      "Karnavedha Sanskar": "1-2 priests",
      "Vidyarambha Sanskar": "1-2 priests",
      "Vedarambha Sanskar": "1-2 priests",
      "Keshanta Sanskar": "1-2 priests",
      "Samavartana Sanskar": "1-2 priests",
      "Antyeshti Sanskar": "2 priests",
      "Morning Abhishekam": "1 priest",
      "Nityarchana": "1 priest",
      "Evening Aarti": "1 priest",
      "Pushpanjali": "1 priest",
      "Sankalpam": "1 priest",
      "Morning Surya Namaskar": "1 priest",
      "Tulsi Puja": "1 priest",
      "Bhog Offering": "1 priest",
      "Ganapati Homam": "2 priests",
      "Navagraha Homam": "3 priests",
      "Rudra Homam": "3 priests",
      "Lakshmi Homam": "2 priests",
      "Ayush Homam": "2 priests",
      "Sudarshana Homam": "2 priests",
      "Diwali Celebrations": "2-3 priests",
      "Navaratri Festival": "3-4 priests",
      "Krishna Janmashtami": "2 priests",
      "Maha Shivaratri": "3 priests",
      "Ganesh Chaturthi": "2-3 priests",
      "Ketu Shanti Puja": "2 priests",
      "Rahu Shanti Puja": "2 priests",
      "Shani Shanti Puja": "2 priests",
      "Mangal Dosha Nivaran": "2-3 priests",
      "Budh Graha Shanti": "2 priests",
      "Mrityunjaya Homa": "3 priests",
      "Dhanvantari Puja": "2 priests",
      "Arogya Puja": "2 priests",
      "Sarpa Dosha Nivaran": "2 priests"
    };
    return priestCounts[serviceTitle] || "1 priest";
  };

  const getTaxAmount = () => {
    if (!service) return 0;
    const totalBeforeTax = service.price + 500; // service price + registration fee
    return Math.round(totalBeforeTax * 0.02); // 2% tax
  };

  const getTotalAmount = () => {
    if (!service) return 0;
    const totalBeforeTax = service.price + 500; // service price + registration fee
    const taxAmount = Math.round(totalBeforeTax * 0.02); // 2% tax
    return totalBeforeTax + taxAmount;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      setPopup({
        show: true,
        message: `Payment successful! Your ${service.title} has been booked. You will receive a confirmation email shortly.`,
        type: 'success'
      });
    }, 2000);
  };

  const closePopup = () => {
    setPopup({ show: false, message: '', type: '' });
  };

  if (!service) {
    return (
      <div className="service-details-page">
        <div className="loading-container">
          <h2>Loading service details...</h2>
          <p>Looking for service ID: <strong>{serviceId}</strong></p>
          <p>Please check the browser console for debugging information.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="service-details-page">
      <Helmet>
        <title>{service.title} - Kailash Vidya Dham | Book Now</title>
        <meta name="description" content={`Book ${service.title} at Kailash Vidya Dham. ${service.description}`} />
        <meta name="keywords" content={`${service.title}, puja booking, temple services, ${service.category}`} />
        <link rel="canonical" href={`https://kailashvidyadham.com/services/${serviceId}`} />
      </Helmet>

      <div className="service-details-main">
        <div className="container">
          {/* Left Card - Service Information */}
          <div className="info-card">
            <div className="service-header">
              <h2>{service.title}</h2>
              <div className="service-category">{service.category}</div>
              <div className="service-price">₹{service.price.toLocaleString()}</div>
            </div>

            <div className="info-section">
              <h3>Service Description</h3>
              <p className="service-description">{service.description}</p>
            </div>

            <div className="info-section">
              <h3>Service Details</h3>
              <div className="service-details-grid">
                <div className="detail-item">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">{getServiceDuration(service.title)}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Priests Required:</span>
                  <span className="detail-value">{getPriestCount(service.title)}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Category:</span>
                  <span className="detail-value">{service.category}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Booking Required:</span>
                  <span className="detail-value">Yes</span>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>What's Included</h3>
              <div className="included-services">
                <div className="service-column">
                  <h4>✅ Included Services</h4>
                  <ul>
                    <li>Experienced Vedic priests (15+ years)</li>
                    <li>All puja materials and samagri</li>
                    <li>Traditional prasad and offerings</li>
                    <li>Sacred mantras and rituals</li>
                    <li>Certificate of completion</li>
                    <li>Photography and video recording</li>
                  </ul>
                </div>
                <div className="service-column">
                  <h4>🏛️ Facilities</h4>
                  <ul>
                    <li><strong>Main Hall:</strong> 2,500 sq ft (200+ capacity)</li>
                    <li><strong>Reception:</strong> 1,200 sq ft</li>
                    <li><strong>Guest Rooms:</strong> 6 rooms (1,500 sq ft)</li>
                    <li><strong>Parking:</strong> 3,000 sq ft (50+ vehicles)</li>
                    <li><strong>Outdoor Space:</strong> 5,000 sq ft</li>
                  </ul>
                </div>
                <div className="service-column">
                  <h4>🚗 Amenities</h4>
                  <ul>
                    <li>Free parking (50+ vehicles)</li>
                    <li>Traditional vegetarian meals</li>
                    <li>Clean guest rooms</li>
                    <li>Modern restrooms</li>
                    <li>Pure filtered water</li>
                    <li>Free Wi-Fi</li>
                    <li>24/7 power backup</li>
                    <li>Wheelchair accessible</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Registration Fee Structure</h3>
              <ul>
                <li><strong>Registration Fee:</strong> ₹500 (non-refundable)</li>
                <li><strong>Service Tax:</strong> 2% on total amount</li>
                <li><strong>Total Cost:</strong> Service price + ₹500 registration + 2% tax</li>
                <li><strong>Payment Methods:</strong> UPI, Card, Net Banking, Cash</li>
              </ul>
            </div>

            <div className="info-section">
              <h3>Next Steps After Booking</h3>
              <ol>
                <li><strong>Step 1:</strong> Complete booking form and pay total amount</li>
                <li><strong>Step 2:</strong> Receive confirmation email within 24 hours</li>
                <li><strong>Step 3:</strong> Schedule consultation call with priest</li>
                <li><strong>Step 4:</strong> Receive detailed ceremony schedule</li>
                <li><strong>Step 5:</strong> Attend ceremony on scheduled date</li>
                <li><strong>Step 6:</strong> Receive certificate and blessings</li>
              </ol>
            </div>

            <div className="info-section">
              <h3>Temple Location & Contact</h3>
              <div className="location-contact-grid">
                <div className="location-card">
                  <div className="map-placeholder">
                    <div className="map-icon">📍</div>
                    <p>Kailash Vidya Dham</p>
                    <p>Chinore, Jammu, J&K - 180013</p>
                    <a 
                      href="https://maps.google.com/?q=Chinore+Jammu+Jammu+and+Kashmir+180013" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="map-link"
                    >
                      📍 View on Google Maps
                    </a>
                  </div>
                </div>
                <div className="contact-info">
                  <h4>📞 Need Help?</h4>
                  <ul>
                    <li><strong>Phone:</strong> +91-9419362813</li>
                    <li><strong>WhatsApp:</strong> +91-9419362813</li>
                    <li><strong>Email:</strong> booking@kailashvidyadham.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Booking Form */}
          <div className="booking-card">
            <h2>Book {service.title}</h2>
            
            <form onSubmit={handleSubmit} className="booking-form">
              {/* Service Summary */}
              <div className="form-section">
                <h3>Service Summary</h3>
                <div className="selected-service">
                  <h4>{service.title}</h4>
                  <p className="service-price">₹{service.price.toLocaleString()}</p>
                  <p className="service-duration">
                    Duration: {getServiceDuration(service.title)}
                  </p>
                  <p className="service-priests">
                    Priests: {getPriestCount(service.title)}
                  </p>
                </div>
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
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
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
                      min={new Date().toISOString().split('T')[0]}
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
              <div className="payment-section">
                <h3>Payment Details</h3>
                <div className="payment-summary">
                  <div className="payment-row">
                    <span>Service Cost:</span>
                    <span>₹{service.price.toLocaleString()}</span>
                  </div>
                  <div className="payment-row">
                    <span>Registration Fee:</span>
                    <span>₹500</span>
                  </div>
                  <div className="payment-row">
                    <span>Service Tax (2%):</span>
                    <span>₹{getTaxAmount().toLocaleString()}</span>
                  </div>
                  <div className="payment-row total">
                    <span>Total Amount:</span>
                    <span>₹{getTotalAmount().toLocaleString()}</span>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="pay-now-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : `Pay Now - ₹${getTotalAmount().toLocaleString()}`}
                </button>
              </div>
            </form>
          </div>
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

export default ServiceDetails;
