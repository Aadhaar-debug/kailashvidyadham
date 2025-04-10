import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">YourLogo</h1>

      <div className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <Link to="/" onClick={() => setIsMobile(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsMobile(false)}>About</Link>
        <Link to="/services" onClick={() => setIsMobile(false)}>Services</Link>
        <Link to="/contact" onClick={() => setIsMobile(false)}>Contact</Link>
        <a href="https://your-medium-blog-link.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobile(false)}>
          Blogs
        </a>
      </div>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? "✕" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
