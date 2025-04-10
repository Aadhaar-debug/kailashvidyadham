import React from "react";
import "./Home.css";
import banner from "../assets/images/kailashbanner.png";

const Home = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="home-content">
        <h1>Welcome to Kailash Vidyadham</h1>
        <p>Spiritual. Peaceful. Divine. Sacred. Eternal.</p>
        <button className="banner-button">Contact Us</button>
      </div>
    </div>
  );
};

export default Home;
