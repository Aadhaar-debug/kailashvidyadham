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


      
      <div className="crimson-space"></div>
      <div className="maroon-space">
        <p className="footer-text">Kailashvidyadham © 2025. All Rights Reserved.</p>
      </div>

      <div className="chat"
        ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
      </svg>
        &nbsp;&nbsp;Chat
      </div>
      
    </div>
  );
};

export default App;
