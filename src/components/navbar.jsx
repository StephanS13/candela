import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import NavDropdown from './navDropdown';
import '../assets/navbar.css'

function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [toggleLanguageDrop, setToggleLanguageDrop] = useState(false)

  console.log(toggleLanguageDrop)

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar-logo">
          <img src="logo-candela2.jpg" alt=''/> CANDELA
          <span> |</span>
          <span><p> FILMS</p></span>
        </div>
      </Link>
      
      <div className="navbar-right-side">
        <ul className='navbar-tabs'>
          { language === 'EN' ? (
              <>
                <Link to="/about"><li>À propos</li></Link>
                <Link to="/works"><li>Réalisations</li></Link>
                <Link to="/portfolio"><li>Portfolio</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
              </>
            ) : (
              <>
                <Link to="/about"><li>About</li></Link>
                <Link to="/works"><li>Works</li></Link>
                <Link to="/portfolio"><li>Portfolio</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
              </>
            )
          }
        </ul>
        <span>|</span>
        <ul className="socials">
          <Link to="facebook.com"><img src="facebook.svg" alt="" /></Link>
          <div className="yt"><Link to="youtube.com" ><img src="youtube.svg" alt="" /></Link></div>
          <Link to="instagram.com"><img src="instagram.svg" alt="" /></Link>
        </ul>
      </div>
      
      <div 
        onClick={() => setToggleLanguageDrop(!toggleLanguageDrop)}
        className="language-button"
      > { language === 'EN' ? "Langage" : "Language" }
        <div className={`dropdown-for-languages ${toggleLanguageDrop ? 'open' : ''}`}>
          <img src='icons/uk-flag.svg' 
          alt='switch to English'
          onClick={toggleLanguage}
          />
          <img src='icons/french-flag.svg'
          alt='langue française'
          onClick={toggleLanguage}
          />
        </div>

      </div>

      <NavDropdown/>
    </nav>
  )
}

export default Navbar