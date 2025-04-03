import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Footer2 from '../components/footer2.jsx'
import '../assets/about.css'

function About() {
  const { language } = useLanguage();

  return (
    <div className='about-page'>
      <div className='about-title-container'>
        <h1>Frederic Simcic</h1>
        { language === 'EN' ? 
          <h3>Videaste | Pilote de drone</h3>
          :
          <h3>Videographer | Drone pilot</h3>         
        }
        
      </div>
      <div className="about-text-container">
        { language === 'EN' ? 
          <>
            <p>Passionné par l'image depuis mon plus jeune âge, j'ai pu explorer les diverses facettes de production d'un film via mon parcours professionnel et mon expérience personnel, en commençant comme monteur au sein de plusieurs chaines de télévision (M6, France TV...) puis tour à tour, projectionniste, distributeur de films, pilote de drone certifié, tout en réalisant divers projets personnels en parallèle, notamment des courts-métrages que j'ai écrit, produit et réalisé, dont certains sélectionnés en festival (Cannes, Clermont-Ferrand).
            </p>
            <p>A présent, je mets à profit mes compétences pour réaliser vos projets ; que ce soit pour promouvoir votre entreprise ou capter un événement (concerts, théâtre, mariage et autres), je m'adapte à votre demande.</p>
          </>
          
          :
          <>
            {/* <p>With a solid background as a camera operator/editor (M6, Orange TV...) and director, including several short films selected in festivals, I am willing to apply my skills to your project.</p> */}
            <p>Passionate about imagery from a young age, I have explored various aspects of film production through my professional career and personal experience. I started as an editor for several television channels (M6, France TV…) before taking on roles as a projectionist, film distributor, and certified drone pilot, all while working on personal projects in parallel. These include short films that I have written, produced, and directed, some of which have been selected at festivals such as Cannes and Clermont-Ferrand.</p>
            <p>Now, I put my skills to work to bring your projects to life. Whether it’s promoting your business or capturing an event (concerts, theater, weddings, and more), I adapt to your needs.</p>
          </>       
        }
        
      </div>
      {<Footer2/>}
    </div>
  )
}

export default About