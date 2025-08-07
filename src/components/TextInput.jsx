// src/components/TextInput.jsx
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../utils/LanguageContext';
import { VideoContext } from '../utils/VideoContext';
import { handleVoiceCommand } from '../utils/speech';
import { translations } from '../utils/translations'; // Ensure correct path

function TextInput() {
  const { language } = useContext(LanguageContext);
  const { setVideo, resetVideo } = useContext(VideoContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const textInput = e.target.querySelector('input').value;
    if (textInput) {
      handleVoiceCommand(textInput, language, navigate, setVideo, resetVideo);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-prompt">
      <input
        id="textInput"
        type="text"
        placeholder={translations[language]?.footer?.textInput || 'Enter your command'}
        aria-label="Enter your command"
      />
    </form>
  );
}

export default TextInput;