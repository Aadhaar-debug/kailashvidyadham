import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Let's build something amazing together!</p>
      </div>

      {/* Image at the bottom */}
      <div className="footer-image">
        <img src="/your-image.png" alt="Footer Decoration" />
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} YourWebsiteName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
