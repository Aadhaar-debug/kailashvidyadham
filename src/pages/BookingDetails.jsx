import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./BookingDetails.css";
import { processPayment, createPaymentOrder } from '../utils/razorpay';

const BookingDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
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
        { name: 'Durga Puja', price: '₹4,200', duration: '4-5 hours', description: 'Complete Durga puja with special rituals' },
        { name: 'Vishnu Puja', price: '₹3,200', duration: '3-4 hours', description: 'Vishnu puja for peace and harmony' },
        { name: 'Hanuman Puja', price: '₹2,500', duration: '2-3 hours', description: 'Hanuman puja for strength and protection' },
        { name: 'Saraswati Puja', price: '₹2,600', duration: '2-3 hours', description: 'Saraswati puja for knowledge and wisdom' },
        { name: 'Kali Puja', price: '₹4,500', duration: '4-5 hours', description: 'Kali puja for protection and power' },
        { name: 'Ram Puja', price: '₹3,000', duration: '3-4 hours', description: 'Ram puja for righteousness and dharma' },
        { name: 'Krishna Puja', price: '₹3,300', duration: '3-4 hours', description: 'Krishna puja for love and devotion' }
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
        { name: 'Bhagavad Gita Path', price: '₹3,200', duration: '2-3 hours', description: 'Complete Gita recitation' },
        { name: 'Ramayan Path', price: '₹5,500', duration: '4-5 hours', description: 'Complete Ramayan recitation' },
        { name: 'Mahabharat Path', price: '₹6,800', duration: '5-6 hours', description: 'Mahabharat recitation ceremony' },
        { name: 'Purana Path', price: '₹4,200', duration: '3-4 hours', description: 'Various Purana recitations' },
        { name: 'Ved Path', price: '₹8,500', duration: '6-8 hours', description: 'Vedic mantras recitation' },
        { name: 'Upanishad Path', price: '₹5,200', duration: '4-5 hours', description: 'Upanishad recitation' },
        { name: 'Stotra Path', price: '₹3,800', duration: '2-3 hours', description: 'Devotional hymn recitation' }
      ]
    },
    'festival-pujas': {
      name: 'Festival Pujas',
      events: [
        { name: 'Diwali Puja', price: '₹3,500', duration: '3-4 hours', description: 'Diwali Lakshmi puja and celebrations' },
        { name: 'Holi Puja', price: '₹2,800', duration: '2-3 hours', description: 'Holi festival puja and rituals' },
        { name: 'Raksha Bandhan', price: '₹2,200', duration: '2-3 hours', description: 'Rakhi tying ceremony' },
        { name: 'Janmashtami', price: '₹4,200', duration: '4-5 hours', description: 'Krishna birth celebration' },
        { name: 'Ram Navami', price: '₹3,800', duration: '3-4 hours', description: 'Ram birth celebration' },
        { name: 'Hanuman Jayanti', price: '₹3,200', duration: '3-4 hours', description: 'Hanuman birth celebration' },
        { name: 'Ganesh Chaturthi', price: '₹3,500', duration: '3-4 hours', description: 'Ganesh birth celebration' },
        { name: 'Navratri Puja', price: '₹5,500', duration: '5-6 hours', description: 'Nine nights Durga puja' },
        { name: 'Makar Sankranti', price: '₹2,500', duration: '2-3 hours', description: 'Sun transition celebration' },
        { name: 'Guru Purnima', price: '₹3,000', duration: '3-4 hours', description: 'Guru worship ceremony' }
      ]
    },
    'business-pujas': {
      name: 'Business & Success Pujas',
      events: [
        { name: 'Business Opening Puja', price: '₹4,500', duration: '3-4 hours', description: 'New business inauguration' },
        { name: 'Office Griha Pravesh', price: '₹3,800', duration: '3-4 hours', description: 'Office opening ceremony' },
        { name: 'Vehicle Puja', price: '₹2,200', duration: '1-2 hours', description: 'New vehicle blessing ceremony' },
        { name: 'Machine Puja', price: '₹2,500', duration: '2-3 hours', description: 'Industrial equipment blessing' },
        { name: 'Shop Opening Puja', price: '₹3,200', duration: '2-3 hours', description: 'Shop inauguration ceremony' },
        { name: 'Factory Puja', price: '₹5,500', duration: '4-5 hours', description: 'Factory opening ceremony' },
        { name: 'Success Puja', price: '₹3,500', duration: '3-4 hours', description: 'Career success puja' },
        { name: 'Wealth Puja', price: '₹4,200', duration: '3-4 hours', description: 'Wealth and prosperity puja' },
        { name: 'Job Puja', price: '₹2,800', duration: '2-3 hours', description: 'Job success puja' },
        { name: 'Exam Puja', price: '₹2,500', duration: '2-3 hours', description: 'Academic success puja' }
      ]
    },
    'health-pujas': {
      name: 'Health & Wellness Pujas',
      events: [
        { name: 'Health Puja', price: '₹3,200', duration: '2-3 hours', description: 'General health and wellness puja' },
        { name: 'Ayurveda Puja', price: '₹3,500', duration: '3-4 hours', description: 'Ayurvedic healing puja' },
        { name: 'Mental Health Puja', price: '₹2,800', duration: '2-3 hours', description: 'Mental peace and clarity puja' },
        { name: 'Recovery Puja', price: '₹3,000', duration: '2-3 hours', description: 'Illness recovery puja' },
        { name: 'Long Life Puja', price: '₹4,200', duration: '3-4 hours', description: 'Longevity and health puja' },
        { name: 'Child Health Puja', price: '₹2,500', duration: '2-3 hours', description: 'Children health puja' },
        { name: 'Elder Care Puja', price: '₹3,800', duration: '3-4 hours', description: 'Elderly health and care puja' },
        { name: 'Fertility Puja', price: '₹4,500', duration: '3-4 hours', description: 'Fertility and conception puja' },
        { name: 'Pregnancy Puja', price: '₹3,200', duration: '2-3 hours', description: 'Safe pregnancy puja' },
        { name: 'Postpartum Puja', price: '₹2,800', duration: '2-3 hours', description: 'Post-delivery wellness puja' }
      ]
    },
    'relationship-pujas': {
      name: 'Relationship & Harmony Pujas',
      events: [
        { name: 'Marriage Harmony Puja', price: '₹4,200', duration: '3-4 hours', description: 'Marital harmony puja' },
        { name: 'Family Peace Puja', price: '₹3,500', duration: '3-4 hours', description: 'Family unity and peace puja' },
        { name: 'Love Puja', price: '₹3,800', duration: '3-4 hours', description: 'Love and relationship puja' },
        { name: 'Reconciliation Puja', price: '₹4,500', duration: '3-4 hours', description: 'Relationship reconciliation puja' },
        { name: 'Friendship Puja', price: '₹2,500', duration: '2-3 hours', description: 'Friendship strengthening puja' },
        { name: 'Parent-Child Puja', price: '₹3,200', duration: '2-3 hours', description: 'Parent-child relationship puja' },
        { name: 'Sibling Harmony Puja', price: '₹2,800', duration: '2-3 hours', description: 'Sibling relationship puja' },
        { name: 'In-Law Harmony Puja', price: '₹3,500', duration: '3-4 hours', description: 'In-law relationship puja' },
        { name: 'Community Peace Puja', price: '₹5,500', duration: '4-5 hours', description: 'Community harmony puja' },
        { name: 'Workplace Harmony Puja', price: '₹3,800', duration: '3-4 hours', description: 'Workplace peace puja' }
      ]
    },
    'protection-pujas': {
      name: 'Protection & Security Pujas',
      events: [
        { name: 'Home Protection Puja', price: '₹3,500', duration: '3-4 hours', description: 'Home security and protection puja' },
        { name: 'Vehicle Protection Puja', price: '₹2,500', duration: '2-3 hours', description: 'Vehicle safety puja' },
        { name: 'Travel Safety Puja', price: '₹2,800', duration: '2-3 hours', description: 'Safe journey puja' },
        { name: 'Business Protection Puja', price: '₹4,200', duration: '3-4 hours', description: 'Business security puja' },
        { name: 'Child Protection Puja', price: '₹3,000', duration: '2-3 hours', description: 'Children safety puja' },
        { name: 'Elder Protection Puja', price: '₹3,200', duration: '2-3 hours', description: 'Elderly protection puja' },
        { name: 'Property Protection Puja', price: '₹3,800', duration: '3-4 hours', description: 'Property security puja' },
        { name: 'Legal Protection Puja', price: '₹4,500', duration: '3-4 hours', description: 'Legal case protection puja' },
        { name: 'Negative Energy Removal', price: '₹5,200', duration: '4-5 hours', description: 'Remove negative energies' },
        { name: 'Evil Eye Protection', price: '₹2,800', duration: '2-3 hours', description: 'Protection from evil eye' }
      ]
    }
  };

  // Search functionality
  const getAllEvents = () => {
    const allEvents = [];
    Object.keys(eventCategories).forEach(category => {
      eventCategories[category].events.forEach(event => {
        allEvents.push({
          ...event,
          category: eventCategories[category].name,
          categoryKey: category
        });
      });
    });
    return allEvents;
  };

  const filteredEvents = getAllEvents().filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchSelect = (event) => {
    setSelectedCategory(event.categoryKey);
    setSelectedEvent(event.name);
    setSearchTerm('');
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

  const handlePayNow = async (e) => {
    e.preventDefault();
    
    if (!selectedEvent) {
      alert('Please select an event first.');
      return;
    }

    try {
      // Extract price from the selected event (remove ₹ symbol and commas)
      const priceString = selectedEvent.price.replace('₹', '').replace(/,/g, '');
      const basePrice = parseInt(priceString);
      const registrationFee = 500;
      const taxAmount = Math.round((basePrice + registrationFee) * 0.02);
      const totalAmount = basePrice + registrationFee + taxAmount;

      // Create payment order
      const orderDetails = await createPaymentOrder(totalAmount);
      
      // Process payment
      processPayment(
        {
          ...orderDetails,
          description: `${selectedEvent.name} Booking`,
          serviceName: selectedEvent.name
        },
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address
        },
        (response) => {
          // Payment success
          console.log('Payment successful:', response);
          alert('Payment successful! Your booking has been confirmed.');
          
          // Reset form
          setSelectedEvent('');
          setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            address: '',
            specialRequests: ''
          });
        },
        (error) => {
          // Payment failed
          console.error('Payment failed:', error);
          alert('Payment failed. Please try again.');
        }
      );
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Error processing payment. Please try again.');
    }
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
              <h3>Services, Facilities & Amenities</h3>
              <div className="compact-grid">
                <div className="compact-column">
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
                <div className="compact-column">
                  <h4>🏛️ Facilities</h4>
                  <ul>
                    <li><strong>Main Hall:</strong> 2,500 sq ft (200+ capacity)</li>
                    <li><strong>Reception:</strong> 1,200 sq ft</li>
                    <li><strong>Guest Rooms:</strong> 6 rooms (1,500 sq ft)</li>
                    <li><strong>Parking:</strong> 3,000 sq ft (50+ vehicles)</li>
                    <li><strong>Outdoor Space:</strong> 5,000 sq ft</li>
                  </ul>
                </div>
                <div className="compact-column">
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
              <h3>Equipment & Business Services</h3>
              <div className="compact-grid">
                <div className="compact-column">
                  <h4>🎤 Equipment</h4>
                  <ul>
                    <li>Professional PA system</li>
                    <li>HD cameras and editing</li>
                    <li>Professional photo services</li>
                    <li>Decorative lighting</li>
                    <li>Chairs, tables, seating</li>
                    <li>Full kitchen facilities</li>
                  </ul>
                </div>
                <div className="compact-column">
                  <h4>📋 Business Services</h4>
                  <ul>
                    <li>Complete event planning</li>
                    <li>Traditional decorations</li>
                    <li>Experienced priests</li>
                    <li>Bhajans and mantras</li>
                    <li>Live streaming</li>
                    <li>Legal documentation</li>
                    <li>Transportation services</li>
                    <li>Catering services</li>
                  </ul>
                </div>
              </div>
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

          {/* Right Card - Registration Form */}
          <div className="registration-card">
            <h2>Register for Your Event</h2>
            
            <form onSubmit={handlePayNow} className="registration-form">
              {/* Ceremony Selection */}
              <div className="form-section">
                <h3>Select Your Ceremony</h3>
                
                {/* Search Functionality */}
                <div className="search-section">
                  <div className="form-group">
                    <label htmlFor="search">Search Ceremonies</label>
                    <input
                      type="text"
                      id="search"
                      placeholder="Search by ceremony name, description, or category..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  {searchTerm && filteredEvents.length > 0 && (
                    <div className="search-results">
                      {filteredEvents.slice(0, 8).map((event, index) => (
                        <div 
                          key={index} 
                          className="search-result-item"
                          onClick={() => handleSearchSelect(event)}
                        >
                          <div className="result-name">{event.name}</div>
                          <div className="result-category">{event.category}</div>
                          <div className="result-price">{event.price}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
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
