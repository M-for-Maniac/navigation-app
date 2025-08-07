// src/components/Footer.jsx
import VoiceInput from './VoiceInput';
import TextInput from './TextInput';
import EmergencyButton from './EmergencyButton';

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="back-button">
        <img
          src="./assets/images/back.png" // Updated path
          alt="Go back"
          onClick={() => window.history.back()}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.history.back();
            }
          }}
          aria-label="Go back to previous page"
          className="cursor-pointer w-10 h-10 bg-transparent"
          onError={(e) => {
            console.error('Failed to load /images/back.png');
            e.target.src = '/images/placeholder.png'; // Fallback image
          }}
        />
      </div>
      <TextInput />
      <EmergencyButton />
      <VoiceInput />
    </footer>
  );
}

export default Footer;