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
            <p>Fort d'une solide expérience de cadreur/monteur (M6, Orange TV...) et de réalisateur, dont plusieurs courts-métrages sélectionnés en festival, je mets à profit mes compétences au service de votre projet.</p>

            <ul>
              <li>- communication, publicité, institutionnel</li>
              <li>- évènementiel (mariages, baptêmes, soirées privées...)</li>
              <li>- création de contenus</li>
            </ul>

            <br />

            <p>Également pilote de drone certifié, je suis à votre disposition pour toutes prises de vue aérienne.</p>

            <p>Contactez moi pour un devis.</p>
          </>
          
          :
          <>
            {/* <p>With a solid background as a camera operator/editor (M6, Orange TV...) and director, including several short films selected in festivals, I am willing to apply my skills to your project.</p> */}
            <p>Experienced camera operator and editor (M6, Orange TV, and more) with a strong background in directing, including short films recognized at festivals. I am eager to bring my expertise to your projects.</p>

            <ul>
              <li>- communication, advertising, institutional</li>
              <li>- events (weddings, baptisms, private parties, etc.)</li>
              <li>- content creation</li>
            </ul>

            <br />

            <p>Furthermore, as a certified drone pilot, I am equipped to capture high-quality aerial footage for a variety of projects.</p>

            <p>Please contact me for a quote.</p>
          </>       
        }
        
      </div>
      {<Footer2/>}
    </div>
  )
}

export default About