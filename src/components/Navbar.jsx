import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/removebg-kailash_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo-section">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <span className="brand-name">Kailash Vidya dham</span>
        </div>

        <div className="link-section">
          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <FaTimes size={25} color="white" /> : <FaBars size={25} color="white" />}
          </button>

          <div className={isMobile ? "nav-links-mobile" : "nav-links"}>
            <Link to="/" onClick={() => setIsMobile(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsMobile(false)}>About</Link>
            <Link to="/services" onClick={() => setIsMobile(false)}>Services</Link>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobile(false)}>
            Blogs
            </a>
            <Link to="/contact" onClick={() => setIsMobile(false)}>Contact</Link>

            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
            />

            <div className="navphonenumber">Ph - +91-9419362813</div>

            <div className="navsocialicons">
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
      </nav>

      {/* Golden Moving News Strip */}
      {/* Golden Moving News Strip */}
        <div className="news-strip">
            <div className="news-text">
                For more information contact Shree Mahant Divyanand Saraswati Maharaj Athyaksh Sanchalak for any queries. Ph Number - 9419362813 and Email - akhandbharat64@gmail.com. We are happy to help you anytime. Om Namah Shivay.
            </div>
        </div>

    </>
  );
};

export default Navbar;
