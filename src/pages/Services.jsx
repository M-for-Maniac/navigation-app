import { useContext, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LanguageContext } from '../utils/LanguageContext';
import { VideoContext } from '../utils/VideoContext';
import { translations } from '../utils/translations';

function Services() {
  const { language } = useContext(LanguageContext);
  const { video, setVideo, resetVideo } = useContext(VideoContext);
  const videoRef = useRef(null);

  const playPreview = (videoFile) => {
    console.log('Playing video:', videoFile);
    resetVideo();
    setVideo({ src: videoFile, isVisible: true });
  };

  useEffect(() => {
    if (video.isVisible && video.src && videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [video.src, video.isVisible]);

  return (
    <div className="container flex flex-col items-center justify-center text-center p-4">
      <Header />
      <main className="welcome-section">
        <h1 className="text-blue-500 mb-4 text-2xl">{translations[language].services.serviceTitle}</h1>
        <div className="destination-buttons">
          <button
            id="service1"
            onClick={() => playPreview('./assets/video/wheelchair.mp4')}
            aria-label="Request Wheelchair"
          >
            {translations[language].services.service1}
          </button>
          <button
            id="service2"
            onClick={() => playPreview('./assets/video/pray.mp4')}
            aria-label="Navigate to Prayer Room"
          >
            {translations[language].services.service2}
          </button>
          <button
            id="service3"
            onClick={() => playPreview('./assets/video/police.mp4')}
            aria-label="Contact Police"
          >
            {translations[language].services.service3}
          </button>
          <button
            id="service4"
            onClick={() => playPreview('./assets/video/restroom.mp4')}
            aria-label="Navigate to Restroom"
          >
            {translations[language].services.service4}
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

export default Services;