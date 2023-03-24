import React from 'react';
import '../css/Header.css';
import HamburgerMenu from './HamburgerMenu';
import logo from '../images/TemporaryLogoTransparent.png';
import { useState } from 'react';

const Header = () => {


const[hamburgerOpen, setHamburgerOpen] = useState(false);

const toggleHamburger = () => {
  console.log("click")
  setHamburgerOpen(!hamburgerOpen);
}

const hamNav = () => {
  return (
    <ul className="navListUlHamburger" >
      <li><a className="navListA" href="/" >HOME</a></li>
      <li><a className="navListA" href="/portfolio" >PORTFOLIO</a></li>
      <li><a className="navListA" href="/about" >ABOUT US</a></li>
      <li><a className="navListA" href="/services" >SERVICES</a></li>
      <li><a className="navListA" href="/contact" >CONTACT</a></li>
    </ul>
  )

}

  return (
    <div className="headerContainer">
      
        <img className="headerLogo" src={logo} alt="logo" />

        <ul className="navListUl" >
          <li><a className="navListA" href="/" >HOME</a></li>
          <li><a className="navListA" href="/portfolio" >PORTFOLIO</a></li>
          <li><a className="navListA" href="/about" >ABOUT US</a></li>
          <li><a className="navListA" href="/services" >SERVICES</a></li>
          <li><a className="navListA" href="/contact" >CONTACT</a></li>
        </ul>

        <div className="hamburgerContainerHeader" onClick={toggleHamburger}>
          <HamburgerMenu />
        </div>
        <div>
        {hamburgerOpen ? hamNav() : ''}
        </div>

    </div>
  )
}

export default Header;