// in index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import mandir2 from "../assets/images/mandir2.jpg";
import photo19 from "../assets/images/photo (19).jpeg";
import photo5 from "../assets/images/photo (5).jpeg";
import photo16 from "../assets/images/photo (16).jpeg";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import { serviceCategories, servicePrices } from '../data/services';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("default");
  const [filteredServices, setFilteredServices] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 25000 });

  // Function to get all services from all categories
  const getAllServices = () => {
    return serviceCategories.flatMap(category =>
      category.services.map(service => ({
        ...service,
        category: category.title,
        price: servicePrices[service.title] || 1100 // Default price if not specified
      }))
    );
  };

  const uniqueCategories = [...new Set(serviceCategories.map(cat => cat.title))];

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handlePriceChange = (type, value) => {
    setPriceRange(prev => ({
      ...prev,
      [type]: parseInt(value) || 0
    }));
  };

  // Updated filter and search logic
  useEffect(() => {
    let filtered = getAllServices();

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filters
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(service => 
        selectedCategories.includes(service.category)
      );
    }

    // Apply price range filter
    filtered = filtered.filter(service => 
      service.price >= priceRange.min && service.price <= priceRange.max
    );

    // Apply sorting
    switch (filterOption) {
      case "nameAZ":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "nameZA":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "priceLowHigh":
        filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "priceHighLow":
        filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      default:
        break;
    }

    setFilteredServices(filtered);
  }, [searchTerm, filterOption, selectedCategories, priceRange]);

  // Group filtered services by category
  const groupedServices = () => {
    const grouped = {};
    filteredServices.forEach(service => {
      if (!grouped[service.category]) {
        grouped[service.category] = [];
      }
      grouped[service.category].push(service);
    });
    return grouped;
  };

  // Function to determine if a service is popular (example criteria)
  const isPopularService = (service) => {
    const popularServices = [
      "Vivaha Sanskar",
      "Upanayana Sanskar",
      "Antyeshti Sanskar",
      "Morning Abhishekam",
      "Ganapati Homam"
    ];
    return popularServices.includes(service.title);
  };

  // Function to get estimated duration for a service
  const getServiceDuration = (service) => {
    const durations = {
      "Vivaha Sanskar": "4-5 hours",
      "Upanayana Sanskar": "3-4 hours",
      "Garbhadhana Sanskar": "1-2 hours",
      "Morning Abhishekam": "1 hour",
      "Evening Aarti": "45 mins",
    };
    return durations[service.title] || "1-2 hours";
  };

  // Function to get priest count for a service
  const getPriestCount = (service) => {
    const priestCounts = {
      "Vivaha Sanskar": "3-4 priests",
      "Upanayana Sanskar": "2-3 priests",
      "Antyeshti Sanskar": "2 priests",
      "Morning Abhishekam": "1 priest",
    };
    return priestCounts[service.title] || "1 priest";
  };

  return (
    <div>
      <Helmet>
        <title>Temple Services & Rituals | Kailash Vidya Dham - Puja, Ceremonies & More</title>
        <meta name="description" content="Explore our comprehensive temple services including pujas, ceremonies, spiritual counseling, and Vedic education. Book traditional rituals performed by experienced priests." />
        <meta name="keywords" content="temple services, puja booking, Hindu ceremonies, Vedic rituals, spiritual counseling, temple events, religious ceremonies" />
        <link rel="canonical" href="https://kailashvidyadham.com/services" />
      </Helmet>

      <div className='servicescontainer'>
        <div className="services-header">
          <div className="search-filter-container">
            <div className="servicesearchbar">
              <div className="search-input-wrapper">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search Services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    className="clear-search"
                    onClick={() => setSearchTerm("")}
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            <button 
              className="filter-toggle-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              <span className="filter-icon">⚡</span>
              Filters
              <span className={`arrow-icon ${showFilters ? 'up' : 'down'}`}>
                ▼
              </span>
            </button>

            <select
              className="sort-select"
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value)}
            >
              <option value="default">Sort by...</option>
              <option value="nameAZ">Name (A-Z)</option>
              <option value="nameZA">Name (Z-A)</option>
              <option value="priceLowHigh">Price (Low-High)</option>
              <option value="priceHighLow">Price (High-Low)</option>
            </select>
          </div>

          {showFilters && (
            <div className="filters-panel">
              <div className="filter-section">
                <h3>Categories</h3>
                <div className="category-filters">
                  {uniqueCategories.map((category, index) => (
                    <label key={index} className="category-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                      />
                      <span className="checkbox-text">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3>Price Range</h3>
                <div className="price-range-inputs">
                  <div className="price-input-group">
                    <label>Min Price (₹)</label>
                    <input
                      type="number"
                      value={priceRange.min}
                      onChange={(e) => handlePriceChange('min', e.target.value)}
                      min="0"
                    />
                  </div>
                  <div className="price-input-group">
                    <label>Max Price (₹)</label>
                    <input
                      type="number"
                      value={priceRange.max}
                      onChange={(e) => handlePriceChange('max', e.target.value)}
                      min="0"
                    />
                  </div>
                </div>
              </div>

              <div className="filter-actions">
                <button
                  className="clear-filters"
                  onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange({ min: 0, max: 25000 });
                    setFilterOption('default');
                  }}
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>

        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ maxHeight: '60vh', overflow: 'hidden' }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={photo5}
                className="d-block w-100"
                alt="Daily Rituals"
                style={{ objectFit: 'cover', height: '40vh', borderRadius:'25px' }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Daily Rituals</h5>
                <p>Experience the divine through our traditional daily pujas and aartis.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src={photo19}
                className="d-block w-100"
                alt="Special Ceremonies"
                style={{ objectFit: 'cover', height: '40vh', borderRadius:'25px' }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Special Ceremonies</h5>
                <p>Sacred rituals for all important life events and festivals.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src={photo16}
                className="d-block w-100"
                alt="Vedic Education"
                style={{ objectFit: 'cover', height: '40vh', borderRadius:'25px' }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Vedic Education</h5>
                <p>Learn ancient wisdom through our educational programs.</p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="servicecards">
          {Object.entries(groupedServices()).map(([category, services], categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="service-category-title">
                {category}
                <span className="category-count">({services.length} services)</span>
              </h2>
              <p className="service-category-description">
                {serviceCategories.find(cat => cat.title === category)?.description}
              </p>
              <div className="servicecatalog">
                {services.map((service, serviceIndex) => (
                  <div className="card" key={serviceIndex}>
                    {isPopularService(service) && (
                      <div className="service-tag popular-tag">Popular</div>
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{service.title}</h5>
                      <div className="service-meta">
                        <div className="meta-item">
                          <span className="meta-icon">⏱️</span>
                          {getServiceDuration(service)}
                        </div>
                        <div className="meta-item">
                          <span className="meta-icon">👥</span>
                          {getPriestCount(service)}
                        </div>
                        <div className="meta-item">
                          <span className="meta-icon">📅</span>
                          Booking Required
                        </div>
                      </div>
                      <p className="card-text">{service.description}</p>
                      <div className="card-footer">
                        <div className="service-price">
                          <span className="price-label">Starting from</span>
                          <span className="service-price-amount">₹{service.price}</span>
                        </div>
                        <Link 
                          to={service.link} 
                          className="btn btn-primary"
                        >
                          <span>Learn More</span>
                          <span className="btn-icon">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
