import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-container" style={{ backgroundColor: 'rgb(191, 0, 0)', minHeight: '100vh' }}>
          <Navbar />
          <div className="content-wrap" style={{ backgroundColor: 'rgb(191, 0, 0)' }}>
            <AllRoutes />
          </div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App; 