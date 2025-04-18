import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

function NavDropdown() {
  const [toggle, setToggle] = useState(false)
  const { language, toggleLanguage } = useLanguage()

  return (
    <div className="nav-dropdown"
      onClick={()=> setToggle(!toggle)}
    >
      <img src="hamburger.svg" alt="menu" className={toggle ? 'dropdown-menu-open' : ''} />
      <div className={`dropdown ${toggle ? 'open' : ''}`}>
        <ul className={`dropdown-tabs ${toggle ? 'open' : ''}`}>
          <li className='dropdown-language'>
              { language === 'EN' ? (
                  <img src='icons/uk-flag.svg' 
                  alt='switch to English'
                  onClick={toggleLanguage}/>
                ): (
                  <img src='icons/french-flag.svg'
                  alt='langue française' 
                  onClick={toggleLanguage}/>
                )}
          </li>
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
      </div>
    </div>
  )
}

export default NavDropdown