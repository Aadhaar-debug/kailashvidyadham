import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BhagavadGita.css';
import poojaIcon from '../assets/images/pooja-icon.png';

const BhagavadGita = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);

  const chapters = [
    {
      id: 1,
      name: 'Arjuna Vishada Yoga',
      sanskrit: 'अर्जुन विषाद योग',
      description: 'The Yoga of Arjuna\'s Dejection',
      verses: 47,
      summary: 'Arjuna is filled with despair and confusion on the battlefield, seeing his relatives and teachers arrayed against him.',
      keyTeachings: [
        'The nature of dharma and duty',
        'The conflict between personal relationships and duty',
        'The importance of seeking guidance in times of confusion'
      ]
    },
    {
      id: 2,
      name: 'Sankhya Yoga',
      sanskrit: 'सांख्य योग',
      description: 'The Yoga of Knowledge',
      verses: 72,
      summary: 'Krishna explains the eternal nature of the soul and the temporary nature of the body.',
      keyTeachings: [
        'The soul is eternal and indestructible',
        'The body is temporary and subject to change',
        'One should perform duties without attachment to results'
      ]
    },
    {
      id: 3,
      name: 'Karma Yoga',
      sanskrit: 'कर्म योग',
      description: 'The Yoga of Action',
      verses: 43,
      summary: 'Krishna explains the importance of performing one\'s duties without attachment to the fruits of action.',
      keyTeachings: [
        'Perform your duties without attachment',
        'Action is better than inaction',
        'Set an example for others through righteous action'
      ]
    },
    {
      id: 4,
      name: 'Jnana Karma Sanyasa Yoga',
      sanskrit: 'ज्ञान कर्म संन्यास योग',
      description: 'The Yoga of Knowledge and Renunciation of Action',
      verses: 42,
      summary: 'Krishna reveals his divine nature and explains the path of knowledge and action.',
      keyTeachings: [
        'Krishna\'s divine nature and incarnations',
        'The importance of both knowledge and action',
        'The concept of sacrifice and its various forms'
      ]
    },
    {
      id: 5,
      name: 'Karma Sanyasa Yoga',
      sanskrit: 'कर्म संन्यास योग',
      description: 'The Yoga of Renunciation of Action',
      verses: 29,
      summary: 'Krishna explains that both renunciation and action lead to liberation.',
      keyTeachings: [
        'Both renunciation and action lead to the same goal',
        'The importance of inner renunciation',
        'The nature of true knowledge and wisdom'
      ]
    },
    {
      id: 6,
      name: 'Atma Samyama Yoga',
      sanskrit: 'आत्म संयम योग',
      description: 'The Yoga of Self-Control',
      verses: 47,
      summary: 'Krishna describes the practice of meditation and self-control.',
      keyTeachings: [
        'The practice of meditation and concentration',
        'Self-control and discipline',
        'The nature of the mind and how to control it'
      ]
    },
    {
      id: 7,
      name: 'Jnana Vijnana Yoga',
      sanskrit: 'ज्ञान विज्ञान योग',
      description: 'The Yoga of Knowledge and Wisdom',
      verses: 30,
      summary: 'Krishna reveals his complete nature and the different aspects of his manifestation.',
      keyTeachings: [
        'Krishna\'s complete nature and manifestations',
        'The distinction between higher and lower nature',
        'The importance of devotion and surrender'
      ]
    },
    {
      id: 8,
      name: 'Akshara Brahma Yoga',
      sanskrit: 'अक्षर ब्रह्म योग',
      description: 'The Yoga of the Imperishable Brahman',
      verses: 28,
      summary: 'Krishna explains the nature of the supreme reality and the path to liberation.',
      keyTeachings: [
        'The nature of the supreme reality (Brahman)',
        'The importance of remembering God at the time of death',
        'The different paths to liberation'
      ]
    },
    {
      id: 9,
      name: 'Raja Vidya Raja Guhya Yoga',
      sanskrit: 'राज विद्या राज गुह्य योग',
      description: 'The Yoga of Royal Knowledge and Royal Secret',
      verses: 34,
      summary: 'Krishna reveals the most confidential knowledge about his nature and relationship with devotees.',
      keyTeachings: [
        'Krishna\'s complete nature and powers',
        'The importance of devotion and surrender',
        'The relationship between the devotee and the divine'
      ]
    },
    {
      id: 10,
      name: 'Vibhuti Yoga',
      sanskrit: 'विभूति योग',
      description: 'The Yoga of Divine Glories',
      verses: 42,
      summary: 'Krishna describes his various manifestations and divine glories in the world.',
      keyTeachings: [
        'Krishna\'s manifestations in various forms',
        'The divine presence in all aspects of creation',
        'The importance of recognizing the divine in everything'
      ]
    },
    {
      id: 11,
      name: 'Vishwarupa Darshana Yoga',
      sanskrit: 'विश्वरूप दर्शन योग',
      description: 'The Yoga of the Vision of the Universal Form',
      verses: 55,
      summary: 'Krishna reveals his universal form to Arjuna, showing the entire creation within himself.',
      keyTeachings: [
        'The universal form of Krishna',
        'The temporary nature of all beings',
        'The importance of divine vision and understanding'
      ]
    },
    {
      id: 12,
      name: 'Bhakti Yoga',
      sanskrit: 'भक्ति योग',
      description: 'The Yoga of Devotion',
      verses: 20,
      summary: 'Krishna explains the path of devotion and the qualities of a true devotee.',
      keyTeachings: [
        'The path of devotion and love',
        'The qualities of a true devotee',
        'The superiority of devotion over other paths'
      ]
    },
    {
      id: 13,
      name: 'Kshetra Kshetrajna Vibhaga Yoga',
      sanskrit: 'क्षेत्र क्षेत्रज्ञ विभाग योग',
      description: 'The Yoga of Distinction between the Field and the Knower of the Field',
      verses: 34,
      summary: 'Krishna explains the distinction between the body (field) and the soul (knower of the field).',
      keyTeachings: [
        'The distinction between body and soul',
        'The nature of the field (body) and its knower (soul)',
        'The path to true knowledge and liberation'
      ]
    },
    {
      id: 14,
      name: 'Guna Traya Vibhaga Yoga',
      sanskrit: 'गुण त्रय विभाग योग',
      description: 'The Yoga of Division of the Three Gunas',
      verses: 27,
      summary: 'Krishna explains the three modes of material nature and their influence on living beings.',
      keyTeachings: [
        'The three gunas (sattva, rajas, tamas)',
        'How the gunas influence behavior and consciousness',
        'Transcending the gunas through devotion'
      ]
    },
    {
      id: 15,
      name: 'Purushottama Yoga',
      sanskrit: 'पुरुषोत्तम योग',
      description: 'The Yoga of the Supreme Person',
      verses: 20,
      summary: 'Krishna describes the supreme person and the eternal tree of life.',
      keyTeachings: [
        'The supreme person (Purushottama)',
        'The eternal tree of life',
        'The importance of taking refuge in the supreme'
      ]
    },
    {
      id: 16,
      name: 'Daivasura Sampad Vibhaga Yoga',
      sanskrit: 'दैवासुर सम्पद्विभाग योग',
      description: 'The Yoga of Division between Divine and Demoniac Qualities',
      verses: 24,
      summary: 'Krishna describes the divine and demoniac qualities and their consequences.',
      keyTeachings: [
        'Divine qualities lead to liberation',
        'Demoniac qualities lead to bondage',
        'The importance of cultivating divine qualities'
      ]
    },
    {
      id: 17,
      name: 'Shraddhatraya Vibhaga Yoga',
      sanskrit: 'श्रद्धात्रय विभाग योग',
      description: 'The Yoga of Division of Threefold Faith',
      verses: 28,
      summary: 'Krishna explains the three types of faith and their manifestations.',
      keyTeachings: [
        'Three types of faith based on the gunas',
        'The importance of proper faith and understanding',
        'The relationship between faith and action'
      ]
    },
    {
      id: 18,
      name: 'Moksha Sanyasa Yoga',
      sanskrit: 'मोक्ष संन्यास योग',
      description: 'The Yoga of Liberation and Renunciation',
      verses: 78,
      summary: 'The final chapter summarizes all the teachings and concludes with the path to liberation.',
      keyTeachings: [
        'The summary of all previous teachings',
        'The importance of complete surrender',
        'The ultimate goal of liberation and union with the divine'
      ]
    }
  ];

  const sampleVerses = [
    {
      chapter: 2,
      verse: 47,
      sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
      transliteration: 'karmaṇy evādhikāras te mā phaleṣu kadācana | mā karma-phala-hetur bhūr mā te saṅgo stv akarmaṇi ||',
      translation: 'You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction.',
      meaning: 'This is one of the most famous verses of the Gita, teaching the principle of detached action - perform your duties without being attached to the results.'
    },
    {
      chapter: 4,
      verse: 7,
      sanskrit: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥',
      transliteration: 'yadā yadā hi dharmasya glānir bhavati bhārata | abhyutthānam adharmasya tadātmānaṁ sṛjāmy aham ||',
      translation: 'Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion—at that time I descend Myself.',
      meaning: 'This verse explains the concept of divine incarnation - whenever dharma declines, the Supreme Lord appears to restore righteousness.'
    },
    {
      chapter: 9,
      verse: 22,
      sanskrit: 'अनन्याश्चिन्तयन्तो मां ये जना: पर्युपासते। तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥',
      transliteration: 'ananyāś cintayanto māṁ ye janāḥ paryupāsate | teṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham ||',
      translation: 'But those who always worship Me with exclusive devotion, meditating on My transcendental form—to them I carry what they lack, and I preserve what they have.',
      meaning: 'This verse promises that those who worship Krishna with exclusive devotion will have all their needs fulfilled and their possessions protected.'
    }
  ];

  return (
    <div className="bhagavad-gita-page">
      <div className="gita-header">
        <h1>Bhagavad Gita</h1>
        <p className="sanskrit-title">श्रीमद्भगवद्गीता</p>
        <p>The Divine Song of Lord Krishna</p>
        <div className="gita-intro">
          <img src={poojaIcon} alt="Bhagavad Gita" className="gita-icon" />
          <div className="intro-text">
            <h3>The Essence of Vedic Knowledge</h3>
            <p>The Bhagavad Gita is a 700-verse Hindu scripture that is part of the epic Mahabharata. It is a dialogue between Prince Arjuna and his charioteer Krishna, who is an avatar of Lord Vishnu. The Gita presents a synthesis of Hindu ideas about dharma, theistic bhakti, and the yogic ideals of moksha.</p>
          </div>
        </div>
      </div>

      <div className="gita-stats">
        <div className="stat">
          <span className="stat-number">18</span>
          <span className="stat-label">Chapters</span>
        </div>
        <div className="stat">
          <span className="stat-number">700</span>
          <span className="stat-label">Verses</span>
        </div>
        <div className="stat">
          <span className="stat-number">5000+</span>
          <span className="stat-label">Years Old</span>
        </div>
      </div>

      <div className="chapters-section">
        <h2>All 18 Chapters</h2>
        <div className="chapters-grid">
          {chapters.map((chapter) => (
            <div 
              key={chapter.id} 
              className={`chapter-card ${selectedChapter === chapter.id ? 'expanded' : ''}`}
              onClick={() => setSelectedChapter(selectedChapter === chapter.id ? null : chapter.id)}
            >
              <div className="chapter-header">
                <h3>Chapter {chapter.id}</h3>
                <h4>{chapter.name}</h4>
                <span className="sanskrit-name">{chapter.sanskrit}</span>
              </div>
              <p className="chapter-description">{chapter.description}</p>
              <div className="chapter-info">
                <span className="verses-count">{chapter.verses} verses</span>
              </div>

              {selectedChapter === chapter.id && (
                <div className="chapter-details">
                  <div className="detail-section">
                    <h5>Summary</h5>
                    <p>{chapter.summary}</p>
                  </div>
                  <div className="detail-section">
                    <h5>Key Teachings</h5>
                    <ul>
                      {chapter.keyTeachings.map((teaching, index) => (
                        <li key={index}>{teaching}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/bhagavad-gita/chapter-${chapter.id}`} className="read-chapter-btn">
                    Read Full Chapter
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="famous-verses">
        <h2>Famous Verses</h2>
        <div className="verses-grid">
          {sampleVerses.map((verse, index) => (
            <div key={index} className="verse-card">
              <div className="verse-header">
                <span className="verse-number">Chapter {verse.chapter}, Verse {verse.verse}</span>
              </div>
              <div className="verse-content">
                <div className="sanskrit-verse">
                  <h4>Sanskrit</h4>
                  <p>{verse.sanskrit}</p>
                </div>
                <div className="transliteration">
                  <h4>Transliteration</h4>
                  <p>{verse.transliteration}</p>
                </div>
                <div className="translation">
                  <h4>Translation</h4>
                  <p>{verse.translation}</p>
                </div>
                <div className="meaning">
                  <h4>Meaning</h4>
                  <p>{verse.meaning}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gita-teachings">
        <h2>Core Teachings</h2>
        <div className="teachings-grid">
          <div className="teaching-item">
            <h3>Dharma</h3>
            <p>Righteous duty and moral law that upholds the cosmic order</p>
          </div>
          <div className="teaching-item">
            <h3>Karma Yoga</h3>
            <p>Path of selfless action without attachment to results</p>
          </div>
          <div className="teaching-item">
            <h3>Bhakti Yoga</h3>
            <p>Path of devotion and love for the Supreme</p>
          </div>
          <div className="teaching-item">
            <h3>Jnana Yoga</h3>
            <p>Path of knowledge and wisdom</p>
          </div>
          <div className="teaching-item">
            <h3>Moksha</h3>
            <p>Liberation from the cycle of birth and death</p>
          </div>
          <div className="teaching-item">
            <h3>Atman</h3>
            <p>The eternal soul that is distinct from the body</p>
          </div>
        </div>
      </div>

      <div className="navigation-links">
        <Link to="/scriptures-library" className="nav-link">← Back to Library</Link>
        <Link to="/epics" className="nav-link">Epics →</Link>
      </div>
    </div>
  );
};

export default BhagavadGita;
