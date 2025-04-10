import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-section">
        <div className="logo">YourLogo</div>
        <span className="brand-name">Kailash Vidyadham</span>
      </div>

      <div className="link-section">
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? "X" : "≡"}
        </button>

        <div className={isMobile ? "nav-links-mobile" : "nav-links"}>
            <a href="#home" onClick={() => setIsMobile(false)}>Home</a>
            <a href="#about" onClick={() => setIsMobile(false)}>About</a>
            <a href="#services" onClick={() => setIsMobile(false)}>Services</a>
            <a href="#contact" onClick={() => setIsMobile(false)}>Contact</a>

            <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
