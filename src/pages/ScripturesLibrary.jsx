import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ScripturesLibrary.css';
import vedasIcon from '../assets/images/vedic-icon.png';
import templeIcon from '../assets/images/templeimage.jpg';
import poojaIcon from '../assets/images/pooja-icon.png';

const ScripturesLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = [
    {
      title: "Vedas",
      description: "The oldest sacred texts of Hinduism - Rigveda, Yajurveda, Samaveda, Atharvaveda",
      icon: vedasIcon,
      path: "/vedas",
      color: "#8B0000",
      type: "vedic"
    },
    {
      title: "Upanishads",
      description: "Philosophical texts that form the basis of Vedanta",
      icon: poojaIcon,
      path: "/upanishads",
      color: "#B22222",
      type: "philosophical"
    },
    {
      title: "Puranas",
      description: "Ancient texts containing myths, legends, and religious teachings",
      icon: templeIcon,
      path: "/puranas",
      color: "#DC143C",
      type: "mythological"
    },
    {
      title: "Epics",
      description: "Ramayana and Mahabharata - The great Indian epics",
      icon: vedasIcon,
      path: "/epics",
      color: "#8B0000",
      type: "epic"
    },
    {
      title: "Bhagavad Gita",
      description: "The sacred song of Lord Krishna",
      icon: poojaIcon,
      path: "/bhagavad-gita",
      color: "#B22222",
      type: "philosophical"
    },
    {
      title: "Dharma Shastras",
      description: "Texts on religious law and duties",
      icon: templeIcon,
      path: "/dharma-shastras",
      color: "#DC143C",
      type: "legal"
    },
    {
      title: "Deities",
      description: "Hindu gods and goddesses with their stories",
      icon: vedasIcon,
      path: "/deities",
      color: "#8B0000",
      type: "mythological"
    },
    {
      title: "Temples",
      description: "Sacred temples and pilgrimage sites",
      icon: templeIcon,
      path: "/temples",
      color: "#B22222",
      type: "pilgrimage"
    },
    {
      title: "Festivals",
      description: "Hindu festivals and celebrations",
      icon: poojaIcon,
      path: "/festivals",
      color: "#DC143C",
      type: "cultural"
    },
    {
      title: "Rituals & Practices",
      description: "Sacred rituals, ceremonies, and spiritual practices",
      icon: vedasIcon,
      path: "/rituals",
      color: "#8B0000",
      type: "practical"
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Scriptures' },
    { value: 'vedic', label: 'Vedic Texts' },
    { value: 'philosophical', label: 'Philosophical' },
    { value: 'mythological', label: 'Mythological' },
    { value: 'epic', label: 'Epics' },
    { value: 'legal', label: 'Legal & Ethical' },
    { value: 'pilgrimage', label: 'Pilgrimage' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'practical', label: 'Rituals & Practices' }
  ];

  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || category.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="scriptures-library">
      <div className="library-header">
        <h1>Hindu Scriptures Library</h1>
        <p>Discover the vast ocean of knowledge from ancient Hindu texts and traditions</p>
        <div className="library-stats">
          <div className="stat">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Sacred Texts</span>
          </div>
          <div className="stat">
            <span className="stat-number">5000+</span>
            <span className="stat-label">Years of Wisdom</span>
          </div>
          <div className="stat">
            <span className="stat-number">18</span>
            <span className="stat-label">Major Puranas</span>
          </div>
        </div>
      </div>

      {/* Search and Filter Section - Moved to top */}
      <div className="search-filter-section">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search for specific texts, verses, or topics..."
            className="scripture-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">Search</button>
        </div>
        
        <div className="filter-container">
          <label htmlFor="filter-select" className="filter-label">Filter by Category:</label>
          <select 
            id="filter-select"
            className="filter-select"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            {filterOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="categories-grid">
        {filteredCategories.map((category, index) => (
          <Link to={category.path} key={index} className="category-card">
            <div className="category-icon">
              <img src={category.icon} alt={category.title} />
            </div>
            <div className="category-content">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
            <div className="category-overlay" style={{ backgroundColor: category.color }}></div>
          </Link>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="no-results">
          <h3>No scriptures found</h3>
          <p>Try adjusting your search terms or filter selection</p>
        </div>
      )}

      <div className="featured-section">
        <h2>Featured Scriptures</h2>
        <div className="featured-grid">
          <div className="featured-item">
            <h3>Bhagavad Gita</h3>
            <p>The divine song of Lord Krishna, containing 700 verses of spiritual wisdom</p>
            <Link to="/bhagavad-gita" className="featured-link">Read Now</Link>
          </div>
          <div className="featured-item">
            <h3>Rigveda</h3>
            <p>The oldest of the four Vedas, containing hymns and mantras</p>
            <Link to="/vedas/rigveda" className="featured-link">Read Now</Link>
          </div>
          <div className="featured-item">
            <h3>Ramayana</h3>
            <p>The epic story of Lord Rama and his divine journey</p>
            <Link to="/epics/ramayana" className="featured-link">Read Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScripturesLibrary;
