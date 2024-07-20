import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavDropdown() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="nav-dropdown"
      onClick={()=> setToggle(!toggle)}
    >
      <img src="hamburger.svg" alt="menu" className={toggle ? 'dropdown-menu-open' : ''} />
      <div className={`dropdown ${toggle ? 'open' : ''}`}>
        <ul className={`dropdown-tabs ${toggle ? 'open' : ''}`}>
          <Link to="/about"><li>À propos</li></Link>
          <Link to="/films"><li>Films</li></Link>
          <Link to="/photos"><li>Photos</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default NavDropdown