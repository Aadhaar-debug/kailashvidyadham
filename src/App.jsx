import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './components/ServiceDetails';
import Contact from './pages/Contact';
import Chat from './components/chat';
import MoveToTop from './components/movetotop';
import Footer from './components/Footer';

// 🆕 Admin components
import Admin from './pages/Admin';

// Import service categories data
import { serviceCategories } from './data/services';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <div className="content-wrap">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services serviceCategories={serviceCategories} />} />
            <Route path="/services/:serviceId" element={<ServiceDetails serviceCategories={serviceCategories} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>

        <MoveToTop />
        <Chat />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
