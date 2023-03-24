import React from 'react';
import '../css/Header.css';
import HamburgerMenu from './HamburgerMenu';
import HamX from './HamX';
import logo from '../images/TemporaryLogoTransparent.png';
import { useState } from 'react';

const Header = () => {


const[hamburgerOpen, setHamburgerOpen] = useState(false);

const toggleHamburger = () => {
  setHamburgerOpen(!hamburgerOpen);
}

const hamNav = () => {

  const navListUlHamburgerStyle = {
    transition: 'transform 0.5s ease-in-out',
    transform: hamburgerOpen ? 'translateY(0)' : 'translateY(-100%)',
  };

  return (
    <ul className="navListUlHamburger" style={navListUlHamburgerStyle} >
      <li><a className="navListA" href="/" >HOME</a></li>
      <li><a className="navListA" href="/portfolio" >PORTFOLIO</a></li>
      <li><a className="navListA" href="/about" >ABOUT US</a></li>
      <li><a className="navListA" href="/services" >SERVICES</a></li>
      <li><a className="navListA" href="/contact" >CONTACT</a></li>
    </ul>
  )

}

  return (
    <div className="headerNavContainer" >
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
          {hamburgerOpen ? <HamX /> : <HamburgerMenu />}
          </div>

      </div>

        {hamNav()}
    </div>
  )
}

export default Header;