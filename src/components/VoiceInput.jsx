// src/components/VoiceInput.jsx
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../utils/LanguageContext';
import { VideoContext } from '../utils/VideoContext';
import { startVoiceRecognition } from '../utils/speech';

function VoiceInput() {
  const { language } = useContext(LanguageContext);
  const { setVideo, resetVideo } = useContext(VideoContext);
  const navigate = useNavigate();

  return (
    <div className="microphone-icon">
      <img
        src="./assets/images/002-microphone-black-shape.png"
        alt="Microphone"
        className="w-10 h-10 cursor-pointer"
        onClick={() => startVoiceRecognition(language, navigate, setVideo, resetVideo)}
        role="button"
        aria-label="Start voice recognition"
      />
    </div>
  );
}

export default VoiceInput;