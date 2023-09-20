import React from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import '../css/BeforeAfter.css'


// importing images for before and after sliders
import ba1b from '../images/BA1B.jpg';
import ba1a from '../images/BA1A.jpg';

import ba2b from '../images/BA2B.jpg';
import ba2a from '../images/BA2A.jpg';


import ba3b from '../images/BA3B.jpg';
import ba3a from '../images/BA3A.jpg';

import ba4b from '../images/BA4B.jpg';
import ba4a from '../images/BA4A.jpg';

import ba5b from '../images/BA5B.jpg';
import ba5a from '../images/BA5A.jpg';

import ba6b from '../images/BA6B.jpg';
import ba6a from '../images/BA6A.jpg';


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