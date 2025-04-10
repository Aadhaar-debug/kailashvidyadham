import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/removebg-kailash_logo.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo-section">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <span className="brand-name">Kailash Vidyadham</span>
        </div>

        <div className="link-section">
          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? "X" : "≡"}
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
          </div>
        </div>
      </nav>

      {/* Golden Moving News Strip */}
      <div className="news-strip">
        <div className="news-text">
          Welcome to Kailash Vidyadham | Admissions Open | Excellence in Education | Join Us Today!
        </div>
      </div>
    </>
  );
};

export default Navbar;
