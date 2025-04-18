import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ReactPlayer from 'react-player/vimeo';
import '../assets/films.css'
import '../assets/portfolio.css'

function Portfolio() {
  const { language } = useLanguage();

  return (
    <div className="portfolio-page">
      <div className='portfolio-title-container'>
        <h1>Portfolio</h1>
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
            "Démo 2024"
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
            "À l'aube de Sumer - Sélection Short film corner Cannes 2019"
          : "À l'aube de Sumer - Cannes 2019 Short Film Corner selection"
          }
        </div>
      </div>
      {/* <div className="photo-part">
        { language === 'EN' ? <h1>Galerie photo</h1> : <h1>Photo gallery</h1> }
        <Grid />
      </div> */}
    </div>
  )
}

export default Portfolio;