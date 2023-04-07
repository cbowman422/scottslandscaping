import React from 'react';
import { useState } from 'react';
import '../css/BeforeAfterSlider.css'

const BeforeAfterSlider = () => {

  const [divisor, setDivisor] = useState(50);
  const handleSliderChange = (event) => {
    setDivisor(event.target.value);
  }

  return (
    <div>
    <div id="divisor">
      Divisor: {divisor}
    </div>
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