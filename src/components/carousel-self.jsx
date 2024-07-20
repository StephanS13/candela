import React from 'react'
import { Player } from 'video-react';
// import "node_modules/video-react/dist/video-react.css";


function CarouselComponent() {
  return (

    <Player
      className="slide-container"
      playsInline 
      fluid 
      autoPlay 
      preload="auto"
      src="SLIDESHOW2024.mov"
    />
  )
}

export default CarouselComponent