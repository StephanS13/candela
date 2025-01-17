import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ReactPlayer from 'react-player/vimeo';
import '../assets/films.css'



function Films() {
  const { language } = useLanguage();

  return (
    <div>
      <div className="films-hero">
       <h1>FILMS</h1>
      </div>
      <div className='films-container'>
        <ReactPlayer 
          url='https://vimeo.com/1046688487?share=copy#t=0' 
          width='80%'
          height='80%'
          controls={true} 
          className='films-item'
          config={{
            vimeo: {
              playerOptions: {
                title: true
              }}
          }}
        />
        <div className="custom-title">
          { language === 'EN' ?
            "SHOWREEL24"
          : "SHOWREEL24"
          }
        </div>
        <ReactPlayer 
          url='https://vimeo.com/333199602' 
          width='80%'
          height='80%'
          controls={true} 
          className='films-item'
          config={{
            vimeo: {
              playerOptions: {
                title: true
              }}
          }}
        />
        <div className="custom-title">
          { language === 'EN' ?
            "Sélection Short film corner Cannes 2019"
          : "Cannes 2019 Short Film Corner selection"
          }
        </div>
      </div>
    </div>
    
  )
}

export default Films
