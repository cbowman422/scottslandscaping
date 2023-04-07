import React from 'react';
import { useState } from 'react';
import '../css/BeforeAfterSlider.css';
import myPhoto from '../images/13-142-151-pool.jpeg';

const BeforeAfterSlider = () => {

  const [divisor, setDivisor] = useState(50);

  const handleSliderChange = (event) => {
    setDivisor(event.target.value);
  }
    

  const photoStyle = {
    width: `${divisor}%`
  };

  return (
    <div>

      <div className="sliderImage"  style={photoStyle}></div>
      <div className="sliderImageAfter"></div>

      {/* <img src={myPhoto} style={photoStyle} /> */}

    {/* <div id="divisor">
      Divisor: {divisor}
    </div> */}

    <input
      id="slider"
      type="range"
      min="1"
      max="100"
      value={divisor}
      onChange={handleSliderChange}
    />
  </div>
  )
}

export default BeforeAfterSlider;