import React from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

import image1 from '../images/13-142-151-pool.jpeg';
import image2 from '../images/13-142-209-walls.jpeg'

const BeforeAfter = () => {
  return (
    <div>BeforeAfter
      <BeforeAfterSlider before={image1} after={image2}/>

      <BeforeAfterSlider before={image1} after={image2}/>
    </div>
  )
}

export default BeforeAfter;