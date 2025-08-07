// src/components/Scan.jsx
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LanguageContext } from '../utils/LanguageContext';
import { translations, detectLanguageFromScan } from '../utils/translations';

function Scan() {
  const navigate = useNavigate();
  const { language, setLanguage } = useContext(LanguageContext);
  const [isScanning, setIsScanning] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const simulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      const detectedLang = detectLanguageFromScan();
      setLanguage(detectedLang);
      setIsScanning(false);
      setShowResult(true);
    }, 3000);
  };

  return (
    <div className="container flex flex-col items-center justify-center text-center p-4">
      <Header />
      <div className="scan-section">
        <h1 className="text-blue-500 mb-4 text-2xl">{translations[language]?.scan?.title || 'Scan Your ID Card'}</h1>
        {!isScanning && !showResult && (
          <div className="scanned-result flex flex-col items-center mt-5">
            <p className="text-base mb-4">{translations[language]?.scan?.instructions || 'Please place your ID card on the scanner below to log in.'}</p>
            <img
              src="./assets/images/scanner.png" // Updated path
              alt="Scanner"
              className="scannedDoc w-[20%] mb-5"
              onError={(e) => {
                console.error('Failed to load /images/001-scanner.png');
                e.target.src = '/images/placeholder.png';
              }}
            />
            <button
              onClick={simulateScan}
              aria-label="Start Scanning"
            >
              {translations[language]?.scan?.scanButton || 'Start Scanning'}
            </button>
          </div>
        )}
        {isScanning && (
          <div className="scanning-animation text-blue-500 text-xl mt-5 flex justify-center">
            {translations[language]?.scan?.scanningAnimation || 'Scanning, please wait...'}
          </div>
        )}
        {showResult && (
          <div className="scanned-result flex flex-col items-center mt-5">
            <img
              src="./assets/images/scan.png" // Updated path
              alt="Scanned Document"
              className="scannedDoc w-[20%] mb-5"
              onError={(e) => {
                console.error('Failed to load /images/WhatsApp Image 2025-02-16 at 12.11.16 PM.jpeg');
                e.target.src = '/images/placeholder.png';
              }}
            />
            <button
              onClick={() => navigate('/guest')}
              aria-label="Proceed"
            >
              {translations[language]?.scan?.proceedButton || 'Proceed'}
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Scan;