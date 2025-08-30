import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import googleplayios   from "../assets/images/googleplayios.png"; // Import the image for the app download section
import '@fortawesome/fontawesome-free/css/all.min.css';
import footerbg from "../assets/images/footerbg.png"; // Import the background image for the footer
import pingfence from "../assets/images/pingfecne.png"; // Import the pingfence image

const Footer = () => {
  return (
    <footer className="footer">
      {/* First Section */}
      <div className="footer-section first-section">
        <div className="download-subscribe">
          <div className="download">
            <h2>Download Our App</h2>
            <p>Book pujas, receive prasad updates, and stay connected with temple activities</p>
            <img src={googleplayios} alt="Download our app" className="app-image" />
          </div>
          <div className="divider"></div>
          <div className="subscribe">
            <h2>Subscribe To Our Newsletter</h2>
            <p>Stay updated with temple events, festivals, and spiritual discourses</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="footerabout">
        <div className="about">
          <div className="column">
            <h3>Temple Services</h3>
            <p>Daily Rituals</p>
            <p>Sanskar Pujas</p>
            <p>Festival Celebrations</p>
            <p>Vedic Education</p>
            <p>Spiritual Counseling</p>
          </div>
          <div className="column">
            <h3>Support Us</h3>
            <p>Temple Donations</p>
            <p>Annadaan Seva</p>
            <p>Sponsor a Puja</p>
            <p>Education Fund</p>
            <p>Temple Development</p>
          </div>
          <div className="column">
            <h3>Quick Links</h3>
            <p>Temple Timings</p>
            <p>Event Calendar</p>
            <p>Book a Puja</p>
            <p>Contact Priests</p>
            <p>Photo Gallery</p>
          </div>
          <div className="column">
            <h3>Information</h3>

            <p>How to Reach</p>
            <p>Accommodation</p>
            <p>Rules & Customs</p>
            <p>FAQ</p>
          </div>

          <div className="divider2"></div>

          <div className="aboutsocials">
            <h3>Connect With Us</h3>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> Upper Chinore, Jammu, J&K - 180013</p>
              <p><i className="fas fa-phone"></i> +91 1234567890</p>
              <p><i className="fas fa-envelope"></i> info@kailashvidyadham.com</p>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Follow us on Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Follow us on Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Follow us on Twitter">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" title="Subscribe to our YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="mailto:info@kailashvidyadham.com" title="Email us">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <img style={{width:'100%'}} src={footerbg} alt="Temple Footer" className="app-image" />
      </div>

      {/* Third Section */}
      <div className="Copyright">
        <div>
          <img src={pingfence} alt="pingfence" style={{ width: '25px', height: '25px' }} className="img-fluid" />
        </div>
        <div>
          <p style={{marginTop:'2vh'}}>&copy; 2024 Kailash Vidya Dham. All rights reserved. | Developed with ❤️ by PingFence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;