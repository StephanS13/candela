import React from 'react';
import '../assets/videoPlayer.css';

const VideoPlayer = () => {
  return (
    <video 
      className="video-background" 
      autoPlay 
      muted 
      loop 
      playsInline
    >
      <source src="SLIDESHOW2024.mov" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
