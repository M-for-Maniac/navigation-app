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
    <div className="container flex flex-col items-center justify-center min-h-[70vh] text-center p-4">
      <Header />
      <div className="welcome-section bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-blue-500 mb-4 text-2xl">{translations[language].guest.welcomeTitle}</h1>
        <p className="text-base mb-4">{translations[language].guest.welcomeText}</p>
        <div className="functionalities flex flex-col gap-3">
          <button
            onClick={() => navigate('/wayfinding')}
            className="text-xl bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 focus:outline focus:outline-yellow-400"
            aria-label="Go to Wayfinding"
          >
            {translations[language].guest.wayfindingButton}
          </button>
          <button
            onClick={() => navigate('/services')}
            className="text-xl bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 focus:outline focus:outline-yellow-400"
            aria-label="Go to Services"
          >
            {translations[language].guest.servicesButton}
          </button>
          <button
            onClick={() => navigate('/faq')}
            className="text-xl bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 focus:outline focus:outline-yellow-400"
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