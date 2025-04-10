import React from "react";
import "./Home.css";
import banner from "../assets/images/kailashbanner.png";
import logo from "../assets/images/crimson_gold_temple.png";  // Import your logo image

const Home = () => {
  return (

    <div>
      <div className="home-container"style={{ backgroundImage: `url(${banner})` }}>
      
      <div className="home-content">
        <img src={logo} alt="Logo" className="banner-logo" />
        <h3>Perform your pooja with the Best group of</h3>
        <h1>Professional Purohits & Pandits</h1>
        <button className="banner-button">Book Now</button>
        
      </div>
    </div>

    
      
    </div>
  );
};

export default Home;
