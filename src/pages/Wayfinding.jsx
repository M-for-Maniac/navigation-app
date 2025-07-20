import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LanguageContext } from '../utils/LanguageContext';
import { VideoContext } from '../utils/VideoContext';
import { translations } from '../utils/translations';

function Wayfinding() {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const { video, setVideo, resetVideo } = useContext(VideoContext);
  const videoRef = useRef(null);

  const playPreview = (videoFile) => {
    console.log('Playing video:', videoFile);
    resetVideo();
    setVideo({ src: videoFile, isVisible: true });
  };

  // Auto-scroll to video when it opens
  useEffect(() => {
    if (video.isVisible && video.src && videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [video.src, video.isVisible]);

  return (
    <div className="container">
      <Header />
      <main>
        <h1 className="welcome-section">{translations[language].wayfinding.title}</h1>
        <div className="destination-buttons">
          <button
            id="destination1"
            onClick={() => playPreview('./assets/video/departure.mp4')}
            aria-label="Navigate to Gate A"
          >
            {translations[language].wayfinding.destination1}
          </button>
          <button
            id="destination2"
            onClick={() => playPreview('./assets/video/departure.mp4')}
            aria-label="Navigate to Gate B"
          >
            {translations[language].wayfinding.destination2}
          </button>
          <button
            id="destination3"
            onClick={() => playPreview('./assets/video/info.mp4')}
            aria-label="Navigate to Information Desk"
          >
            {translations[language].wayfinding.destination3}
          </button>
          <button
            id="destination4"
            onClick={() => playPreview('./assets/video/exit.mp4')}
            aria-label="Navigate to Exit"
          >
            {translations[language].wayfinding.destination4}
          </button>
        </div>
        {video.isVisible && video.src ? (
          <video
            ref={videoRef}
            key={video.src}
            id="previewVideo"
            controls
            autoPlay
            aria-label="Video preview for selected destination"
            onError={(e) => console.error('Video error:', e)}
          >
            <source id="videoSource" src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : video.isVisible ? (
          <div className="video-loading">Loading video...</div>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}

export default Wayfinding;