// src/App.jsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './utils/LanguageContext';
import { VideoProvider } from './utils/VideoContext';
import Home from './pages/Home';
import Scan from './pages/Scan';
import Guest from './pages/Guest';
import Wayfinding from './pages/Wayfinding';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import './styles/output.css';

function App() {
  return (
    <LanguageProvider>
      <VideoProvider>
        <Router>
          <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/scan" element={<Scan />} />
              <Route path="/guest" element={<Guest />} />
              <Route path="/wayfinding" element={<Wayfinding />} />
              <Route path="/services" element={<Services />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </div>
        </Router>
      </VideoProvider>
    </LanguageProvider>
  );
}

export default App;