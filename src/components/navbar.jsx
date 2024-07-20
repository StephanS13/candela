import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/navbar.css'
import NavDropdown from './navDropdown';

function Navbar() {

  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar-logo">
          <img src="logo-candela2.jpg" alt=''/> CANDELA | 
          <span><p> FILMS</p></span>
        </div>
      </Link>
      
      <div className="navbar-right-side">
        <ul className='navbar-tabs'>
          <Link to="/about"><li>À propos</li></Link>
          <Link to="/films"><li>Films</li></Link>
          <Link to="/photos"><li>Photos</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
        <span>|</span>
        <ul className="socials">
          <Link to="facebook.com"><img src="facebook.svg" alt="" /></Link>
          <div className="yt"><Link to="youtube.com" ><img src="youtube.svg" alt="" /></Link></div>
          <Link to="instagram.com"><img src="instagram.svg" alt="" /></Link>
        </ul>
      </div>

      <NavDropdown/>

    </div>
  )
}

export default Navbar