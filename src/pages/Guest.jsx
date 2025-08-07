import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LanguageContext } from '../utils/LanguageContext';
import { translations } from '../utils/translations';

function Guest() {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  return (
    <div className="container flex flex-col items-center justify-center text-center p-4">
      <Header />
      <div className="welcome-section">
        <h1 className="text-blue-500 mb-4 text-2xl">{translations[language].guest.welcomeTitle}</h1>
        <p className="text-base mb-4">{translations[language].guest.welcomeText}</p>
        <div className="functionalities flex flex-col gap-3">
          <button
            onClick={() => navigate('/wayfinding')}
            aria-label="Go to Wayfinding"
          >
            {translations[language].guest.wayfindingButton}
          </button>
          <button
            onClick={() => navigate('/services')}
            aria-label="Go to Services"
          >
            {translations[language].guest.servicesButton}
          </button>
          <button
            onClick={() => navigate('/faq')}
            aria-label="Go to FAQs"
          >
            {translations[language].guest.faqButton}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Guest;