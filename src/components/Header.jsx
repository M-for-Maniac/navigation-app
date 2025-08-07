// src/components/Header.jsx
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { VideoContext } from '../utils/VideoContext';
import LanguageSelector from './LanguageSelector';

function Header() {
  const navigate = useNavigate();
  const { resetVideo } = useContext(VideoContext);

  const handleHomeClick = () => {
    resetVideo();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleHomeClick} aria-label="Return to home">
        <img
          src="./assets/images/Inoway.png" // Updated path
          alt="Company Logo"
          className="bg-transparent"
          onError={(e) => {
            console.error('Failed to load /images/Inoway.png');
            e.target.src = '/images/placeholder.png'; // Fallback image
          }}
        />
      </div>
      <LanguageSelector />
    </header>
  );
}

export default Header;