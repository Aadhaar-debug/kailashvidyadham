import React from 'react';
import { Link } from 'react-router-dom';
import './Puranas.css';
import templeIcon from '../assets/images/templeimage.jpg';

const Puranas = () => {
  const majorPuranas = [
    'Vishnu Purana',
    'Bhagavata Purana',
    'Shiva Purana',
    'Brahma Purana',
    'Padma Purana',
    'Varaha Purana',
    'Narasimha Purana',
    'Kurma Purana',
    'Matsya Purana',
    'Garuda Purana',
    'Brahmanda Purana',
    'Brahmavaivarta Purana',
    'Markandeya Purana',
    'Bhavishya Purana',
    'Vamana Purana',
    'Agni Purana',
    'Skanda Purana'
  ];

  return (
    <div className="puranas-page">
      <div className="puranas-header">
        <h1>The Eighteen Puranas</h1>
        <p>Ancient texts containing myths, legends, and religious teachings of Hinduism</p>
        <div className="puranas-intro">
          <img src={templeIcon} alt="Puranas" className="puranas-icon" />
          <div className="intro-text">
            <h3>What are the Puranas?</h3>
            <p>The Puranas are ancient Hindu texts that contain a vast collection of myths, legends, and religious teachings. They are considered to be the fifth Veda and are essential for understanding Hindu mythology, cosmology, and religious practices.</p>
          </div>
        </div>
      </div>

      <div className="puranas-stats">
        <div className="stat">
          <span className="stat-number">18</span>
          <span className="stat-label">Major Puranas</span>
        </div>
        <div className="stat">
          <span className="stat-number">400,000+</span>
          <span className="stat-label">Total Verses</span>
        </div>
        <div className="stat">
          <span className="stat-number">3</span>
          <span className="stat-label">Categories</span>
        </div>
      </div>

      <div className="puranas-grid">
        <h2>All Eighteen Puranas</h2>
        <div className="puranas-list">
          {majorPuranas.map((purana, index) => (
            <div key={index} className="purana-card">
              <div className="purana-header">
                <h3>{purana}</h3>
              </div>
              <p className="purana-description">Ancient text containing myths, legends, and religious teachings</p>
              <Link to={`/puranas/${purana.toLowerCase().replace(/\s+/g, '-')}`} className="read-purana-btn">
                Read Text
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="navigation-links">
        <Link to="/scriptures-library" className="nav-link">← Back to Library</Link>
        <Link to="/vedas" className="nav-link">Vedas →</Link>
      </div>
    </div>
  );
};

export default Puranas;
