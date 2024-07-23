import React from 'react'
import ReactPlayer from 'react-player/vimeo';
import '../assets/films.css'



function Films() {
  return (
    <div>
      <div className="films-hero">
       <h1>FILMS</h1>
      </div>
      <div className='films-container'>
        <ReactPlayer 
          url='https://vimeo.com/988278918' 
          width='80%'
          height='80%'
          controls={true} 
        />
      </div>
    </div>
    
  )
}

export default Films
