import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Vedas.css';
import vedasIcon from '../assets/images/vedic-icon.png';

const Vedas = () => {
  const [selectedVeda, setSelectedVeda] = useState(null);

  const vedas = [
    {
      id: 'rigveda',
      name: 'Rigveda',
      sanskrit: 'ऋग्वेद',
      description: 'The oldest of the four Vedas, containing 1,028 hymns and 10,600 verses',
      chapters: 10,
      hymns: 1028,
      verses: 10600,
      deity: 'Agni, Indra, Varuna',
      content: 'Hymns and mantras for various deities, philosophical discussions, and cosmic principles',
      significance: 'Foundation of Hindu philosophy and the oldest religious text in the world',
      sections: [
        'Mandala 1-10: Hymns to various deities',
        'Sukta: Individual hymns',
        'Rik: Individual verses'
      ]
    },
    {
      id: 'yajurveda',
      name: 'Yajurveda',
      sanskrit: 'यजुर्वेद',
      description: 'The Veda of sacrificial formulas and rituals',
      chapters: 40,
      hymns: 1975,
      verses: 3988,
      deity: 'Yajna, Agni, Soma',
      content: 'Sacrificial formulas, ritual procedures, and ceremonial instructions',
      significance: 'Guide for performing Vedic rituals and ceremonies',
      sections: [
        'Krishna Yajurveda: Black Yajurveda',
        'Shukla Yajurveda: White Yajurveda',
        'Brahmanas: Ritual explanations'
      ]
    },
    {
      id: 'samaveda',
      name: 'Samaveda',
      sanskrit: 'सामवेद',
      description: 'The Veda of melodies and chants',
      chapters: 6,
      hymns: 1875,
      verses: 1875,
      deity: 'Soma, Indra, Agni',
      content: 'Musical notations and chants for rituals',
      significance: 'Foundation of Indian classical music and chanting traditions',
      sections: [
        'Purvarchika: First collection of chants',
        'Uttararchika: Later collection of chants',
        'Gana: Musical notations'
      ]
    },
    {
      id: 'atharvaveda',
      name: 'Atharvaveda',
      sanskrit: 'अथर्ववेद',
      description: 'The Veda of spells, charms, and practical knowledge',
      chapters: 20,
      hymns: 730,
      verses: 5987,
      deity: 'Various deities and spirits',
      content: 'Spells, charms, healing, medicine, and practical wisdom',
      significance: 'Contains practical knowledge, medicine, and folk traditions',
      sections: [
        'Kandas: Books of hymns',
        'Suktas: Individual hymns',
        'Charms and spells'
      ]
    }
  ];

  const upanishads = [
    'Brihadaranyaka Upanishad',
    'Chandogya Upanishad',
    'Taittiriya Upanishad',
    'Aitareya Upanishad',
    'Kaushitaki Upanishad',
    'Kena Upanishad',
    'Katha Upanishad',
    'Isha Upanishad',
    'Shvetashvatara Upanishad',
    'Mundaka Upanishad',
    'Prashna Upanishad',
    'Mandukya Upanishad'
  ];

  return (
    <div className="vedas-page">
      <div className="vedas-header">
        <h1>The Four Vedas</h1>
        <p>The oldest sacred texts of Hinduism, containing the eternal knowledge revealed to ancient sages</p>
        <div className="vedas-intro">
          <img src={vedasIcon} alt="Vedas" className="vedas-icon" />
          <div className="intro-text">
            <h3>What are the Vedas?</h3>
            <p>The Vedas are the oldest sacred texts of Hinduism, believed to be apauruṣeya (not of human origin). They are considered to be the eternal knowledge revealed to ancient sages (rishis) during deep meditation. The word "Veda" comes from the Sanskrit root "vid" meaning "to know" or "knowledge."</p>
          </div>
        </div>
      </div>

      <div className="vedas-grid">
        {vedas.map((veda) => (
          <div 
            key={veda.id} 
            className={`veda-card ${selectedVeda === veda.id ? 'expanded' : ''}`}
            onClick={() => setSelectedVeda(selectedVeda === veda.id ? null : veda.id)}
          >
            <div className="veda-header">
              <h2>{veda.name}</h2>
              <span className="sanskrit-name">{veda.sanskrit}</span>
            </div>
            <p className="veda-description">{veda.description}</p>
            
            <div className="veda-stats">
              <div className="stat">
                <span className="stat-number">{veda.chapters}</span>
                <span className="stat-label">Chapters</span>
              </div>
              <div className="stat">
                <span className="stat-number">{veda.hymns}</span>
                <span className="stat-label">Hymns</span>
              </div>
              <div className="stat">
                <span className="stat-number">{veda.verses}</span>
                <span className="stat-label">Verses</span>
              </div>
            </div>

            {selectedVeda === veda.id && (
              <div className="veda-details">
                <div className="detail-section">
                  <h4>Main Deities</h4>
                  <p>{veda.deity}</p>
                </div>
                <div className="detail-section">
                  <h4>Content</h4>
                  <p>{veda.content}</p>
                </div>
                <div className="detail-section">
                  <h4>Significance</h4>
                  <p>{veda.significance}</p>
                </div>
                <div className="detail-section">
                  <h4>Main Sections</h4>
                  <ul>
                    {veda.sections.map((section, index) => (
                      <li key={index}>{section}</li>
                    ))}
                  </ul>
                </div>
                <Link to={`/vedas/${veda.id}`} className="read-veda-btn">
                  Read Full Text
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="upanishads-section">
        <h2>Major Upanishads</h2>
        <p>The Upanishads are philosophical texts that form the basis of Vedanta philosophy</p>
        <div className="upanishads-grid">
          {upanishads.map((upanishad, index) => (
            <div key={index} className="upanishad-item">
              <h4>{upanishad}</h4>
              <Link to={`/upanishads/${upanishad.toLowerCase().replace(/\s+/g, '-')}`}>
                Read Text
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="vedic-knowledge">
        <h2>Vedic Knowledge System</h2>
        <div className="knowledge-grid">
          <div className="knowledge-item">
            <h3>Vedangas</h3>
            <p>The six auxiliary disciplines that help understand the Vedas</p>
            <ul>
              <li>Shiksha (Phonetics)</li>
              <li>Vyakarana (Grammar)</li>
              <li>Chandas (Meter)</li>
              <li>Nirukta (Etymology)</li>
              <li>Jyotisha (Astronomy)</li>
              <li>Kalpa (Ritual)</li>
            </ul>
          </div>
          <div className="knowledge-item">
            <h3>Vedanta</h3>
            <p>The philosophical conclusion of the Vedas</p>
            <ul>
              <li>Advaita Vedanta</li>
              <li>Dvaita Vedanta</li>
              <li>Vishishtadvaita</li>
              <li>Dvaitadvaita</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="navigation-links">
        <Link to="/scriptures-library" className="nav-link">← Back to Library</Link>
        <Link to="/upanishads" className="nav-link">Upanishads →</Link>
      </div>
    </div>
  );
};

export default Vedas;
