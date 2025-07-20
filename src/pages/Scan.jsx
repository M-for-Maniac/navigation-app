// src/pages/Scan.jsx
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
      setLanguage(detectedLang); // Update context
      setIsScanning(false);
      setShowResult(true);
    }, 3000);
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] text-center p-4">
      <Header />
      <div className="scan-section bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-blue-500 mb-4 text-2xl">{translations[language].scan.title}</h1>
        {!isScanning && !showResult && (
          <>
            <p className="text-base mb-4">{translations[language].scan.instructions}</p>
            <img src="./assets/images/001-scanner.png" alt="Scanner" className="scanner-icon my-6 mx-auto" />
            <button
              onClick={simulateScan}
              className="text-xl bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 focus:outline focus:outline-yellow-400"
              aria-label="Start Scanning"
            >
              {translations[language].scan.scanButton}
            </button>
          </>
        )}
        {isScanning && (
          <div className="scanning-animation text-blue-500 text-xl mt-5">
            {translations[language].scan.scanningAnimation}
          </div>
        )}
        {showResult && (
          <div className="scanned-result flex flex-col items-center mt-5">
            <img
              src="/assets/images/WhatsApp Image 2025-02-16 at 12.11.16 PM.jpeg"
              alt="Scanned Document"
              className="scannedDoc w-[30%] mb-5"
            />
            <button
              onClick={() => navigate('/guest')}
              className="proceed-button text-xl bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline focus:outline-yellow-400"
              aria-label="Proceed"
            >
              {translations[language].scan.proceedButton}
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Scan;