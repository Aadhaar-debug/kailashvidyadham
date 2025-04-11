import React from "react";
import "./Home.css";
import banner from "../assets/images/kailashbanner.png";
import templeImage from '../assets/images/crimson_gold_temple.png';
import logo from "../assets/images/crimson_gold_temple.png";  
import fireicon from "../assets/images/fire-icon.png";  
import vedicicon from "../assets/images/vedic-icon.png";  
import poojaicon from "../assets/images/pooja-icon.png";  
import accomodation from "../assets/images/Accomodation.png";  
import prasaddaan from "../assets/images/Prasaddaan.png";  
import seva from "../assets/images/seva.png";  
import donation from "../assets/images/donation.png";  

const Home = () => {
  return (

    <div>
      <div className="home-container"style={{ backgroundImage: `url(${banner})` , height : '90vh'}}>
        <div className="home-content">
          <img src={logo} alt="Logo" className="banner-logo" />

          <h3 style={{marginTop : '2vh'}}>Perform your pooja with the Best group of</h3>
          <div className="dividingline"></div>
          <h1 style={{color :'rgb(191,0,0)'}}>Professional Purohits & Pandits</h1>

          <button className="banner-button">Book Now</button>
      </div>
      
      <div className="progressicons">
            <div style={{display : 'flex'}}>
              <img src={fireicon} alt="fireicon" className="progressicon1" />
              <div style={{display : 'flex' , flexDirection : 'column'}}>
                <div><h3>125000+</h3></div>
                <div className="progressiontitle"><h3>Poojas Performed</h3></div>
              </div>
            </div>
            <div style={{display : 'flex'}}>
              <img src={vedicicon} alt="vedicicon" className="progressicon2" />
              <div style={{display : 'flex' , flexDirection : 'column'}}>
                <div><h3>600+</h3></div>
                <div className="progressiontitle"><h3>Vedic Priests</h3></div>
              </div>
            </div>
            <div style={{display : 'flex'}}>
              <img src={poojaicon} alt="poojaicon" className="progressicon3" />
              <div style={{display : 'flex' , flexDirection : 'column'}}>
                <div><h3>5000+</h3></div>
                <div className="progressiontitle"><h3>Types of Poojas</h3></div>
              </div>
            </div>
      </div>
    </div> 



    <div className="maincontainer2">
      <div className="mainmaincontainer2-1">
        <div className="onlineformandnewscontainer">
          <div className="newscontainer">
            <div className="newscontent">
              <div style={{color : 'gold' , fontSize  :'25px' , fontWeight: '700'}}>
                  <ul><h5 style={{fontSize : '25px'}}>What's New</h5></ul>
                  <ul style={{marginTop : '0vh', fontSize : '15px', width :'35vh'}}><p>- Morning Daily Pooja Timing shifted from 9AM to 7AM in the morning</p></ul>
                  <ul style={{marginTop : '-1vh', fontSize : '15px', width :'35vh'}}><p>- Devotee Service actions live now</p></ul>
                  <ul style={{marginTop : '-1vh', fontSize : '15px', width :'35vh'}}><p>- Devotee Accommodations available now</p></ul>
                  <ul style={{marginTop : '-1vh', fontSize : '15px', width :'35vh'}}><p>- Temple Premises Under CCTV Surveillance 24x7</p></ul>
                  <ul style={{marginTop : '-1vh', fontSize : '15px', width :'35vh'}}><p>- Special Maha Aarti Event Scheduled on Sunday Evening</p></ul>
                  <ul style={{marginTop : '-1vh', fontSize : '15px', width :'35vh'}}><p>- Online Donations & Offerings Portal is Live Now</p></ul>
              </div>
            </div>
          </div>
          <div className="onlineformcontainer">
            <div className="onlineform">
              <div style={{color : 'rgb(191,0,0)' , fontSize  :'25px' , fontWeight: '700'}}>
                <div style={{marginLeft : '2vh' , marginTop : '-1vh' , marginBottom : '1vh'}}>Apply Online</div>
                <form className="online-form">
                  <input type="text" placeholder="Your Name" required />

                  <input type="email" placeholder="Your Email" required />

                  <input type="tel" placeholder="Your Phone" required />

                  <input type="text" placeholder="Booking To and From Date" required />

                  <input type="text" placeholder="Pooja Category / Message" required />

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop:'10vh',fontSize: '40px',color: 'gold' ,display:'flex', alignItems:'center', justifyContent:'center'}}>Devotee Services</div>

        <div className="devoteeservices">
          <div style={{ width: '80%', margin: 'auto', marginTop: '5vh' }}>
            <div className="row justify-content-center" style={{ rowGap: '10%' }}>

              <div className="col-md-2 mb-4">
                <div className="card" >
                  <img className="card-img-top" src={accomodation} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card Title 1</h5>
                    <p className="card-text">Some content here...</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>

              <div className="col-md-2 mb-4">
                <div className="card">
                  <img className="card-img-top" src={accomodation} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card Title 2</h5>
                    <p className="card-text">Some content here...</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>

              <div className="col-md-2 mb-4">
                <div className="card">
                  <img className="card-img-top" src={accomodation} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card Title 3</h5>
                    <p className="card-text">Some content here...</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>

              <div className="col-md-2 mb-4">
                <div className="card">
                  <img className="card-img-top" src={accomodation} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card Title 5</h5>
                    <p className="card-text">Some content here...</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>






      </div>
    </div>



    </div>
  );
};

export default Home;
