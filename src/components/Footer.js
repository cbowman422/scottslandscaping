import React from 'react';
import '../css/Footer.css';
import facebook from '../images/facebook.png'

const Footer = () => {

  // footer JSX
  return (
    <div className="footerContainer">
      <div className="footerContainer-flex1">
        <h3 className="footer-content-h3" > SCOTT'S LANDSCAPING, INC © 2023 </h3>
        <a className="footer-content-phone" href="tel:508-435-3911">508 435 3911</a>
        <a className="footer-content-careers" href="/design" >Landscape Design</a>
        <a className="footer-content-plant" href="https://www.westonnurseries.com/plant-library/" target="blank">Plant Library 🌱 </a>
        <a className="footer-content-careers" href="/careers" >Careers</a>
        <a className="footer-content-facebook-a" href="https://www.facebook.com/scottslandscapinghopkinton" target="blank"> <img className="footer-content-facebook-img" src={facebook} alt="Facebook"></img>  </a>
      </div>
      <div className="footerContainer-flex2">
        <p className="footer-portfolio">Web Development by <a className="footer-portfolio-link" href="https://christopher-bowman.netlify.app/" target="blank">Christopher Bowman</a></p>
      </div>
    </div>
  )
}

export default Footer;