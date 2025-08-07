import { useContext } from 'react';
import { LanguageContext } from '../utils/LanguageContext';

function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  const languages = [
    { code: 'en', flag: './assets/images/002-uk.png', alt: 'English' },
    { code: 'fa', flag: './assets/images/003-world.png', alt: 'فارسی' },
    { code: 'ar', flag: './assets/images/001-flag.png', alt: 'العربية' },
  ];

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('selectedLanguage', lang);
  };

  const handleKeyPress = (e, lang) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleLanguageChange(lang);
    }
  };

  return (
    <div
      className="language-selector flex items-center bg-white border-2 border-blue-500 rounded-md p-1.5"
      role="listbox"
      aria-label="Select language"
    >
      {languages.map(({ code, flag, alt }) => (
        <img
          key={code}
          src={flag}
          alt={alt}
          className={`w-6 h-6 mx-1.5 rounded-full border-2 transition-colors cursor-pointer ${
            language === code ? 'border-blue-500' : 'border-transparent'
          }`}
          onClick={() => handleLanguageChange(code)}
          onKeyDown={(e) => handleKeyPress(e, code)}
          role="option"
          aria-selected={language === code}
          tabIndex={0}
        />
      ))}
    </div>
  );
}

export default LanguageSelector;