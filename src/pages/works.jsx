import React from 'react'
import ReactPlayer from 'react-player';
import Footer2 from '../components/footer2'
import '../assets/videoPlayer.css'
import '../assets/works.css'

function Works() {
  return (
    <div className='works-page'>
      {/* <div className="works-title-container">
        { language === 'EN' ? <h3></h3>  : <h3></h3> }
      </div> */}
      {/* <div className="works-video-container">
        <iframe
          className="works-video"
          src="https://www.youtube.com/embed/_eLLObk5tgY?autoplay=1&mute=1&loop=1&playlist=_eLLObk5tgY"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div> */}
        <div className="video-wrapper" style={{ maxWidth: '100vw', margin: '0 auto' }}>
        <ReactPlayer
          className="react-player"
          url="/MAS_GARGUIER.mov"
          playing={true}
          loop
        />
      </div>
      <div className="works-footer">
        <Footer2/>
      </div>
    </div>
  )
}

export default Works;