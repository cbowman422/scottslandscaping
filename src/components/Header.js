import React from 'react'
import '../css/Header.css'
import HamburgerMenu from './HamburgerMenu'
import logo from '../images/TemporaryLogoTransparent.png'

const Header = () => {
  return (
    <div className="headerContainer">
        <img className="headerLogo" src={logo} alt="logo" />
        <ul className="navListUl">
          <li><a className="navListA" href="/" >HOME</a></li>
          <li><a className="navListA" href="/portfolio" >PORTFOLIO</a></li>
          <li><a className="navListA" href="/about" >ABOUT US</a></li>
          <li><a className="navListA" href="/services" >SERVICES</a></li>
          <li><a className="navListA" href="/contact" >CONTACT</a></li>
        </ul>
        <div className="hamburgerContainerHeader">
          <HamburgerMenu />
        </div>
    </div>
  )
}

export default Header;