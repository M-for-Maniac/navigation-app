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
        src="./assets/images/002-microphone-black-shape.png" // Updated path
        alt="Microphone"
        className="w-10 h-10 cursor-pointer bg-transparent"
        onClick={() => startVoiceRecognition(language, navigate, setVideo, resetVideo)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            startVoiceRecognition(language, navigate, setVideo, resetVideo);
          }
        }}
        aria-label="Start voice recognition"
        onError={(e) => {
          console.error('Failed to load /images/002-microphone-black-shape.png');
          e.target.src = '/images/placeholder.png'; // Fallback image
        }}
      />
    </div>
  );
}

export default VoiceInput;