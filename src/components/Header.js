import React from 'react';
import '../css/Header.css';
import logo from '../images/TemporaryLogoTransparent.png';
import { useState } from 'react';

export const Header = () => {


    // useState for hamburger menu being selected or unselected
    const [active, setActive] = useState(false);

    // Header JSX containg hamburger menu and nav bar
    return (
        <div className="header-shadow">
            <div className="header">
                <div className="header-content">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className={active ? 'hamburger active' : 'hamburger'} onClick={()=>setActive(!active)}>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                    </div>
                </div>
                <div className={active ? 'menu active' : 'menu'}>
                    <div className="nav-item"><a className="nav-item-a" href="/" >HOME</a></div>
                    <div className="nav-item"><a className="nav-item-a" href="/before-after" >BEFORE&nbsp;&&nbsp;AFTER</a></div>
                    <div className="nav-item"><a className="nav-item-a" href="/gallery" >GALLERY</a></div>
                    <div className="nav-item"><a className="nav-item-a" href="/about" >ABOUT&nbsp;US</a></div>
                    <div className="nav-item"><a className="nav-item-a" href="/services" >SERVICES</a></div>
                    <div className="nav-item"><a className="nav-item-a" href="/contact" >CONTACT</a></div>
                </div>
            </div>
                 
        </div>

    )
};
