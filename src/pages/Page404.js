import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Page404.css';
import pnfImage from '../images/IMG_2527.jpeg'

const Page_404 = () => { 
  return (
    <div className='pnfContainer'>
      <h3> - 404 - </h3>
      <h3>We have planted this page in a different garden.</h3>
      <p>Here are some helpful links:</p>
      <div className='pnfLinkDiv'>
        <Link className='pnfLink' to='/'>Home</Link>
      
        <Link className='pnfLink' to='/gallery'>Gallery</Link>
     
        <Link className='pnfLink' to='/contact'>Contact</Link>
      </div>
      <img className='pnfImageClass' src={pnfImage} alt="404 Page Flowers"></img>
    </div>
  )
}

export default Page_404