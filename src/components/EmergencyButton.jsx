import { useContext } from 'react';
import { LanguageContext } from '../utils/LanguageContext';
import { translations } from '../utils/translations';

function EmergencyButton() {
  const { language } = useContext(LanguageContext);

  const handleEmergency = () => {
    alert('Emergency assistance requested (placeholder functionality).');
  };

  return (
    <div className="emergency-button">
      <button
        onClick={handleEmergency}
        className="bg-red-500 text-white text-lg px-4 py-2 rounded-md hover:bg-red-600 focus:outline focus:outline-yellow-400"
        aria-label="Request emergency assistance"
      >
        {translations[language].footer.emergencyButton}
      </button>
    </div>
  );
}

export default EmergencyButton;