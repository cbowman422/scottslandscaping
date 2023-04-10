import React from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import '../css/BeforeAfter.css'

import image1 from '../images/13-142-151-pool.jpeg';
import image2 from '../images/13-142-209-walls.jpeg'

const BeforeAfter = () => {
  return (
    <div className="beforeAfter-container" >

      

      <h3 className="BeforeAfter-h3" > Before & After </h3>

      <div className="beforeAfter-container-flex" >
        <BeforeAfterSlider before={image1} after={image2}/>
        <BeforeAfterSlider before={image1} after={image2}/>
      </div>
    </div>
  )
}

export default BeforeAfter;