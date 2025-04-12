import React from "react";

const Footer = () => {
  return (
    <footer style={{ height: "130vh", display: "flex", flexDirection: "column" }}>
      {/* First Part */}
      <div
        style={{
          height: "30vh",
          display: "flex",
          justifyContent: "center",
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
        </div>


        <div style={{
          height : '20vh',
          width : '0.3vh',
          backgroundColor : 'white',
          marginLeft : '15vh',
          marginRight : '15vh',
        }}>

        </div>


        <div>
          <h3>Subscribe to Our Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: "10px",
                marginRight: "0px",
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
          <h3>Donations</h3>
          <p>Overview</p>
          <p>e-Hundi</p>
          <p>AnnaPrasadam Trust</p>
          <p>Agama Patasala Trust</p>
          <p>GoSamrakshana Trust</p>
          <p>Pranadana Trust</p>
          <p>Srisaila TV</p>
          <p>Swachh Srisailam</p>
        </div>
        <div>
          <h3>Online Booking</h3>
          <p>Overview</p>
          <p>Pratyaksha Seva Booking</p>
          <p>Paroksha Seva Booking</p>
          <p>Darshanam Tickets</p>
          <p>Donations</p>
          <p>Accommodation</p>
          <p>Publications</p>
        </div>
        <div>
          <h3>Locations</h3>
          <p>Jammu</p>
          <p>Maharashtra</p>
          <p>Bengaluru</p>
          <p>Rishikesh</p>
          <p>Haridwar</p>
          <p>Dharamshala</p>
        </div>
        <div>
          <h3>Support</h3>
          <p>FAQ's</p>
          <p>Facilities to Pilgrims</p>
          <p>Connectivity</p>
          <p>Contact Us</p>
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
        <p style={{marginTop : '2vh'}}>&copy; {new Date().getFullYear()} Kailash Vidyadham. All rights reserved.</p>
        
      </div>

      {/* Third Part */}
      <div
        style={{
          height: "0.5vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(216, 205, 205)",
          padding: "20px",
        }}
      >
        <p style={{marginTop : '2vh'}}> Site Developed By Pingfence</p>
        
      </div>
    </footer>
  );
};

export default Footer;