import React from "react";
import "./Home.css";
import banner from "../assets/images/kailashbanner.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>

      <div className="home-content">
        {/* Your Home Page Content */}
      </div>
    </div>
  );
};

export default Home;
