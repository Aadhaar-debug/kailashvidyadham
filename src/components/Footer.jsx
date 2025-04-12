import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import googleplayios   from "../assets/images/googleplayios.png"; // Import the image for the app download section

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
      <div className="footer-section second-section">
        <div className="column">
          <h3>About</h3>
          <p>Learn more about our temple and its history.</p>
        </div>
        <div className="column">
          <h3>Support</h3>
          <p>Contact us for support or inquiries.</p>
        </div>
        <div className="column">
          <h3>Locations</h3>
          <p>Find our temple locations near you.</p>
        </div>
        <div className="column">
          <h3>Donations</h3>
          <p>Support us by making a donation.</p>
        </div>
      </div>

      {/* Third Section */}
      <div className="footer-section third-section">
        <p>&copy; 2023 Kailash Vidyadham. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;