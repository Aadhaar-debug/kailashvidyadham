import React, { useState, useEffect } from "react";
import "./App.css";

// js
const App = () => {

  const [showFirstText, setShowFirstText] = useState(true);
  const [fadeClass, setFadeClass] = useState("fade-in");

  
  return (
    <div className="container">
      <div className="navbar">

        <div className="navlog">
          <div><img src="/removebg-kailash_logo.png"alt="Crimson Gold Temple"style={{ width: "40px", height: "40px", objectFit: "contain" }}/></div>
          <div>Kailash vidya dham</div>
        </div>
        
        <div className="navops">Services</div>
        <div className="navops">About</div>
        <div className="navops">Blog</div>
        <div className="navops">Contact</div>
        <div className="navops">
          <div class="search-container">
              <input type="text" placeholder="Search...">
                </input>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
          </div>
        </div>
        <div className="navmenu" onClick={() => {
          const nav = document.querySelector('.navlist');
          nav.style.width = nav.style.width === '60%' ? '0%' : '60%';
        }}>
          <div style={{ fontSize: "32px", color: "white", cursor: "pointer" }}>
            ☰
          </div>
        </div>
        
        <div className="navthing"></div>

        
      </div>



      <div className="navlist">
        <div
          className="closebtn"
          onClick={() => {
            const nav = document.querySelector('.navlist');
            nav.style.width = '0%';
          }}
        >
          <button className="navlistclosebtn">
            ✖
          </button>
        </div>

        {/* your nav items here */}
      </div>





      <div className="image-container">
        {/* Background Image */}
        <img id="backgroundImage" src="/KailashVidyaDhamBG.jpg" alt="Background" />

        {/* Centered Image */}
        <div className="centered-wrapper">
          <img id="centeredImage" src="/crimson_gold_temple-removebg-preview-removebg-preview.png" alt="Centered" className="centered-image" />
        </div>


        <div className="quotes">
          <div className="heading1">Perform your pooja with the Best group of</div>
          <div className="line1"></div>

          <div className="heading2">
            <div id="protext">Professional&nbsp;</div>
            <div>Purohits & Pandits</div>  
          </div>
        </div>


        <button className="view-services-button">Book Now</button>

        <div className="heading3">
          <img src="/pooja-icon.png" id="poojaicon"></img>
          <div id="heading3_text">
            <div id="counter">125000+</div>
            <div>Poojas Performed</div>
          </div>

          <img src="/vedic-icon.png" id="vedicicon"></img>
          <div id="heading3_text">
            <div>5000+</div>
            <div>Vedic Priests</div>
          </div>

          <img src="/fire-icon.png" id="fireicon"></img>
          <div id="heading3_text">
            <div>600+</div>
            <div>Types of Pooja</div>
          </div>
        </div>
      </div>


      <div className="white-space"></div>
      <div className="crimson-space"></div>
      <div className="maroon-space">
        <p className="footer-text">Kailashvidyadham © 2025. All Rights Reserved.</p>
      </div>

      <div className="chat"
        ><img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp"
          width="40"
          height="40"
        />
        &nbsp;&nbsp;Chat
      </div>
      
    </div>
  );
};

export default App;
