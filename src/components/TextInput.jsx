// src/components/TextInput.jsx
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../utils/LanguageContext';
import { VideoContext } from '../utils/VideoContext';
import { translations } from '../utils/translations';
import { handleVoiceCommand } from '../utils/speech';

function TextInput() {
  const { language } = useContext(LanguageContext);
  const { setVideo, resetVideo } = useContext(VideoContext);
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleVoiceCommand(e.target.value, language, navigate, setVideo, resetVideo);
    }
  };

  return (
    <div className="text-prompt">
      <input
        type="text"
        id="textInput"
        placeholder={translations[language].footer.textInput}
        className="w-full p-2 text-base border-2 border-gray-300 rounded-md"
        onKeyPress={handleKeyPress}
        aria-label="Enter your command"
      />
    </div>
  );
}

export default TextInput;