import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LanguageContext } from '../utils/LanguageContext';
import { translations } from '../utils/translations';

function Home() {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] text-center p-4">
      <Header />
      <div className="login-section bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-blue-500 mb-4 text-3xl">{translations[language].index.title}</h1>
        <div className="login-buttons flex flex-col gap-3">
          <button
            onClick={() => navigate('/scan')}
            className="text-xl bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 focus:outline focus:outline-yellow-400"
            aria-label="Login with ID Card"
          >
            {translations[language].index.scanButton}
          </button>
          <button
            onClick={() => navigate('/guest')}
            className="text-xl bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 focus:outline focus:outline-yellow-400"
            aria-label="Login as Guest"
          >
            {translations[language].index.guestButton}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;