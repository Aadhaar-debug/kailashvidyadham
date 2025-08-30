import React from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import banner from "../assets/images/kailashbanner.png";
import logo from "../assets/images/crimson_gold_temple.png";  
import fireicon from "../assets/images/fire-icon.png";  
import vedicicon from "../assets/images/vedic-icon.png";  
import poojaicon from "../assets/images/pooja-icon.png";  
import accomodation from "../assets/images/Accomodation.png";  
import prasaddaan from "../assets/images/Prasaddaan.png";  
import seva from "../assets/images/seva.png";  
import donation from "../assets/images/donation.png";  
import photo4 from "../assets/images/photo (4).jpeg";   
import photo18 from "../assets/images/photo (18).jpeg";   
import photo19 from "../assets/images/photo (19).jpeg";   
// import photo13 from "../assets/images/photo (13).jpeg";
import mandir2 from "../assets/images/mandir2.jpg";
   

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Kailash Vidya Dham - Sacred Temple & Vedic Education Center in Jammu</title>
        <meta name="description" content="Welcome to Kailash Vidya Dham, a sacred temple in Jammu dedicated to spiritual enlightenment, Vedic education, and traditional rituals. Experience divine peace and spiritual growth." />
        <meta name="keywords" content="Kailash Vidya Dham, temple in Jammu, Vedic education, spiritual center, Hindu temple, puja services, temple ceremonies" />
        <link rel="canonical" href="https://kailashvidyadham.com" />
      </Helmet>

      <div className="home-container" style={{ backgroundImage: `url(${banner})`, height: '90vh' }}>
        <div className="home-content">
          <img src={logo} alt="Logo" className="banner-logo" />
          <h3 style={{marginTop: '2vh'}}>Perform your pooja with the Best group of</h3>
          <div className="dividingline"></div>
          <h1 style={{color: 'rgb(191,0,0)'}}>Professional Purohits & Pandits</h1>
          <Link to="/booking" className="banner-button" style={{ textDecoration: 'none', color: 'white' }}>Book Now</Link>
        </div>
        
        <div className="progressicons">
              <div className="progress-item">
                <img src={fireicon} alt="fireicon" className="progressicon1" />
                <div>
                  <h3>125000+</h3>
                  <div className="progressiontitle"><h3>Poojas Performed</h3></div>
                </div>
              </div>
              <div className="progress-item">
                <img src={vedicicon} alt="vedicicon" className="progressicon2" />
                <div>
                  <h3>600+</h3>
                  <div className="progressiontitle"><h3>Vedic Priests</h3></div>
                </div>
              </div>
              <div className="progress-item">
                <img src={poojaicon} alt="poojaicon" className="progressicon3" />
                <div>
                  <h3>5000+</h3>
                  <div className="progressiontitle"><h3>Types of Poojas</h3></div>
                </div>
              </div>
        </div>
      </div> 

      <div className="maincontainer2">
        <div className="mainmaincontainer2-1">
          <div className="onlineformandnewscontainer">
            <div className="newscontainer">
              <div className="newscontent">
                <div style={{color : 'gold' , fontSize  :'25px' , fontWeight: '700'}}>
                    <ul><h5 style={{fontSize : '25px'}}>What's New</h5></ul>
                    <ul style={{marginTop : '0vh', fontSize : '15px', width :'35vh'}}><p>- Special Navratri Celebrations Starting Next Week</p></ul>
                    <ul style={{marginTop : '-1vh', fontSize : '15px', width :'35vh'}}><p>- Daily Ganga Aarti at 6:30 PM</p></ul>
                    <ul style={{marginTop : '-1vh', fontSize : '15px', width :'35vh'}}><p>- New Meditation Hall Now Open</p></ul>
                    <ul style={{marginTop : '-1vh', fontSize : '15px', width :'35vh'}}><p>- Monthly Bhagavad Gita Classes</p></ul>
                    <ul style={{marginTop : '-1vh', fontSize : '15px', width :'35vh'}}><p>- Special Puja Services for Festivals</p></ul>
                    <ul style={{marginTop : '-1vh', fontSize : '15px', width :'35vh'}}><p>- Online Darshan Available Now</p></ul>
                </div>
              </div>
            </div>
            <div className="onlineformcontainer">
              <div className="onlineform">
                <div style={{color : 'rgb(191,0,0)' , fontSize  :'25px' , fontWeight: '700'}}>
                  <div style={{marginLeft : '2vh' , marginTop : '-1vh' , marginBottom : '1vh'}}>Subscribe to our Newsletter</div>
                  <form className="online-form">
                    <input type="text" placeholder="Your Name" required />

                    <input type="email" placeholder="Your Email" required />

                    <input type="tel" placeholder="Your Phone" required />

                    <input type="text" placeholder="Preferred Newsletter Frequency" required />

                    <input type="text" placeholder="Interests / Topics" required />

                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop:'15vh',fontSize: '35px',color: 'gold' ,display:'flex', alignItems:'center', justifyContent:'center'}}>Devotee Services</div>

          <div className="devoteeservicescontainer">
            <div className="dscard">
              <img src={prasaddaan} alt="prasaddaan" className="prasaddaan" />
              <div className="cardtextandtitle">
                <h3>Prasad Daan</h3>
                <p>Contribute to our sacred Prasad distribution service. Your donation helps provide blessed food to devotees and the needy, continuing our tradition of spiritual nourishment.</p>
                <a href="/prasad-daan" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <p>Contribute &gt;</p>
                </a>
              </div>
            </div>
            <div className="dscard">
              <img src={seva} alt="seva" className="prasaddaan" />
              <div className="cardtextandtitle">
                <h3>Temple Seva</h3>
                <p>Participate in various temple services including flower decoration, bhajan singing, and helping with daily rituals. Join our community of dedicated sevaks.</p>
                <a href="/seva" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <p>Join Seva &gt;</p>
                </a>
              </div>
            </div>
            <div className="dscard">
              <img src={accomodation} alt="accommodation" className="prasaddaan" />
              <div className="cardtextandtitle">
                <h3>Yatri Nivas</h3>
                <p>Comfortable and peaceful accommodation for pilgrims and devotees. Clean rooms, vegetarian meals, and a spiritual environment for your stay.</p>
                <a href="/accommodation" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <p>Book Stay &gt;</p>
                </a>
              </div>
            </div>
            <div className="dscard">
              <img src={donation} alt="donation" className="prasaddaan" />
              <div className="cardtextandtitle">
                <h3>Temple Donation</h3>
                <p>Support our temple's activities, maintenance, and charitable initiatives. Your contributions help us serve the community better and maintain our sacred traditions.</p>
                <Link to="/donations" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <p>Donate Now &gt;</p>
                </Link>
              </div>
            </div>
            <div className="dscard">
              <img src={poojaicon} alt="pooja" className="prasaddaan" />
              <div className="cardtextandtitle">
                <h3>Special Pujas</h3>
                <p>Book special pujas for various occasions including birthdays, anniversaries, and festivals. Our experienced priests perform all rituals with devotion and precision.</p>
                <a href="/book-puja" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <p>Book Puja &gt;</p>
                </a>
              </div>
            </div>
          </div>

          {/* Our Sacred Purpose Section */}
          <section className="sacred-purpose-section" style={{ 
            padding: '2rem 1rem', 
            width: '100%', 
            marginTop: '15vh'
          }}>
            <div className="sacred-purpose-content" style={{
              display: 'flex',
              gap: '3rem',
              alignItems: 'center',
              padding: '2rem',
              maxWidth: '1200px',
              margin: '1rem auto',
              background: 'white',
              borderRadius: '20px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="sacred-purpose-image" style={{ flex: '1', position: 'relative' }}>
                <img 
                  src={mandir2} 
                  alt="Temple Main Hall" 
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                  }}
                />
              </div>
              <div className="sacred-purpose-text" style={{ flex: '1', padding: '2rem', color: '#333' }}>
                <h2 style={{ color: 'rgb(191,0,0)', fontSize: '2rem', marginBottom: '1.5rem' }}>Our Sacred Purpose</h2>
                <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
                  At Kailash Vidya Dham, we are dedicated to preserving and promoting the rich tapestry of 
                  Vedic traditions while making them accessible to contemporary seekers. Our temple serves 
                  as a bridge between ancient wisdom and modern life, offering guidance and spiritual 
                  sustenance to all who seek it.
                </p>
                <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
                  Through our various programs and initiatives, we strive to create an environment where 
                  spiritual growth, cultural preservation, and community service come together in harmony.
                  Our commitment extends beyond religious ceremonies to encompass holistic development 
                  of individuals and society.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="features-section" style={{ 
            padding: '2rem', 
            margin: '1rem auto', 
            maxWidth: '1200px',
            marginTop: '15vh'
          }}>
            <div className="features-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem'
            }}>
              <div className="feature-card" style={{
                padding: '2rem',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                transition: 'transform 0.3s ease',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h3 style={{ color: 'gold', fontSize: '1.5rem', marginBottom: '1rem' }}>Rich Heritage</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6' }}>
                  Our temple stands as a living monument to centuries of spiritual tradition. The 
                  architecture and sacred spaces are designed according to ancient Vastu principles, 
                  creating an atmosphere of divine harmony and peace.
                </p>
              </div>
              <div className="feature-card" style={{
                padding: '2rem',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                transition: 'transform 0.3s ease',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h3 style={{ color: 'gold', fontSize: '1.5rem', marginBottom: '1rem' }}>Daily Rituals</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6' }}>
                  Experience the divine through our meticulously performed daily rituals, including 
                  morning abhishekam, regular aartis, and special pujas. Our trained priests maintain 
                  the highest standards of Vedic traditions.
                </p>
              </div>
              <div className="feature-card" style={{
                padding: '2rem',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                transition: 'transform 0.3s ease',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h3 style={{ color: 'gold', fontSize: '1.5rem', marginBottom: '1rem' }}>Spiritual Education</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6' }}>
                  Our comprehensive educational programs include Vedic studies, Sanskrit classes, 
                  spiritual discourses, and cultural activities for all age groups, fostering a 
                  deeper understanding of our ancient wisdom.
                </p>
              </div>
            </div>
          </section>

          {/* Temple Complex Section */}
          <section className="temple-complex-section" style={{ 
            padding: '2rem 1rem', 
            width: '100%', 
            marginTop: '15vh'
          }}>
            <div className="temple-complex-content" style={{
              display: 'flex',
              gap: '3rem',
              alignItems: 'center',
              padding: '2rem',
              maxWidth: '1200px',
              margin: '1rem auto',
              background: 'white',
              borderRadius: '20px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              flexDirection: 'row-reverse'
            }}>
              <div className="temple-complex-image" style={{ flex: '1', position: 'relative' }}>
                <img 
                  src={mandir2} 
                  alt="Temple Complex" 
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                  }}
                />
              </div>
              <div className="temple-complex-text" style={{ flex: '1', padding: '2rem', color: '#333' }}>
                <h2 style={{ color: 'rgb(191,0,0)', fontSize: '2rem', marginBottom: '1.5rem' }}>Our Temple Complex</h2>
                <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
                  Our temple complex is a testament to traditional temple architecture, featuring:
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'rgb(191,0,0)', position: 'absolute', left: 0 }}>•</span>
                    Main Temple Sanctum with Lord Shiva and Parvati
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'rgb(191,0,0)', position: 'absolute', left: 0 }}>•</span>
                    Meditation Hall accommodating up to 100 practitioners
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'rgb(191,0,0)', position: 'absolute', left: 0 }}>•</span>
                    Yagya Shala for sacred fire ceremonies
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'rgb(191,0,0)', position: 'absolute', left: 0 }}>•</span>
                    Modern Learning Center for Vedic education
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'rgb(191,0,0)', position: 'absolute', left: 0 }}>•</span>
                    Community Kitchen for prasad and annadaan
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'rgb(191,0,0)', position: 'absolute', left: 0 }}>•</span>
                    Extensive Library of spiritual texts
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Initiatives Section */}
          <section className="initiatives-section" style={{ 
            padding: '2rem', 
            margin: '1rem auto', 
            maxWidth: '1200px',
            marginTop: '15vh'
          }}>
            <div className="initiatives-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              <div className="initiative-item" style={{
                padding: '2rem',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h3 style={{ color: 'gold', fontSize: '1.5rem', marginBottom: '1rem' }}>Spiritual Programs</h3>
                <ul style={{ listStyle: 'none', padding: 0, color: 'rgba(255, 255, 255, 0.9)' }}>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'gold', position: 'absolute', left: 0 }}>•</span>
                    Daily Rituals and Continuous Archana
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'gold', position: 'absolute', left: 0 }}>•</span>
                    Special Festival Celebrations
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'gold', position: 'absolute', left: 0 }}>•</span>
                    Guided Meditation Sessions
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'gold', position: 'absolute', left: 0 }}>•</span>
                    One-on-one Spiritual Counseling
                  </li>
                </ul>
              </div>
              <div className="initiative-item" style={{
                padding: '2rem',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h3 style={{ color: 'gold', fontSize: '1.5rem', marginBottom: '1rem' }}>Educational Activities</h3>
                <ul style={{ listStyle: 'none', padding: 0, color: 'rgba(255, 255, 255, 0.9)' }}>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'gold', position: 'absolute', left: 0 }}>•</span>
                    Regular Vedic Studies Classes
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'gold', position: 'absolute', left: 0 }}>•</span>
                    Sanskrit Language Courses
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'gold', position: 'absolute', left: 0 }}>•</span>
                    Cultural Programs and Training
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'gold', position: 'absolute', left: 0 }}>•</span>
                    Youth Development Initiatives
                  </li>
                </ul>
              </div>
              <div className="initiative-item" style={{
                padding: '2rem',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h3 style={{ color: 'gold', fontSize: '1.5rem', marginBottom: '1rem' }}>Community Service</h3>
                <ul style={{ listStyle: 'none', padding: 0, color: 'rgba(255, 255, 255, 0.9)' }}>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'gold', position: 'absolute', left: 0 }}>•</span>
                    Daily Annadaan Service
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'gold', position: 'absolute', left: 0 }}>•</span>
                    Charitable Initiatives
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'gold', position: 'absolute', left: 0 }}>•</span>
                    Environmental Projects
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'gold', position: 'absolute', left: 0 }}>•</span>
                    Regular Health Camps
                  </li>
                </ul>
              </div>
              <div className="initiative-item" style={{
                padding: '2rem',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h3 style={{ color: 'gold', fontSize: '1.5rem', marginBottom: '1rem' }}>Cultural Preservation</h3>
                <ul style={{ listStyle: 'none', padding: 0, color: 'rgba(255, 255, 255, 0.9)' }}>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'gold', position: 'absolute', left: 0 }}>•</span>
                    Traditional Arts Support
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'gold', position: 'absolute', left: 0 }}>•</span>
                    Festival Celebrations
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'gold', position: 'absolute', left: 0 }}>•</span>
                    Knowledge Repository
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ content: '"•"', color: 'gold', position: 'absolute', left: 0 }}>•</span>
                    Skills Development Programs
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div style={{ marginTop:'15vh',fontSize: '40px',color: 'gold' ,display:'flex', alignItems:'center', justifyContent:'center'}}>Photo Gallery</div>
            <div className="photogallerycontainer">
              <div className="photogallerycontainer-2">
                <div className="container" style={{ marginTop: '5vh' }}>
                  <div 
                    id="carouselExampleIndicators" 
                    className="carousel slide" 
                    data-bs-ride="carousel" 
                    data-bs-interval="3000"
                  >
                    
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img 
                          src={photo4} 
                          alt="prasaddaan" 
                          className="prasaddaan" 
                          style={{ height: '70vh', width: '100%', objectFit: 'cover', borderRadius: '50px' }} 
                        />
                      </div>
                      <div className="carousel-item">
                        <img 
                          src={photo18} 
                          alt="prasaddaan" 
                          className="prasaddaan" 
                          style={{ height: '70vh', width: '100%', objectFit: 'cover', borderRadius: '50px' }} 
                        />
                      </div>
                      <div className="carousel-item">
                        <img 
                          src={photo19} 
                          alt="prasaddaan" 
                          className="prasaddaan" 
                          style={{ height: '70vh', width: '100%', objectFit: 'cover', borderRadius: '50px' }} 
                        />
                      </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span className="carousel-control-next-icon"></span>
                    </button>

                  </div>
                </div>
              </div>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '100vh' ,
              marginTop : '-40vh'
              }}>
                <a 
                  href="https://google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    textDecoration: 'none', 
                    backgroundColor: 'rgb(191,0,0)', 
                    color: 'gold', 
                    padding: '15px 30px', 
                    borderRadius: '10px', 
                    fontSize: '1.5rem',  // approx h3 size
                    fontWeight: 'bold' 
                  }}
                >
                  View More 
                </a>
              </div>



              {/* Vision Section */}
              <section className="vision-section" style={{ 
                textAlign: 'center',
                padding: '2rem',
                background: 'white',
                margin: '1rem auto',
                maxWidth: '1200px',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                marginTop: '15vh'
              }}>
                <div className="vision-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <h2 style={{ color: 'rgb(191,0,0)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Vision</h2>
                  <p style={{ color: '#333', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1rem' }}>
                    We envision Kailash Vidya Dham as a global center for spiritual excellence, where seekers 
                    from all walks of life can find guidance, peace, and transformation. Our goal is to create 
                    a space where ancient wisdom continues to illuminate modern lives, fostering a community 
                    of conscious and compassionate individuals.
                  </p>
                  <p style={{ color: '#333', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1rem' }}>
                    Through strategic initiatives and dedicated efforts, we work towards establishing a 
                    world-class Vedic research center, creating comprehensive spiritual training programs, 
                    developing sustainable community service models, and promoting environmental consciousness 
                    through spiritual wisdom.
                  </p>
                </div>
              </section>

              {/* Impact Achievements Section */}
              <section className="achievements-section" style={{ 
                padding: '2rem', 
                margin: '1rem auto', 
                maxWidth: '1200px',
                marginTop: '15vh'
              }}>
                <h2 style={{ color: 'gold', fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Our Impact & Achievements</h2>
                <div className="achievements-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '1.5rem'
                }}>
                  <div className="achievement-card" style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '2rem',
                    borderRadius: '20px',
                    textAlign: 'center',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <div className="achievement-number" style={{ color: 'gold', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>10,000+</div>
                    <div className="achievement-title" style={{ color: 'white', fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Ceremonies Performed</div>
                    <div className="achievement-desc" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.9rem' }}>Traditional ceremonies and rituals conducted annually</div>
                  </div>
                  <div className="achievement-card" style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '2rem',
                    borderRadius: '20px',
                    textAlign: 'center',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <div className="achievement-number" style={{ color: 'gold', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>5,000+</div>
                    <div className="achievement-title" style={{ color: 'white', fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Students Educated</div>
                    <div className="achievement-desc" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.9rem' }}>Trained in Vedic studies and Sanskrit</div>
                  </div>
                  <div className="achievement-card" style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '2rem',
                    borderRadius: '20px',
                    textAlign: 'center',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <div className="achievement-number" style={{ color: 'gold', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>100,000+</div>
                    <div className="achievement-title" style={{ color: 'white', fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Meals Served</div>
                    <div className="achievement-desc" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.9rem' }}>Through our daily Annadaan service</div>
                  </div>
                  <div className="achievement-card" style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '2rem',
                    borderRadius: '20px',
                    textAlign: 'center',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <div className="achievement-number" style={{ color: 'gold', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>60+</div>
                    <div className="achievement-title" style={{ color: 'white', fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Years of Service</div>
                    <div className="achievement-desc" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.9rem' }}>Dedicated to spiritual enlightenment</div>
                  </div>
                </div>
              </section>

              {/* Reviews Section */}
              <section className="reviews-section" style={{ 
                padding: '2rem', 
                margin: '1rem auto', 
                maxWidth: '1200px',
                marginTop: '15vh'
              }}>
                <h2 style={{ color: 'gold', fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Devotee Experiences</h2>
                <div className="reviews-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1.5rem'
                }}>
                  <div className="review-card" style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '2rem',
                    borderRadius: '20px',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <div className="review-stars" style={{ color: 'gold', fontSize: '1.5rem', marginBottom: '1rem' }}>★★★★★</div>
                    <p className="review-text" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                      "A truly divine experience. The temple's spiritual atmosphere and the guidance of the 
                      priests have deeply enriched my spiritual journey."
                    </p>
                    <div className="reviewer-info" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1rem' }}>
                      <div className="reviewer-name" style={{ color: 'white', fontWeight: '600', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Rajesh Kumar</div>
                      <div className="reviewer-location" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Delhi</div>
                    </div>
                    </div>
                  <div className="review-card" style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '2rem',
                    borderRadius: '20px',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <div className="review-stars" style={{ color: 'gold', fontSize: '1.5rem', marginBottom: '1rem' }}>★★★★★</div>
                    <p className="review-text" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                      "The Vedic education programs here are exceptional. My children have learned so much 
                      about our culture and traditions."
                    </p>
                    <div className="reviewer-info" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1rem' }}>
                      <div className="reviewer-name" style={{ color: 'white', fontWeight: '600', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Priya Sharma</div>
                      <div className="reviewer-location" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Mumbai</div>
                    </div>
                    </div>
                  <div className="review-card" style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '2rem',
                    borderRadius: '20px',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <div className="review-stars" style={{ color: 'gold', fontSize: '1.5rem', marginBottom: '1rem' }}>★★★★★</div>
                    <p className="review-text" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                      "The temple's community service initiatives are inspiring. Their dedication to serving 
                      society while preserving our traditions is commendable."
                    </p>
                    <div className="reviewer-info" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1rem' }}>
                      <div className="reviewer-name" style={{ color: 'white', fontWeight: '600', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Amit Patel</div>
                      <div className="reviewer-location" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Bangalore</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action Section */}
              <section className="cta-section" style={{ 
                textAlign: 'center',
                padding: '3rem 2rem',
                margin: '1rem auto',
                maxWidth: '800px',
                marginTop: '15vh'
              }}>
                <h2 style={{ color: 'gold', fontSize: '2rem', marginBottom: '1rem' }}>Join Our Spiritual Journey</h2>
                <p style={{ color: 'white', fontSize: '1.1rem', marginBottom: '2rem' }}>Experience the divine presence and timeless wisdom at Kailash Vidya Dham</p>
                <button className="cta-button" style={{
                  background: 'gold',
                  color: 'rgb(191,0,0)',
                  border: 'none',
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>Visit the Temple</button>
              </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
