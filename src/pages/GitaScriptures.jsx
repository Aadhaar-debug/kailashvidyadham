import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GitaScriptures.css';
import { FaBookOpen, FaPlay, FaWrench, FaBars, FaSearch, FaChevronDown, FaChevronRight, FaFacebook, FaInstagram, FaYoutube, FaSpotify, FaTwitter } from 'react-icons/fa';

const GitaScriptures = () => {
  const [activeTab, setActiveTab] = useState('explore');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [expandedSections, setExpandedSections] = useState({
    gita: true
  });

  const filters = [
    'Trending', 'Vaishnava', 'Shaiva', 'Shakta', 'Hindi', 'English', 
    'Gujarati', 'Marathi', 'Bengali', 'Telugu', 'Punjabi', 'Kannada', 
    'Odia', 'Ganapatya', 'Saura'
  ];

  const gitaCategories = [
    {
      name: 'Bhagavad-gītā',
      description: 'The Bhagavad-gītā is a dialogue between Śrī Kṛṣṇa and Arjuna at Kurukṣetra, summarizing the essence of Vedic wisdom in 700 verses. It offers timeless teachings on dharma, devotion, and self-realization.',
      count: 24,
      path: '/scriptures/gita/bhagavad-gita'
    },
    {
      name: 'Aṣṭāvakra Gītā',
      description: 'The Aṣṭāvakra Gītā is a dialogue between Sage Aṣṭāvakra and King Janaka, presenting the essence of Advaita Vedānta. It emphasizes self-realization through detachment, wisdom, and the recognition of the ātman.',
      count: 2,
      path: '/bhagavad-gita/astavakra'
    },
    {
      name: 'Īśvara Gītā',
      description: 'The Īśvara Gītā is a discourse by Lord Śiva to sages, found in the Kurma Purāṇa. It elucidates the nature of Īśvara, devotion, meditation, and liberation, emphasizing Śiva as the supreme reality and source of creation.',
      count: 1,
      path: '/bhagavad-gita/ishvara'
    },
    {
      name: 'Ājagara Gītā',
      description: 'Ājagara Gītā is a description of instructions given by renounced ascetic to Śrī Prahlāda Mahārāja.',
      count: 1,
      path: '/bhagavad-gita/ajagara'
    },
    {
      name: 'Avadhūta Gītā',
      description: 'Dattatreya to Yadu Muni. scripture found in the Dattatreya Upanishad, It expounds on the nature of reality, the self, and the path to liberation.',
      count: 3,
      path: '/bhagavad-gita/avadhuta'
    },
    {
      name: 'Bhikṣu Gītā',
      description: 'Bhikṣu Gītā is contained in the Chapter five of Seventh Canto of Śrīmad-bhāgavatam.',
      count: 1,
      path: '/bhagavad-gita/bhikshu'
    },
    {
      name: 'Brāhmaṇa Gītā',
      description: 'Brahma to Narad Muni with many other Rishis. Known as the second Gita of Krishna',
      count: 1,
      path: '/bhagavad-gita/brahmana'
    },
    {
      name: 'Dhīṣa Gītā',
      description: '...',
      count: 1,
      path: '/bhagavad-gita/dhisha'
    },
    {
      name: 'Gaṇeśa Gītā',
      description: 'Sut Goswami to Maharshi Vedavyas where they discuss about Sri Ganesha and Glorify him.',
      count: 3,
      path: '/bhagavad-gita/ganesha'
    },
    {
      name: 'Gita Saar Ki Talwar',
      description: 'Written by Dr. Keshavananda, the member of the International Society for Krishna Consciousness (ISKCON), in the Glorifications of Lord Krishna.',
      count: 1,
      path: '/bhagavad-gita/gita-saar'
    },
    {
      name: 'Gītā Saṅgraha',
      description: 'Collection of 25 different Gitas by Gita Press',
      count: 1,
      path: '/bhagavad-gita/gita-sangraha'
    },
    {
      name: 'Gīta Govinda',
      description: 'The Gita Govinda is a work composed by the 12th-century Hindu poet, Jayadeva. It describes the relationship between Krishna, Radha and gopis of Vrindavan. The Gita Govinda is organized into twelve chapters. Each chapter is further sub-divided into one or more divisions called prabandhas, totalling twenty-four in all',
      count: 1,
      path: '/bhagavad-gita/gita-govinda'
    },
    {
      name: 'Gopī Gītā',
      description: 'Gopī-gīta is one of Śrīmad-bhāgavatam\'s five most important chapters (rāsa-pañcādhyāyi).',
      count: 1,
      path: '/bhagavad-gita/gopi'
    },
    {
      name: 'Guru Gītā',
      description: 'Guru Gita: Shiva teaches Parvati the importance of a spiritual teacher.',
      count: 1,
      path: '/bhagavad-gita/guru'
    },
    {
      name: 'Haṁsa Gītā',
      description: 'Hamsa Gita is contained in the fourth chapter of the sixth canto of Śrīmad-bhāgavatam.',
      count: 1,
      path: '/bhagavad-gita/hamsa'
    },
    {
      name: 'Jīvana-mukta-gītā',
      description: 'Teaches the art of liberation.',
      count: 1,
      path: '/bhagavad-gita/jivana-mukta'
    },
    {
      name: 'Kāma Gītā',
      description: 'Discussion between Sri Krishna & Dharma-raaj Yudhishthir. This Gita is from the Ashvamedha Parva of Mahabharata and this is based on the controlled senses and Lust.',
      count: 1,
      path: '/bhagavad-gita/kama'
    },
    {
      name: 'Kapila Gītā',
      description: 'Instructions & Teachings of Kapila Muni.',
      count: 1,
      path: '/bhagavad-gita/kapila'
    },
    {
      name: 'Pañca Gītā',
      description: 'Pañca-gītā is from the Ramcharitmanas. This teaches about the Duty & Devotion.',
      count: 1,
      path: '/bhagavad-gita/panca'
    },
    {
      name: 'Nārada Gītā',
      description: 'Narad Gita comes within the Shantiparva of Mahabharata.',
      count: 1,
      path: '/bhagavad-gita/narada'
    },
    {
      name: 'Pañcadaśī Gītā',
      description: 'Panchadasi, a seminal work by Vidyaranya Swami in Advaita Vedanta, delves into the essence of Brahman, Atman, Maya, and self-realization through fifteen profound chapters, offering spiritual insights and wisdom.',
      count: 1,
      path: '/bhagavad-gita/pancadasi'
    },
    {
      name: 'Pāṇḍava Gītā',
      description: 'Yudhishthira to mother Kunti, In the Bhishma Parva of the Mahabharata. It imparts philosophical wisdom on duty, righteousness, and the transient nature of life.',
      count: 1,
      path: '/bhagavad-gita/pandava'
    },
    {
      name: 'Paramahaṁsa Gītā',
      description: 'Brahman Bharat to Rahugana. This Gita is found in the fifth canto of Srimad Bhagavatam.',
      count: 1,
      path: '/bhagavad-gita/paramahamsa'
    },
    {
      name: 'Putra Gītā',
      description: 'Putra Gita is a part of discussion between Yudhishthir and Bhishma Pitamah in Shanti Parva of Mahabharata.',
      count: 1,
      path: '/bhagavad-gita/putra'
    },
    {
      name: 'Rāma Gītā',
      description: 'Lord Rama to His brother Laxmana. this mainly focuses on Morality, Devetion and Dignity.',
      count: 1,
      path: '/bhagavad-gita/rama'
    },
    {
      name: 'Ribhu Gītā',
      description: 'Sixth aṁśa of Śrī Śiva Rahasyama.',
      count: 1,
      path: '/bhagavad-gita/ribhu'
    },
    {
      name: 'Rūdra Gītā',
      description: 'Songs sung by Lord Shiva in the forth canto of Srimad Bhagavatam.',
      count: 1,
      path: '/bhagavad-gita/rudra'
    },
    {
      name: 'Sapta Gītā',
      description: 'Seven songs from Śrīmad-bhāgavatam.',
      count: 1,
      path: '/bhagavad-gita/sapta'
    },
    {
      name: 'Sarala Gītā',
      description: 'Bhagavad-gītā in Odia Language.',
      count: 1,
      path: '/bhagavad-gita/sarala'
    },
    {
      name: 'ṣaḍja Gītā',
      description: 'Comes in the Shanti Parva of Mahabharata. Primarily talksa about the four puruśārthas.',
      count: 1,
      path: '/bhagavad-gita/sadja'
    },
    {
      name: 'Śakti Gītā',
      description: 'Maharshi Vedavyas to Rishi Munis about the glories of Goddess.',
      count: 1,
      path: '/bhagavad-gita/shakti'
    },
    {
      name: 'Śambhu Gītā',
      description: 'Lord Shiva to Pitras (Ancestors), Soot Jii and Many Rishi-Munis.',
      count: 1,
      path: '/bhagavad-gita/sambhu'
    },
    {
      name: 'Śampāka Gītā',
      description: 'Shampak Geeta comes under Shanti Parva of Mahabharata. In this, Grandfather Bhishma has inspired renounced Brahmana to renounce the teachings of a renunciant Brahmin named Shampak by telling them in his own words. Every person in this world, whether rich or poor, experiences happiness and sorrow.',
      count: 1,
      path: '/bhagavad-gita/sampaka'
    },
    {
      name: 'Sūrya Gītā',
      description: 'Surya Deva to a Sage, Part of the Srimad Bhagavatam. It imparts spiritual wisdom, emphasizing devotion, knowledge, and the path to self-realization.',
      count: 1,
      path: '/bhagavad-gita/surya'
    },
    {
      name: 'Śruti Gītā',
      description: 'The Sruti-Gita is contained in chapter 87 of Skandha X of Srimad Bhagavata.',
      count: 1,
      path: '/bhagavad-gita/sruti'
    },
    {
      name: 'Uddhava Gītā',
      description: 'Lord Krishna to his devotee Uddhava.,Part of the Bhagavata Purana. It encompasses profound teachings on devotion, the nature of the self, and the path to spiritual realization, serving as a conclusion to the Bhagavata Purana.',
      count: 4,
      path: '/bhagavad-gita/uddhava'
    },
    {
      name: 'Veṇu Gīta',
      description: 'The Song of Krsna\'s Flute, Srimad -Bhagavatam Tenth Canto – Chapter Twenty-one. The gopi\'s sing the glories of the sound of Sri Krsna\'s flute as He enters the enchanting forest of Vrndavana upon the arrival of autumn.',
      count: 1,
      path: '/bhagavad-gita/venu'
    },
    {
      name: 'Vibhīśaṇa Gītā',
      description: 'Sri Rama imparts this knowledge to Vibhishana on the battlefield of Sri Lanka and is found in the Lanka Kanda portion of the Ramacharitmanas. Sri Rama describes the chariot of dharma which is needed to fight and defeat the inner enemies of ignorance, anger etc',
      count: 1,
      path: '/bhagavad-gita/vibhishana'
    },
    {
      name: 'Vidyā Gītā',
      description: 'the Tripura Rahasya. Herein The teacher is Sri Tripura Sundari and diciples are the legendary sages who were inquiring into the Knowledge of Awareness, bliss and Non-dual Brahman-Consciousness. ...',
      count: 1,
      path: '/bhagavad-gita/vidya'
    },
    {
      name: 'Viṣṇu Gītā',
      description: 'Lord Krishna to Uddhava, Part of the Mahabharata, Uttara Khanda. It imparts profound teachings on devotion, the nature of reality, and the path to spiritual liberation, emphasizing the significance of surrendering to the divine.',
      count: 1,
      path: '/bhagavad-gita/vishnu'
    },
    {
      name: 'Vyādha Gītā',
      description: 'Markandeya Muni to a Butcher, Part of the Mahabharata, Vana Parva. It imparts spiritual wisdom, highlighting the importance of humility, detachment, and devotion in the pursuit of a meaningful life.',
      count: 1,
      path: '/bhagavad-gita/vyadha'
    }
  ];

  const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  const renderCategoryList = (categories) => (
    <div className="scriptures-list">
      {categories.map((category, index) => (
        <Link to={category.path} key={index} className="scripture-item">
          <div className="scripture-icon">
            <FaBookOpen />
          </div>
          <div className="scripture-content">
            <div className="scripture-header">
              <h3>{category.name}</h3>
              <span className="scripture-count">{category.count}</span>
            </div>
            <p className="scripture-description">{category.description}</p>
          </div>
          <FaChevronRight className="arrow-icon" />
        </Link>
      ))}
    </div>
  );

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

        {/* Gita Categories */}
        <div className="scriptures-section">
          {/* Śāstra Section */}
          <div className="section-header" onClick={() => toggleSection('gita')}>
            <h2>Śāstra (शास्त्र)</h2>
            <FaChevronDown className={`dropdown-icon ${expandedSections.gita ? 'expanded' : ''}`} />
          </div>
          {expandedSections.gita && renderCategoryList(gitaCategories)}
        </div>

        {/* Donation Section */}
        <div className="donation-section">
          <h3>Help us keep this Sanatan library Free..</h3>
          <p>Even ₹50-₹100 of Laxmi Seva will help us Spread Dharma</p>
          <button className="donate-btn">Donate Now</button>
        </div>
      </div>
    </div>
  );
};

export default GitaScriptures;
