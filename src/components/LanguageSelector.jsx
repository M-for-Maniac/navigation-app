// src/components/LanguageSelector.jsx
import { useContext } from 'react';
import { LanguageContext } from '../utils/LanguageContext';

function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  const languages = [
    { code: 'en', flag: '/assets/images/002-uk.png', alt: 'English' },
    { code: 'fa', flag: '/assets/images/003-world.png', alt: 'فارسی' },
    { code: 'ar', flag: '/assets/images/001-flag.png', alt: 'العربية' },
  ];

  const handleLanguageChange = (lang) => {
    setLanguage(lang); // Update context
    localStorage.setItem('selectedLanguage', lang); // Persist to localStorage
  };

  return (
    <div className="language-selector flex items-center bg-white border-2 border-blue-500 rounded-md p-1.5 cursor-pointer">
      {languages.map(({ code, flag, alt }) => (
        <img
          key={code}
          src={flag}
          alt={alt}
          className={`w-6 h-6 mx-1.5 rounded-full border-2 transition-colors ${
            language === code ? 'border-blue-500' : 'border-transparent'
          }`}
          onClick={() => handleLanguageChange(code)}
          role="button"
          aria-label={`Select ${alt} language`}
        />
      ))}
    </div>
  );
}

export default LanguageSelector;