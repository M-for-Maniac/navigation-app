// src/utils/VideoContext.jsx
import { createContext, useState } from 'react';

// Named export for the context
export const VideoContext = createContext();

// Named export for the provider
export function VideoProvider({ children }) {
  const [video, setVideo] = useState({ src: null, isVisible: false });

  const resetVideo = () => {
    console.log('Resetting video state');
    setVideo({ src: null, isVisible: false });
  };

  return (
    <VideoContext.Provider value={{ video, setVideo, resetVideo }}>
      {children}
    </VideoContext.Provider>
  );
}