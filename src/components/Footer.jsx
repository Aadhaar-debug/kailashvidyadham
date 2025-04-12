import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import googleplayios   from "../assets/images/googleplayios.png"; // Import the image for the app download section
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* First Section */}
      <div className="footer-section first-section">
        <div className="download-subscribe">
          <div className="download">
            <h2>Download Our App</h2>
            <img src={googleplayios} alt="Download our app" className="app-image" />
          </div>
          <div className="divider"></div>
          <div className="subscribe">
            <h2>Subscribe To Our Newsletter</h2>
            <div className="subscribe-form" >
              <input type="email" placeholder="Enter your email" />
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="footerabout">
        <div className="column">
          <h3>About</h3>
          <p>Overview</p>
          <p>Temple</p>
          <p>Temple Story</p>
          <p>General Information</p>
          <p>GoSamrakshana Trust</p>
        </div>
        <div className="column">
          <h3>Donations</h3>
          <p>Overview</p>
          <p>e-Hundi</p>
          <p>AnnaPrasadam Trust</p>
          <p>Agama Patasala Trust</p>
          <p>GoSamrakshana Trust</p>
        </div>
        <div className="column">
          <h3>About</h3>
          <p>Overview</p>
          <p>Temple</p>
          <p>Temple Story</p>
          <p>General Information</p>
          <p>GoSamrakshana Trust</p>
        </div>
        <div className="column">
          <h3>Donations</h3>
          <p>Overview</p>
          <p>e-Hundi</p>
          <p>AnnaPrasadam Trust</p>
          <p>Agama Patasala Trust</p>
          <p>GoSamrakshana Trust</p>
        </div>

        <div className="divider2"></div>

        <div className="aboutsocials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="mailto:example@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Third Section */}
      <div className="Copyright">
        <div><p style={{marginTop:'2vh'}}>&copy; 2023 Kailash Vidyadham. All rights reserved.</p></div>
      </div>
    </footer>
  );
};

export default Footer;