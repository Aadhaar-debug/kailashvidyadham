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
import templeimage10 from "../assets/images/templeimage.jpg";   

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
          <button className="banner-button">Book Now</button>
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
                  <div style={{marginLeft : '2vh' , marginTop : '-1vh' , marginBottom : '1vh'}}>Apply Online</div>
                  <form className="online-form">
                    <input type="text" placeholder="Your Name" required />

                    <input type="email" placeholder="Your Email" required />

                    <input type="tel" placeholder="Your Phone" required />

                    <input type="text" placeholder="Booking To and From Date" required />

                    <input type="text" placeholder="Pooja Category / Message" required />

                    <button type="submit">Submit</button>
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

              <div style={{ marginTop:'-25vh',fontSize: '35px',color: 'gold' ,display:'flex', alignItems:'center', justifyContent:'center'}}>About</div>

              <div className="homeaboutcontainer">
                <div className="aboutbackgroundimage">
                  <div>
                    <img src={templeimage10} alt="prasaddaan" className="prasaddaan" style={{borderRadius:'50px'}}/>
                  </div>
                  <div className="homeabouttext">
                    <h1 style={{color:'gold'}}>Kailash Vidya Dham</h1>
                    <div>
                      <p>QRHQ+3JG, Chinore, Jammu, Jammu and Kashmir 180013</p>
                    </div>
                    <div>
                      <p>For over six decades, Kailash Vidya Dham has been a beacon of spiritual enlightenment 
                         and service to humanity. Our temple complex serves as a sacred space for devotees 
                         seeking divine connection, knowledge of ancient scriptures, and the practice of 
                         traditional rituals. We maintain the highest standards of Vedic traditions while 
                         embracing modern amenities to serve our growing community of devotees.</p>
                    </div>
                    <div style={{marginTop: '1rem'}}>
                      <p>Our temple stands as a testament to the timeless wisdom of Sanatan Dharma, featuring 
                         intricately designed sanctums, meditation halls, and learning spaces. The main temple 
                         structure, built according to traditional Vastu Shastra principles, creates an 
                         atmosphere of divine harmony and peace.</p>
                    </div>
                    <div style={{marginTop: '1rem'}}>
                      <p>Join us in this spiritual journey as we continue to serve as a center for 
                         spiritual growth, cultural preservation, and community welfare. Experience the 
                         divine presence and timeless wisdom that has guided countless souls on their 
                         path to enlightenment.</p>
                    </div>
                    <div className="social-icons" style={{ display: 'flex', gap: '20px', fontSize: '30px', color: 'gold', marginTop: '1.5rem' }}>
                      <a href="https://instagram.com" target="_blank"><i className="bi bi-instagram"></i></a>
                      <a href="https://youtube.com" target="_blank"><i className="bi bi-youtube"></i></a>
                      <a href="https://facebook.com" target="_blank"><i className="bi bi-facebook"></i></a>
                      <a href="https://twitter.com" target="_blank"><i className="bi bi-twitter-x"></i></a>
                      <a href="mailto:someone@example.com"><i className="bi bi-envelope-fill"></i></a>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
