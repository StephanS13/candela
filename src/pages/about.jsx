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
            <p>Passionné par l’image depuis plus de dix ans, j’ai débuté en tant que monteur au sein de plusieurs chaînes de télévision (M6, France TV…) avant de me consacrer pleinement à la réalisation.
            Mon troisième court-métrage, réalisé en 2019, a été sélectionné au Festival de Cannes.
            De l’écriture à la finalisation, chacun de mes projets est produit avec une approche artisanale et exigeante.
            Je suis également pilote de drone certifié, ce qui me permet d’enrichir mes productions avec des prises de vue aériennes de qualité.
            </p>
            <p>Que ce soit pour promouvoir votre entreprise ou immortaliser un événement (mariage, concert, spectacle, etc.), je saurai m’adapter à vos besoins.
            </p><p>
            N’hésitez pas à me contacter pour discuter de votre projet et obtenir un devis personnalisé.</p>
          </>
          
          :
          <>
            {/* <p>With a solid background as a camera operator/editor (M6, Orange TV...) and director, including several short films selected in festivals, I am willing to apply my skills to your project.</p> */}
            <p>Passionate about visual storytelling for over a decade, I began my career as an editor with major French TV channels such as M6 and France Télévisions. Over time, I transitioned into directing, culminating in the selection of my third short film at the Cannes Film Festival in 2019.

            From scriptwriting to final editing, I approach each project with artisanal precision and high standards. As a certified drone pilot, I can enhance my productions with high-quality aerial footage.</p>
            <p>Whether you’re looking to promote your business or capture a special event—be it a wedding, concert, theater performance, or otherwise—I’m committed to tailoring my services to your needs.
            </p><p>
            Feel free to contact me to discuss your project and receive a personalized quote.</p>
          </>       
        }
        
      </div>
      {/* {<Footer2/>} */}
    </div>
  )
}

export default About