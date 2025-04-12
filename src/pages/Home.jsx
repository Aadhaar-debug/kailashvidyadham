import React from "react";
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
      <div className="home-container"style={{ backgroundImage: `url(${banner})` , height : '90vh'}}>
        <div className="home-content">
          <img src={logo} alt="Logo" className="banner-logo" />

          <h3 style={{marginTop : '2vh'}}>Perform your pooja with the Best group of</h3>
          <div className="dividingline"></div>
          <h1 style={{color :'rgb(191,0,0)'}}>Professional Purohits & Pandits</h1>

          <button className="banner-button">Book Now</button>
      </div>
      
      <div className="progressicons">
            <div style={{display : 'flex'}}>
              <img src={fireicon} alt="fireicon" className="progressicon1" />
              <div style={{display : 'flex' , flexDirection : 'column'}}>
                <div><h3>125000+</h3></div>
                <div className="progressiontitle"><h3>Poojas Performed</h3></div>
              </div>
            </div>
            <div style={{display : 'flex'}}>
              <img src={vedicicon} alt="vedicicon" className="progressicon2" />
              <div style={{display : 'flex' , flexDirection : 'column'}}>
                <div><h3>600+</h3></div>
                <div className="progressiontitle"><h3>Vedic Priests</h3></div>
              </div>
            </div>
            <div style={{display : 'flex'}}>
              <img src={poojaicon} alt="poojaicon" className="progressicon3" />
              <div style={{display : 'flex' , flexDirection : 'column'}}>
                <div><h3>5000+</h3></div>
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
                  <ul style={{marginTop : '0vh', fontSize : '15px', width :'35vh'}}><p>- Morning Daily Pooja Timing shifted from 9AM to 7AM in the morning</p></ul>
                  <ul style={{marginTop : '-1vh', fontSize : '15px', width :'35vh'}}><p>- Devotee Service actions live now</p></ul>
                  <ul style={{marginTop : '-1vh', fontSize : '15px', width :'35vh'}}><p>- Devotee Accommodations available now</p></ul>
                  <ul style={{marginTop : '-1vh', fontSize : '15px', width :'35vh'}}><p>- Temple Premises Under CCTV Surveillance 24x7</p></ul>
                  <ul style={{marginTop : '-1vh', fontSize : '15px', width :'35vh'}}><p>- Special Maha Aarti Event Scheduled on Sunday Evening</p></ul>
                  <ul style={{marginTop : '-1vh', fontSize : '15px', width :'35vh'}}><p>- Online Donations & Offerings Portal is Live Now</p></ul>
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
          <div className="card">
            <img src={prasaddaan} alt="prasaddaan" className="prasaddaan" />
            <div className="cardtextandtitle">
              <h3>Prasad Daan</h3>
              <p>Devotees were willing toprovidethe needyand incoming shadaloos withfood prasadammay donatevia the given link below</p>
              <a href="https://example.com" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                <p>Link &gt;</p>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={seva} alt="prasaddaan" className="prasaddaan" />
            <div className="cardtextandtitle">
              <h3>Seva</h3>
              <p>Devotees were willing toprovidethe needyand incoming shadaloos withfood prasadammay donatevia the given link below</p>
              <a href="https://example.com" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                <p>Link &gt;</p>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={accomodation} alt="prasaddaan" className="prasaddaan" />
            <div className="cardtextandtitle">
              <h3>Accomodation</h3>
              <p>Devotees were willing toprovidethe needyand incoming shadaloos withfood prasadammay donatevia the given link below</p>
              <a href="https://example.com" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                <p>Link &gt;</p>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={donation} alt="prasaddaan" className="prasaddaan" />
            <div className="cardtextandtitle">
              <h3>Donation</h3>
              <p>Devotees were willing toprovidethe needyand incoming shadaloos withfood prasadammay donatevia the given link below</p>
              <a href="https://example.com" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                <p>Link &gt;</p>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={poojaicon} alt="prasaddaan" className="prasaddaan" />
            <div className="cardtextandtitle">
              <h3>Poojaicon</h3>
              <p>Devotees were willing toprovidethe needyand incoming shadaloos withfood prasadammay donatevia the given link below</p>
              <a href="https://example.com" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                <p>Link &gt;</p>
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
            marginTop : '-45vh'
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
                View More >
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
                    <p>For over 60 years, the sacred Kalash with Yadam Temple in Chinur, Jammu,
                       has stood as a symbol of devotion, compassion, and community service — 
                       serving orphanages, old age homes, widows, abandoned children, and even
                        stray animals. A true spiritual home for those seeking peace and 
                        purpose.
                      With a legacy like no other, the temple has been the proud host of over
                       1,25,000+ marriage ceremonies, bringing together lives and families 
                       across generations. Supported by a dedicated group of 5000+ priests 
                       and scholars, and offering over 600+ unique types of Pooja services, Kalash with Yadam is truly a one-of-a-kind spiritual powerhouse.
                      Beyond religious practices, the temple has also been at the forefront 
                      of various social causes and government-organized initiatives like:</p>
                    <div>- Beti Bachao Beti Padhao Campaign</div>
                    <div>- Gaumata Raksha Drives</div>
                    <div>- Support for Homeless & Hostage Victims</div>
                    <div>- -Welfare Events for Underprivileged </div>
                    <div>&nbsp;</div>
                    <div>As it continues to grow and evolve, Kalash with Yadam Temple remains committed to being more than just a place of worship — it’s a beacon of hope, service, and spiritual transformation for all who walk through its doors.</div>
                    <div className="social-icons" style={{ display: 'flex', gap: '20px', fontSize: '30px', color: 'gold' }}>
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



    </div>
  );
};

export default Home;
