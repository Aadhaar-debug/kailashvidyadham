// in index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import mandir2 from "../assets/images/mandir2.jpg";
import photo19 from "../assets/images/photo (19).jpeg";
import photo5 from "../assets/images/photo (5).jpeg";
import photo16 from "../assets/images/photo (16).jpeg";
import React from "react";
import "./Services.css";


import { useEffect } from 'react';

const Services = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ maxHeight: '60vh', overflow: 'hidden' }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={photo5}
            className="d-block w-100"
            alt="Slide 1"
            style={{ objectFit: 'cover', height: '40vh' }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First Slide</h5>
            <p>Some representative placeholder content.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={photo19}
            className="d-block w-100"
            alt="Slide 2"
            style={{ objectFit: 'cover', height: '40vh' }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second Slide</h5>
            <p>Another cool caption.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={photo16}
            className="d-block w-100"
            alt="Slide 3"
            style={{ objectFit: 'cover', height: '40vh' }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third Slide</h5>
            <p>Final caption here.</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Services;
