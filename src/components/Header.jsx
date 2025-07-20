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
      <div className="logo" onClick={handleHomeClick} role="button" aria-label="Return to home">
        <img src={`${process.env.PUBLIC_URL}/assets/images/Artino.svg`} alt="Company Logo" />
      </div>
      <LanguageSelector />
    </header>
  );
}

export default Header;