import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BhagavadGitaDetail.css';
import { FaBookOpen, FaPlay, FaWrench, FaBars, FaSearch, FaFacebook, FaInstagram, FaYoutube, FaSpotify, FaTwitter, FaBook } from 'react-icons/fa';

const BhagavadGitaDetail = () => {
  const [activeTab, setActiveTab] = useState('explore');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    'Trending', 'Vaishnava', 'Shaiva', 'Shakta', 'Hindi', 'English', 
    'Gujarati', 'Marathi', 'Bengali', 'Telugu', 'Punjabi', 'Kannada', 
    'Odia', 'Ganapatya', 'Saura'
  ];

  const gitaEditions = [
    {
      title: 'भगवद्गीता • गीताप्रेस',
      details: 'Hindi • Sanskrit • Gita Press',
      hasBuy: true,
      hasRead: true
    },
    {
      title: 'Bhagavad-gītā • Gita Press',
      details: 'English • Gita Press',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'गीता पढ़ने के लाभ',
      details: 'Hindi • Gita Press',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'भगवद्गीता महात्म्य की कहानियाँ',
      details: 'Hindi • Gita Press',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'भगवद्गीता साधक संजीवनी',
      details: 'Hindi • Gita Press',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'Gītā Mādhurya',
      details: 'English • Gita Press • Swami Ramsukhdas',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'Madhva-bhāṣya-anuvāda',
      details: 'English • Shri Madhvacharya • ASB',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'Śaṅkara-bhāṣya',
      details: 'English • Adi Shankaracharya • BVB',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'Rāmānuja-bhāṣya • Govindacharya',
      details: 'English • Ramanujacharya • Vaijayanti Press',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'Rāmānuja-bhāṣya • Adidevananda',
      details: 'English • Ramanujacharya • Ramakrishna Matha',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'Translations by B.R. Shridhar Deva Gosvami',
      details: 'English • Gaudiya Matha',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'Short Notes By O. Rajagopalachari',
      details: 'English • Hindustan Times',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'Śrī Gītā Rasa Ratnākara',
      details: 'English • Swami Akhandanand Saraswati • PPT',
      hasBuy: true,
      hasRead: true
    },
    {
      title: 'गूदार्थ-दीपिका भाष्य',
      details: 'Hindi • Madhusudan Saraswati',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'गीता प्रबोधिनी',
      details: 'Hindi • Gita Press • Swami Ramsukhdas',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'सर्वतोभद्र भाष्य • राजानक रामकण्ठ',
      details: 'Sanskrit • University of Madras',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'Odia Bhagavad-gītā • ଓଡିଆ ଗୀତା',
      details: 'Odia • Gita Press • Tattva Vivechini',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'Translations by By Swami Shivananda',
      details: 'English • Divine Life Society',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'Commentary by Swami Ranganathananda',
      details: 'English • Advaita Ashram',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'Ramanuja on the Gita',
      details: 'English • S.S. Raghavachar • Advaita Ashram',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'Translations by Swami Paramananda',
      details: 'English • The Vedanta Centre',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'Essence of Bhagavad-gītā',
      details: 'English • Swami Yogananda •Swami Kriyananda',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'Gita in the Light of Modern Science',
      details: 'English • R.B. Lal • Somaiya Publications',
      hasBuy: false,
      hasRead: true
    },
    {
      title: 'The book of Life',
      details: '200 Questions and Answers Based on Bhagwad Gita',
      hasBuy: false,
      hasRead: true
    }
  ];

  return (
    <div className="scriptures-library">
      {/* Main Content Area */}
      <div className="main-content">
        {/* Content Header */}
        <div className="content-header">
          <div className="tab-navigation">
            <button 
              className={`tab ${activeTab === 'explore' ? 'active' : ''}`}
              onClick={() => setActiveTab('explore')}
            >
              Explore
            </button>
            <button 
              className={`tab ${activeTab === 'favourites' ? 'active' : ''}`}
              onClick={() => setActiveTab('favourites')}
            >
              Favourites
            </button>
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Q Find in veducation library"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Buttons */}
          <div className="filter-buttons">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`filter-btn ${selectedFilter === filter.toLowerCase() ? 'active' : ''}`}
                onClick={() => setSelectedFilter(filter.toLowerCase())}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Bhagavad Gita Detail Content */}
        <div className="gita-detail-section">
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <Link to="/scriptures-library">Sastra शास्त्र</Link>
            <span className="separator"> &gt; </span>
            <Link to="/scriptures/gita">Gita</Link>
            <span className="separator"> &gt; </span>
            <span className="current">Bhagavad Gita</span>
          </div>

          {/* Main Title */}
          <h1 className="gita-title">Bhagavad-gītā</h1>

          {/* Content Layout - Two Columns */}
          <div className="gita-content-layout">
            {/* Left Column - Cover Image */}
            <div className="cover-image-container">
              <div className="cover-image">
                <div className="image-overlay">
                  <h2 className="image-title">BHAGAVAD GITA</h2>
                  <p className="image-subtitle">भगवद्गीता</p>
                </div>
              </div>
            </div>

            {/* Right Column - Description and Editions */}
            <div className="content-details">
              {/* Description */}
              <div className="gita-description">
                <p>
                  The Bhagavad-gītā is a dialogue between Śrī Kṛṣṇa and Arjuna at Kurukṣetra, 
                  summarizing the essence of Vedic wisdom in 700 verses. It offers timeless 
                  teachings on dharma, devotion, and self-realization.
                </p>
              </div>

              {/* Read Now Button */}
              <button className="read-now-btn">Read Now</button>

              {/* Editions List */}
              <div className="editions-list">
                {gitaEditions.map((edition, index) => (
                  <div key={index} className="edition-item">
                    <div className="edition-icon">
                      <FaBook />
                    </div>
                    <div className="edition-content">
                      <h3 className="edition-title">{edition.title}</h3>
                      <p className="edition-details">{edition.details}</p>
                    </div>
                    <div className="edition-actions">
                      {edition.hasBuy && (
                        <button className="buy-btn">Buy</button>
                      )}
                      <button className="read-btn">Read</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BhagavadGitaDetail;
