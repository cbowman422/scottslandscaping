import React from 'react'
import '../css/Header.css'

const Header = () => {
  return (
    <div className="headerContainer">
      <div>
        <img src={""} alt="logo" />
        <ul className="navListUl">
          <li><a href="/" >HOME</a></li>
          <li><a href="/portfolio" >PORTFOLIO</a></li>
          <li><a href="/about" >ABOUT US</a></li>
          <li><a href="/services" >SERVICES</a></li>
          <li><a href="/contact" >CONTACT</a></li>
        </ul>
        
      </div>
    </div>
  )
}

export default Header;