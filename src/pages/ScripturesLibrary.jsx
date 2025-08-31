import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ScripturesLibrary.css';
import { FaBookOpen, FaPlay, FaWrench, FaBars, FaSearch, FaChevronDown, FaChevronRight, FaFacebook, FaInstagram, FaYoutube, FaSpotify, FaTwitter } from 'react-icons/fa';

const ScripturesLibrary = () => {
  const [activeTab, setActiveTab] = useState('explore');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [expandedSections, setExpandedSections] = useState({
    shastra: true,
    spiritualTeachers: true,
    vedicStudies: true,
    devotionalCollection: true,
    nonVedic: true
  });

  const filters = [
    'Trending', 'Vaishnava', 'Shaiva', 'Shakta', 'Hindi', 'English', 
    'Gujarati', 'Marathi', 'Bengali', 'Telugu', 'Punjabi', 'Kannada', 
    'Odia', 'Ganapatya', 'Saura'
  ];

  const shastraCategories = [
    {
      name: 'Gītā',
      description: 'Bhagavad-gītā • Aṣṭāvakra • Jñāneśvarī • Īśvara • Rudra • Uddhav • Gītā-sangraha • Veṇu • Hanumad • Etc',
      count: 41,
      path: '/scriptures/gita'
    },
    {
      name: 'Rāmāyaṇa',
      description: 'Valmiki • Tulasi • Bhushundi • Yogvashishtha • Kamba • Anand • Adbhut etc Ramayanas.',
      count: 17,
      path: '/scriptures/ramayana'
    },
    {
      name: 'Mahābhārata',
      description: 'Vaishmpayana Muni to Sages. The biggest epic poem in the world consisting 18 Parvas and 1,00,000 shlokas. Bhagvad Gita is part of Mahabharata\'s Bhishma Parva.',
      count: 7,
      path: '/scriptures/mahabharata'
    },
    {
      name: 'Purāṇa',
      description: 'Srimad Bhagavatam • Shiv Puran • Agni Puran • Vayu Puran • Garud Puran etc.',
      count: 18,
      path: '/scriptures/purana'
    },
    {
      name: 'Upa–Purāṇa',
      description: 'Ganesh Puran • Narsimha Puran • Kalki Puran • Datt Puran • Shivdharm Puran',
      count: 14,
      path: '/scriptures/upa-purana'
    },
    {
      name: 'Veda',
      description: 'Rigveda • Yajurveda • Samveda • Atharva Veda etc.',
      count: 4,
      path: '/scriptures/veda'
    },
    {
      name: 'Upaniṣad',
      description: 'Brihadaranyak • Taitarey • Mantrik • Aatma • Sarvasaar etc.',
      count: 112,
      path: '/scriptures/upanishad'
    },
    {
      name: 'Smṛti',
      description: 'Manusmriti • Yagyavalkya Smriti • Atri Smriti • Yama Smriti etc.',
      count: 21,
      path: '/scriptures/smriti'
    },
    {
      name: 'Upa–Smṛti',
      description: 'Bharadvajah • Prajapati • Gobhil • Vishvamitra • Baudhayana etc.',
      count: 5,
      path: '/scriptures/upa-smriti'
    },
    {
      name: 'Tantra Śāstra',
      description: 'Rudra Yamala • Brahma Yamala • Skanda Yamala etc.',
      count: 43,
      path: '/scriptures/tantra'
    },
    {
      name: 'Saṁhitā',
      description: 'Dhanurved Samhita • Ravan Samhita • Agasatya Samhita • Parasara Samhita • Bhrigu Samhita etc.',
      count: 13,
      path: '/scriptures/samhita'
    },
    {
      name: 'Darśana',
      description: 'Charvak Darshan • Jain Darshan • Bauddha Darshan etc.',
      count: 8,
      path: '/scriptures/darshana'
    },
    {
      name: 'Nīti',
      description: 'Chanakya Niti • Vidura Niti • Sukra Niti • Kamandakiya Niti etc.',
      count: 5,
      path: '/scriptures/niti'
    },
    {
      name: 'Sūtra',
      description: 'Brahma Sutra • Vaisesika Sutra • Aapastamba Dharma Sutra etc.',
      count: 17,
      path: '/scriptures/sutra'
    },
    {
      name: 'Āgama',
      description: 'Shaiva Agamas • Mrugendra Agama • Kamika Agama • Raurava Agama etc.',
      count: 13,
      path: '/scriptures/agama'
    },
    {
      name: 'Other Śāstras',
      description: 'Vaimanika Shastra • Kautilya Arth Shastra • Rasayan Shastra etc.',
      count: 2,
      path: '/scriptures/other-shastras'
    }
  ];

  const spiritualTeachersCategories = [
    {
      name: 'Gaudiya Vaishnav Acharyas',
      description: 'Srila Prabhupada • Bhakti Siddhanta Saraswati • Bhakti Vinoda Thakur • Six Gosvamis....',
      count: 5,
      path: '/spiritual-teachers/gaudiya-vaishnav'
    },
    {
      name: 'Advaita Vedanta Acharyas',
      description: 'Adi Shankaracharya • Karpatri Maharaj • Sivananda Swami',
      count: 7,
      path: '/spiritual-teachers/advaita-vedanta'
    },
    {
      name: 'Sri Vaishnava Sampradaya Acharyas',
      description: 'Ramanujacharya',
      count: 1,
      path: '/spiritual-teachers/sri-vaishnava'
    },
    {
      name: 'Madhva Vaishnava Sampradaya Acharyas',
      description: 'Madhvacahrya',
      count: 1,
      path: '/spiritual-teachers/madhva-vaishnava'
    },
    {
      name: 'Rudra Vaishnava Sampradaya Acharyas',
      description: 'Vallabhacharya',
      count: 1,
      path: '/spiritual-teachers/rudra-vaishnava'
    },
    {
      name: 'Kumar Vaishnava Sampradaya Acharyas',
      description: 'Nimbarkacharya',
      count: 1,
      path: '/spiritual-teachers/kumar-vaishnava'
    }
  ];

  const vedicStudiesCategories = [
    {
      name: 'Ayurveda',
      description: 'Sushruta Samhita • Ashtang Hridayam • Sadhak Sanjivani • Surya Chikitsa • Jal Chikitsa • Saundarya Nikhar • Chikitsa Pattiya • Bharatiya Aushadhiya....',
      count: 40,
      path: '/vedic-studies/ayurveda'
    },
    {
      name: 'Astrology',
      description: 'Ank Vidya • Sachitra Jyotish • Jyotish Samhita • Dynamic Astrology etc.',
      count: 42,
      path: '/vedic-studies/astrology'
    },
    {
      name: 'Brahmacharya',
      description: 'Brahmacharya Sadhna • Brahmacharya Ki Shakti • Krishna Bhavnamrit Mein Brahmacharya • Brahmacharya Hi Jivan....',
      count: 14,
      path: '/vedic-studies/brahmacharya'
    },
    {
      name: 'Yoga',
      description: 'Patanjali Yoga • Yoga Darshan • Hatha Yoga • Nad Yoga etc.',
      count: 28,
      path: '/vedic-studies/yoga'
    },
    {
      name: 'Vastu',
      description: 'Vastu Shastra • Vastu For House • Vastu Basics and other Vastu Books.',
      count: 15,
      path: '/vedic-studies/vastu'
    },
    {
      name: 'Cosmology',
      description: 'All Vedic references on Vedic Cosmology from all Shastras.',
      count: 11,
      path: '/vedic-studies/cosmology'
    },
    {
      name: 'History',
      description: 'Chhatrapati Shivaji Maharaj • Maharana Pratap • Sanatan Ithihaas....',
      count: 55,
      path: '/vedic-studies/history'
    },
    {
      name: 'Palmistry',
      description: '.',
      count: 2,
      path: '/vedic-studies/palmistry'
    },
    {
      name: 'Samskaras',
      description: 'Garbhadhan Sanskar • 16 Sanskar & Other books on Sanskaras.',
      count: 'Coming Soon',
      path: '/vedic-studies/samskaras'
    },
    {
      name: 'Vedic Maths',
      description: 'Vedic Formulaes • Vedic Tricks • Vedic Way....',
      count: 16,
      path: '/vedic-studies/vedic-maths'
    }
  ];

  const devotionalCollectionCategories = [
    {
      name: 'Aaratisa',
      description: 'Mangalaarti • Ganesh Arti • Krishna Aarati etc',
      count: 25,
      path: '/devotional/aaratisa'
    },
    {
      name: 'Ashtakas',
      description: 'Shri Rudrashtakam • Damodarashtakam • Radhashtakam • Kripa Kataksh etc.',
      count: 35,
      path: '/devotional/ashtakas'
    },
    {
      name: 'Bhajans',
      description: 'Vaishnav Geet • Shaiva Bhajans • Krishna Bhajan • Bhajan Sangrah etc.',
      count: 18,
      path: '/devotional/bhajans'
    },
    {
      name: 'Chalisas',
      description: 'Hanuman Chalisa • Shiv Chalisa • Krsna Chalisa • Saraswati Chalisa etc.',
      count: 25,
      path: '/devotional/chalisas'
    },
    {
      name: 'Kathaas',
      description: 'Ekadashi Utpatti Kathas • Pooja Vidhis • Nitya Karma Puja Prakash etc.',
      count: 46,
      path: '/devotional/kathaas'
    },
    {
      name: 'Suktas',
      description: 'Agni Sukta • Rudra Sukta • Shree Sukta • Agni Sukta • Surya Sukta etc.',
      count: 32,
      path: '/devotional/suktas'
    },
    {
      name: 'Stotram',
      description: 'Ram Raksha Stotram • Shiv Tandav Stotram • Shiv Mahima Stotram • Ram Raksha Stotra etc.',
      count: 19,
      path: '/devotional/stotram'
    },
    {
      name: 'Sahastranaam',
      description: 'Vishnu Sahastranaam • Ram Sahastranaam • Krsna Shastranaam • Hanuman Sahastranaam etc.',
      count: 9,
      path: '/devotional/sahastranaam'
    },
    {
      name: 'Kawachas',
      description: 'Powerful chants (Kawachas) bring safety by warding off darkness.',
      count: 19,
      path: '/devotional/kawachas'
    }
  ];

  const nonVedicCategories = [
    {
      name: 'Art',
      description: 'Art books will be found here.',
      count: 'Coming Soon',
      path: '/non-vedic/art'
    },
    {
      name: 'Branding',
      description: 'Branding books will be found here.',
      count: 'Coming Soon',
      path: '/non-vedic/branding'
    },
    {
      name: 'Design',
      description: 'Design books will be found here.',
      count: 'Coming Soon',
      path: '/non-vedic/design'
    },
    {
      name: 'Money',
      description: 'Money books will be found here.',
      count: 'Coming Soon',
      path: '/non-vedic/money'
    },
    {
      name: 'Marketing',
      description: 'Marketing books will be found here.',
      count: 'Coming Soon',
      path: '/non-vedic/marketing'
    },
    {
      name: 'Psychology',
      description: 'Psychology books will be found here.',
      count: 'Coming Soon',
      path: '/non-vedic/psychology'
    },
    {
      name: 'Self Improvement',
      description: 'Self Improvement books will be found here.',
      count: 'Coming Soon',
      path: '/non-vedic/self-improvement'
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
              placeholder="Find in veducation library"
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

        {/* Scripture Categories */}
        <div className="scriptures-section">
          {/* Śāstra Section */}
          <div className="section-header" onClick={() => toggleSection('shastra')}>
            <h2>Śāstra (शास्त्र)</h2>
            <FaChevronDown className={`dropdown-icon ${expandedSections.shastra ? 'expanded' : ''}`} />
            </div>
          {expandedSections.shastra && renderCategoryList(shastraCategories)}

          {/* Spiritual Teachers Section */}
          <div className="section-header" onClick={() => toggleSection('spiritualTeachers')}>
            <h2>Spiritual Teachers (आचार्य/गुरु)</h2>
            <FaChevronDown className={`dropdown-icon ${expandedSections.spiritualTeachers ? 'expanded' : ''}`} />
        </div>
          {expandedSections.spiritualTeachers && renderCategoryList(spiritualTeachersCategories)}

          {/* Vedic Studies Section */}
          <div className="section-header" onClick={() => toggleSection('vedicStudies')}>
            <h2>Vedic Studies (अन्य वेदांग)</h2>
            <FaChevronDown className={`dropdown-icon ${expandedSections.vedicStudies ? 'expanded' : ''}`} />
          </div>
          {expandedSections.vedicStudies && renderCategoryList(vedicStudiesCategories)}

          {/* Devotional Collection Section */}
          <div className="section-header" onClick={() => toggleSection('devotionalCollection')}>
            <h2>Devotional Collection (पूजन संग्रह)</h2>
            <FaChevronDown className={`dropdown-icon ${expandedSections.devotionalCollection ? 'expanded' : ''}`} />
          </div>
          {expandedSections.devotionalCollection && renderCategoryList(devotionalCollectionCategories)}

          {/* Non-Vedic Section */}
          <div className="section-header" onClick={() => toggleSection('nonVedic')}>
            <h2>Non-Vedic (अनार्य साहित्य)</h2>
            <FaChevronDown className={`dropdown-icon ${expandedSections.nonVedic ? 'expanded' : ''}`} />
          </div>
          {expandedSections.nonVedic && renderCategoryList(nonVedicCategories)}
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

export default ScripturesLibrary;
