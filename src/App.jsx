import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';

import Services from './pages/Services';
import ServiceDetails from './components/ServiceDetails';
import Contact from './pages/Contact';
import Donations from './pages/Donations';
import ScripturesLibrary from './pages/ScripturesLibrary';
import Vedas from './pages/Vedas';
import BhagavadGita from './pages/BhagavadGita';
import Puranas from './pages/Puranas';
import GitaScriptures from './pages/GitaScriptures';
import BhagavadGitaDetail from './pages/BhagavadGitaDetail';
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

            <Route path="/services" element={<Services serviceCategories={serviceCategories} />} />
            <Route path="/services/:serviceId" element={<ServiceDetails serviceCategories={serviceCategories} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/admin" element={<Admin />} />
            
            {/* Scriptures Routes */}
            <Route path="/scriptures-library" element={<ScripturesLibrary />} />
            <Route path="/scriptures/gita" element={<GitaScriptures />} />
            <Route path="/scriptures/gita/bhagavad-gita" element={<BhagavadGitaDetail />} />
            <Route path="/vedas" element={<Vedas />} />
            <Route path="/bhagavad-gita" element={<BhagavadGita />} />
            <Route path="/puranas" element={<Puranas />} />
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
