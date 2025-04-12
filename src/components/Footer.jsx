import React from "react";

const Footer = () => {
  return (
    <footer style={{ height: "120vh", display: "flex", flexDirection: "column" }}>
      {/* First Part */}
      <div
        style={{
          height: "30vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "maroon",
        }}
      >
        <div>
          <h3>Download Our App</h3>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play Store"
              style={{ height: "50px", marginRight: "10px" }}
            />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Download_on_the_App_Store_Badge.svg"
              alt="Apple App Store"
              style={{ height: "50px" }}
            />
          </a>
        </div>
        <div>
          <h3>Subscribe to Our Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: "10px",
                marginRight: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Second Part */}
      <div
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "rgb(191,0,0)",
          padding: "20px",
        }}
      >
        <div>
          <h3>About</h3>
          <p>Learn more about our temple and its history.</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Email: info@temple.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div>
          <h3>Services</h3>
          <p>Explore the services we offer to our devotees.</p>
        </div>
        <div>
          <h3>Locations</h3>
          <p>Find our temple locations near you.</p>
        </div>
      </div>

      {/* Third Part */}
      <div
        style={{
          height: "10vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(204, 99, 99)",
          padding: "20px",
        }}
      >
        <p>&copy; {new Date().getFullYear()} Kailash Vidyadham. All rights reserved.</p>
        <p>Contact us: info@kailashvidyadham.com | +123 456 7890</p>
      </div>
    </footer>
  );
};

export default Footer;