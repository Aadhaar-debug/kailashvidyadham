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
  const [selectedCategory, setSelectedCategory] = useState("");

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

  const handleSidebarCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedCategories([category]);
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
      "Ganapati Homam",
      "Navagraha Homam",
      "Rudra Homam",
      "Lakshmi Homam",
      "Diwali Celebrations",
      "Navaratri Festival",
      "Maha Shivaratri",
      "Ganesh Chaturthi",
      "Ketu Shanti Puja",
      "Rahu Shanti Puja",
      "Shani Shanti Puja",
      "Mrityunjaya Homa"
    ];
    return popularServices.includes(service.title);
  };

  // Function to get estimated duration for a service
  const getServiceDuration = (serviceTitle) => {
    const durations = {
      "Vivaha Sanskar": "4-5 hours",
      "Upanayana Sanskar": "3-4 hours",
      "Garbhadhana Sanskar": "1-2 hours",
      "Morning Abhishekam": "1 hour",
      "Evening Aarti": "45 mins",
      "Ganapati Homam": "2-3 hours",
      "Navagraha Homam": "3-4 hours",
      "Rudra Homam": "3-4 hours",
      "Lakshmi Homam": "2-3 hours",
      "Ayush Homam": "2-3 hours",
      "Sudarshana Homam": "2-3 hours",
      "Antyeshti Sanskar": "3-4 hours",
      "Nityarchana": "1 hour",
      "Pushpanjali": "30 mins",
      "Sankalpam": "15 mins",
      "Morning Surya Namaskar": "30 mins",
      "Tulsi Puja": "45 mins",
      "Bhog Offering": "1 hour",
      "Diwali Celebrations": "4-5 hours",
      "Navaratri Festival": "6-8 hours",
      "Krishna Janmashtami": "3-4 hours",
      "Maha Shivaratri": "6-8 hours",
      "Ganesh Chaturthi": "4-5 hours",
      "Ketu Shanti Puja": "2-3 hours",
      "Rahu Shanti Puja": "2-3 hours",
      "Shani Shanti Puja": "2-3 hours",
      "Mangal Dosha Nivaran": "3-4 hours",
      "Budh Graha Shanti": "2-3 hours",
      "Mrityunjaya Homa": "3-4 hours",
      "Dhanvantari Puja": "2-3 hours",
      "Arogya Puja": "2-3 hours",
      "Sarpa Dosha Nivaran": "3-4 hours"
    };
    return durations[serviceTitle] || "1-2 hours";
  };

  // Function to get priest count for a service
  const getPriestCount = (serviceTitle) => {
    const priestCounts = {
      "Vivaha Sanskar": "3-4 priests",
      "Upanayana Sanskar": "2-3 priests",
      "Antyeshti Sanskar": "2 priests",
      "Morning Abhishekam": "1 priest",
      "Ganapati Homam": "2 priests",
      "Navagraha Homam": "3 priests",
      "Rudra Homam": "3 priests",
      "Lakshmi Homam": "2 priests",
      "Ayush Homam": "2 priests",
      "Sudarshana Homam": "2 priests",
      "Nityarchana": "1 priest",
      "Evening Aarti": "1 priest",
      "Pushpanjali": "1 priest",
      "Sankalpam": "1 priest",
      "Morning Surya Namaskar": "1 priest",
      "Tulsi Puja": "1 priest",
      "Bhog Offering": "1 priest",
      "Diwali Celebrations": "3-4 priests",
      "Navaratri Festival": "4-5 priests",
      "Krishna Janmashtami": "2-3 priests",
      "Maha Shivaratri": "3-4 priests",
      "Ganesh Chaturthi": "2-3 priests",
      "Ketu Shanti Puja": "2 priests",
      "Rahu Shanti Puja": "2 priests",
      "Shani Shanti Puja": "2 priests",
      "Mangal Dosha Nivaran": "2-3 priests",
      "Budh Graha Shanti": "2 priests",
      "Mrityunjaya Homa": "3 priests",
      "Dhanvantari Puja": "2 priests",
      "Arogya Puja": "2 priests",
      "Sarpa Dosha Nivaran": "2-3 priests"
    };
    return priestCounts[serviceTitle] || "1 priest";
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
        {/* Left Sidebar - Categories */}
        <div className="services-sidebar">
          <div className="sidebar-header">
            <h3>Service Categories</h3>
          </div>
          <div className="category-list">
            {serviceCategories.map((category, index) => (
              <div 
                key={index}
                className={`category-item ${selectedCategory === category.title ? 'active' : ''}`}
                onClick={() => handleSidebarCategoryClick(category.title)}
              >
                <h4>{category.title}</h4>
                <p>{category.description}</p>
                <span className="service-count">({category.services.length} services)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Services Content */}
        <div className="services-main-content">
          {/* Search Bar */}
          <div className="search-section">
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

          {/* Filters Section */}
          <div className="filters-section">
            <div className="filters-header">
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
                      setSelectedCategory('');
                    }}
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Services Cards */}
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
                            <span>{getServiceDuration(service.title)}</span>
                          </div>
                          <div className="meta-item">
                            <span className="meta-icon">👥</span>
                            <span>{getPriestCount(service.title)}</span>
                          </div>
                          <div className="meta-item">
                            <span className="meta-icon">📅</span>
                            <span>Booking Required</span>
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
    </div>
  );
};

export default Services;
