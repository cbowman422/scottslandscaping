import React from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import '../css/BeforeAfter.css'

import ba1b from '../images/BA1B.jpeg';
import ba1a from '../images/BA1A.jpeg';

import ba2b from '../images/BA2B.jpeg';
import ba2a from '../images/BA2A.jpeg';


import ba3b from '../images/BA3B.jpeg';
import ba3a from '../images/BA3A.jpeg';



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
        <BeforeAfterSlider before={ba3b} after={ba3a}/>
      </div>
    </div>
  )
}

export default BeforeAfter;