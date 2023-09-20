import React from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import '../css/BeforeAfter.css'


// importing images for before and after sliders
import ba1b from '../images/BA1B.jpg';
import ba1a from '../images/BA1A.jpg';

import ba2b from '../images/BA2B.jpeg';
import ba2a from '../images/BA2A.jpeg';


import ba3b from '../images/BA3B.jpeg';
import ba3a from '../images/BA3A.jpeg';

import ba4b from '../images/BA4B.jpeg';
import ba4a from '../images/BA4A.jpeg';

import ba5b from '../images/BA5B.jpeg';
import ba5a from '../images/BA5A.jpeg';

import ba6b from '../images/BA6B.jpeg';
import ba6a from '../images/BA6A.jpeg';


// JSX for before and after page
const BeforeAfter = () => {
  return (
    <div className="beforeAfter-container" >

      <a className="return-before" href="/gallery" > &#60; Return to Gallery </a>

      <h3 className="BeforeAfter-h3" > Before & After </h3>

      <div className="beforeAfter-container-flex" >
        <BeforeAfterSlider before={ba1b} after={ba1a}/>
        <BeforeAfterSlider before={ba2b} after={ba2a}/>
        </div>
        <div className="beforeAfter-container-flex" >
        <BeforeAfterSlider before={ba3b} after={ba3a}/>
        <BeforeAfterSlider before={ba4b} after={ba4a}/>
      </div>
      <div className="beforeAfter-container-flex" >
        <BeforeAfterSlider before={ba5b} after={ba5a}/>
        <BeforeAfterSlider before={ba6b} after={ba6a}/>
      </div>
    </div>
  )
}

export default BeforeAfter;