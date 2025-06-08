import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({ serviceCategories }) => {
  const { serviceId } = useParams();

  // Find the service from all categories
  const findService = () => {
    for (const category of serviceCategories) {
      const service = category.services.find(s => s.link === `/services/${serviceId}`);
      if (service) {
        return { ...service, category: category.title };
      }
    }
    return null;
  };

  const service = findService();

  if (!service) {
    return (
      <div className="service-details-wrapper">
        <div className="service-not-found">
          <h2>Service Not Found</h2>
          <p>The requested service could not be found.</p>
          <a href="/services" className="btn btn-primary">Back to Services</a>
        </div>
      </div>
    );
  }

  // Get additional service details
  const getServiceDuration = () => {
    const durations = {
      "Vivaha Sanskar": "4-5 hours",
      "Upanayana Sanskar": "3-4 hours",
      "Garbhadhana Sanskar": "1-2 hours",
      "Morning Abhishekam": "1 hour",
      "Evening Aarti": "45 mins",
    };
    return durations[service.title] || "1-2 hours";
  };

  const getPriestCount = () => {
    const priestCounts = {
      "Vivaha Sanskar": "3-4 priests",
      "Upanayana Sanskar": "2-3 priests",
      "Antyeshti Sanskar": "2 priests",
      "Morning Abhishekam": "1 priest",
    };
    return priestCounts[service.title] || "1 priest";
  };

  const getServicePrice = () => {
    const prices = {
      "Garbhadhana Sanskar": 5100,
      "Pumsavana Sanskar": 3100,
      "Simantonnayana Sanskar": 4100,
      "Jatakarma Sanskar": 5100,
      "Namakarana Sanskar": 3100,
      "Nishkramana Sanskar": 2100,
      "Annaprasana Sanskar": 3100,
      "Chudakarana Sanskar": 4100,
      "Karnavedha Sanskar": 2100,
      "Vidyarambha Sanskar": 3100,
      "Upanayana Sanskar": 7100,
      "Vedarambha Sanskar": 5100,
      "Keshanta Sanskar": 3100,
      "Samavartana Sanskar": 5100,
      "Vivaha Sanskar": 21100,
      "Antyeshti Sanskar": 11100,
    };
    return prices[service.title] || 1100;
  };

  const getServiceRequirements = () => {
    const requirements = {
      "Vivaha Sanskar": [
        "Birth certificates of bride and groom",
        "Horoscopes",
        "Government ID proofs",
        "Marriage registration documents",
        "Traditional wedding attire",
        "Puja items as specified"
      ],
      "Upanayana Sanskar": [
        "Birth certificate",
        "Horoscope",
        "Traditional attire",
        "Sacred thread",
        "Puja items as specified"
      ],
      // Add more requirements for other services
    };
    return requirements[service.title] || [
      "Government ID proof",
      "Puja items as specified",
      "Traditional attire recommended"
    ];
  };

  const getServiceBenefits = () => {
    const benefits = {
      "Vivaha Sanskar": [
        "Blessed union in accordance with Vedic traditions",
        "Divine blessings for a harmonious married life",
        "Proper performance of all essential marriage rituals",
        "Cultural preservation and traditional values",
        "Complete documentation and certification"
      ],
      "Upanayana Sanskar": [
        "Initiation into Vedic learning",
        "Spiritual awakening and guidance",
        "Traditional knowledge transfer",
        "Character building and discipline",
        "Cultural identity strengthening"
      ],
      // Add more benefits for other services
    };
    return benefits[service.title] || [
      "Divine blessings and spiritual merit",
      "Traditional ritual performance",
      "Expert guidance from experienced priests",
      "Peace of mind and positive energy",
      "Cultural connection and preservation"
    ];
  };

  return (
    <div className="service-details-wrapper">
      <div className="service-details-container">
        <div className="service-details-header">
          <div className="service-category-badge">{service.category}</div>
          <h1>{service.title}</h1>
          <p className="service-description">{service.description}</p>
        </div>

        <div className="service-details-grid">
          <div className="service-info-card">
            <h3>Service Information</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-icon">⏱️</span>
                <div>
                  <h4>Duration</h4>
                  <p>{getServiceDuration()}</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">👥</span>
                <div>
                  <h4>Priests</h4>
                  <p>{getPriestCount()}</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">💰</span>
                <div>
                  <h4>Starting Price</h4>
                  <p>₹{getServicePrice()}</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📅</span>
                <div>
                  <h4>Booking</h4>
                  <p>Advanced booking required</p>
                </div>
              </div>
            </div>
          </div>

          <div className="service-requirements-card">
            <h3>Requirements</h3>
            <ul className="requirements-list">
              {getServiceRequirements().map((req, index) => (
                <li key={index}>
                  <span className="requirement-icon">✓</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div className="service-benefits-card">
            <h3>Benefits</h3>
            <ul className="benefits-list">
              {getServiceBenefits().map((benefit, index) => (
                <li key={index}>
                  <span className="benefit-icon">✨</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="booking-section">
          <div className="booking-content">
            <h2>Book This Service</h2>
            <p>For booking and inquiries, please contact us or fill out the booking form below.</p>
            <div className="booking-buttons">
              <a href="/contact" className="btn btn-primary">
                Contact Us
                <span className="btn-icon">→</span>
              </a>
              <button className="btn btn-secondary">
                Book Now
                <span className="btn-icon">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails; 