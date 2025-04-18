import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Footer from '../components/footer'
// import SubmitForm from '../components/submit-form'
import '../assets/contact.css'

function Contact() {
  const { language } = useLanguage();
  
  return (
    <div className="contact-page">
      <div className="contact-title-container">
        <h1>Contact</h1>
      </div>
      {/* <SubmitForm/> */}
      <div className="contact-text-container">
        { language === 'EN' ?  <h4>Demande de devis gratuit à :</h4> : <h4>For any request, contact me at :</h4> }
        <p>candelafilms13390@gmail.com</p>
        { language === 'EN' ?
          <p>06 50 29 66 20</p>
          :
          <p>(+33) 6 50 29 66 20</p>
        }
        
      </div>
      <Footer />
    </div>

  )
}

export default Contact