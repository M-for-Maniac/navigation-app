import VoiceInput from './VoiceInput';
import TextInput from './TextInput';
import EmergencyButton from './EmergencyButton';

function Footer() {
  return (
    <footer className="footer">
      <div className="microphone-icon">
        <img
          src="./assets/images/back.png"
          alt="Go back"
          onClick={() => window.history.back()}
          role="button"
          aria-label="Go back"
        />
      </div>
      <TextInput />
      <EmergencyButton />
      <VoiceInput />
    </footer>
  );
}

export default Footer;