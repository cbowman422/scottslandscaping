import React from 'react';
import '../css/Header.css';
import logo from '../images/TemporaryLogoTransparent.png';
import { useState } from 'react';

export const Header = () => {
    const [active, setActive] = useState(false)

    return (
        <div className="header">
            <div className="header-content">
                <img className="headerLogo" src={logo} alt="logo" />
                <div className={active ? 'hamburger active' : 'hamburger'} onClick={()=>setActive(!active)}>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                </div>
            </div>
            <div className={active ? 'menu active' : 'menu'}>
                <div className="navListUlHamburger" >
                    <div className="nav-item"><a className="navListA" href="/" >HOME</a></div>
                    <div className="nav-item"><a className="navListA" href="/portfolio" >PORTFOLIO</a></div>
                    <div className="nav-item"><a className="navListA" href="/about" >ABOUT US</a></div>
                    <div className="nav-item"><a className="navListA" href="/services" >SERVICES</a></div>
                    <div className="nav-item"><a className="navListA" href="/contact" >CONTACT</a></div>
                </div>
            </div>
        </div>

    )
}