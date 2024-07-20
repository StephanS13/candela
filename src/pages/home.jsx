import React from 'react'
import CarouselComponent from '../components/carousel-self.jsx'
import VideoPlayer from '../components/videoplayer.js'
import '../assets/home.css'

function Home() {
  return (
    <div className="home-container">
      <VideoPlayer/>
    </div>
  )
}

export default Home;