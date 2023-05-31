import React from 'react';
import { useState } from 'react';
import '../css/BeforeAfterSlider.css';


const BeforeAfterSlider = ({before, after}) => {

  const [divisor, setDivisor] = useState(50);

  const handleSliderChange = (event) => {
    setDivisor(event.target.value);
  }

  const photoStyle = {
    width: `${divisor}%`
  };

  const beforeImage = {
    backgroundImage: `url(${before})`
  };

  const afterImage = {
    backgroundImage: `url(${after})`
  };

  return (
    <div className="slider-container">

      <div className="sliderImageAfter" style={afterImage}> 	
       <div className="sliderImage" style={{...photoStyle, ...beforeImage}}></div>
       <p className="slider-p"> &#8592; Slide circle for transformation &#8594; </p>
      </div>

    <input
      id="slider"
      type="range"
      min="0"
      max="100"
      value={divisor}
      onChange={handleSliderChange}
    />

    </div>
  )
}

export default BeforeAfterSlider;