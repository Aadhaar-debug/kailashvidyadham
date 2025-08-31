import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

import Services from '../pages/Services';
import ServiceDetails from '../pages/ServiceDetails';
import BookingDetails from '../pages/BookingDetails';
import Contact from '../pages/Contact';
import Donations from '../pages/Donations';
import ScripturesLibrary from '../pages/ScripturesLibrary';
import Vedas from '../pages/Vedas';
import BhagavadGita from '../pages/BhagavadGita';
import Puranas from '../pages/Puranas';
import GitaScriptures from '../pages/GitaScriptures';
import BhagavadGitaDetail from '../pages/BhagavadGitaDetail';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<BookingDetails />} />

      <Route path="/scriptures-library" element={<ScripturesLibrary />} />
      <Route path="/scriptures/gita" element={<GitaScriptures />} />
      <Route path="/scriptures/gita/bhagavad-gita" element={<BhagavadGitaDetail />} />
      <Route path="/vedas" element={<Vedas />} />
      <Route path="/bhagavad-gita" element={<BhagavadGita />} />
      <Route path="/puranas" element={<Puranas />} />
      
      {/* Put dynamic route before static route */}
      <Route path="/services/:serviceId" element={<ServiceDetails />} />
      <Route path="/services" element={<Services />} />
      
      <Route path="/contact" element={<Contact />} />
      <Route path="/donations" element={<Donations />} />
    </Routes>
  );
};

export default AllRoutes; 