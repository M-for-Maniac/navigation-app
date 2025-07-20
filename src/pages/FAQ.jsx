import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LanguageContext } from '../utils/LanguageContext';
import { translations } from '../utils/translations';

function FAQ() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] text-center p-4">
      <Header />
      <main>
        <h1 className="text-blue-500 mb-4 text-2xl">{translations[language].faq.faqTitle}</h1>
        <div className="faq-list list-none p-0">
          <div className="faq-item my-4">
            <h2 className="text-xl font-bold">{translations[language].faq.faq1}</h2>
            <p>{translations[language].faq.faqAnswer1}</p>
          </div>
          <div className="faq-item my-4">
            <h2 className="text-xl font-bold">{translations[language].faq.faq2}</h2>
            <p>{translations[language].faq.faqAnswer2}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FAQ;