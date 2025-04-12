import mandir2 from "../assets/images/mandir2.jpg";
import React from "react";
import "./Services.css";

const Services = () => {
  return (

    <div>
      <div className="image-container">
        <div className="gradient-overlay"></div>
      </div>


      <div className="flex flex-col items-center justify-center text-center px-4 py-20 gap-8">

        <h1 className="text-4xl md:text-5xl font-bold text-purple-600">
          Services
        </h1>

        <p className="max-w-2xl text-gray-600 text-lg">
          We are a creative team passionate about building digital products that make a difference.
        </p>

        <p className="max-w-2xl text-gray-600 text-lg">
          Focused on simplicity, design, and results — we help brands elevate their online presence through clean design, thoughtful strategy, and seamless development.
        </p>

      </div>
    </div>
  )
}

export default Services
