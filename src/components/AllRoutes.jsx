import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Donations from '../pages/Donations';
import ScripturesLibrary from '../pages/ScripturesLibrary';
import Vedas from '../pages/Vedas';
import BhagavadGita from '../pages/BhagavadGita';
import Puranas from '../pages/Puranas';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/scriptures-library" element={<ScripturesLibrary />} />
      <Route path="/vedas" element={<Vedas />} />
      <Route path="/bhagavad-gita" element={<BhagavadGita />} />
      <Route path="/puranas" element={<Puranas />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donations" element={<Donations />} />
    </Routes>
  );
};

export default AllRoutes; 