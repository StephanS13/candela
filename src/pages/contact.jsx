import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Footer from '../components/footer'
import '../assets/contact.css'

function Contact() {
  const { language } = useLanguage();
  return (
    <>
      <div className="contact-title-container">
        <h1>Contact</h1>
      </div>
      <div className="contact-text-container">
        { language === 'EN' ? 
          <p>Veuillez me contacter pour discuter de projets tels que des films, documentaires, publicités, ou autres projects collaboratifs.</p>
          :
          <p>Please feel free to contact me to discuss any Filmmaking, TV, Commercial, Corporate commissions or collaboration projects.</p>          
        }
        
        <p>frd.simcic@gmail.com</p>
        { language === 'EN' ?
          <p>06 50 29 66 20</p>
          :
          <p>(+33) 6 50 29 66 20</p>
        }
        
      </div>
      <Footer />
    </>

  )
}

export default Contact