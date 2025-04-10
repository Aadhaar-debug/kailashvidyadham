import React from "react";
import "./Home.css";
import banner from "../assets/images/kailashbanner.png";
import logo from "../assets/images/crimson_gold_temple.png";  
import fireicon from "../assets/images/fire-icon.png";  
import vedicicon from "../assets/images/vedic-icon.png";  
import poojaicon from "../assets/images/pooja-icon.png";  

const Home = () => {
  return (

    <div>
      <div className="home-container"style={{ backgroundImage: `url(${banner})` }}>
        <div className="home-content">
          <img src={logo} alt="Logo" className="banner-logo" />

          <h3>Perform your pooja with the Best group of</h3>
          <div className="dividingline"></div>
          <h1>Professional Purohits & Pandits</h1>

          <button className="banner-button">Book Now</button>
      </div>
      
      <div className="progressicons">
            <div style={{display : 'flex'}}>
              <img src={fireicon} alt="fireicon" className="progressicon1" />
              <div style={{display : 'flex' , flexDirection : 'column'}}>
                <div><h3>125000+</h3></div>
                <div style={{marginTop : '-6vh'}}><h3>Poojas Performed</h3></div>
              </div>
            </div>
            <div style={{display : 'flex'}}>
              <img src={vedicicon} alt="vedicicon" className="progressicon2" />
              <div style={{display : 'flex' , flexDirection : 'column'}}>
                <div><h3>600+</h3></div>
                <div style={{marginTop : '-6vh'}}><h3>Vedic Priests</h3></div>
              </div>
            </div>
            <div style={{display : 'flex'}}>
              <img src={poojaicon} alt="poojaicon" className="progressicon3" />
              <div style={{display : 'flex' , flexDirection : 'column'}}>
                <div><h3>5000+</h3></div>
                <div style={{marginTop : '-6vh'}}><h3>Types of Poojas</h3></div>
              </div>
            </div>
      </div>
    </div>

    
      
    </div>
  );
};

export default Home;
