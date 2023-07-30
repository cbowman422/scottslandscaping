import React from 'react';
import { useState } from 'react';
import '../css/BeforeAfterSlider.css';


// declaring the BeforeAfterSlider componenet with before and after props
const BeforeAfterSlider = ({before, after}) => {

  // set state for divisor at midpoint which is the slider bar being set to the middle
  const [divisor, setDivisor] = useState(50);

  //The arrow function takes an event parameter, which represents the event that triggered the function. In this case that is the Divisor being moved.
  const handleSliderChange = (event) => {
    setDivisor(event.target.value);
  }

  // have the width of the larger Z index (before image) width change with the divisor state change.
  const photoStyle = {
    width: `${divisor}%`
  };
  
  //Dynamically set the before image allowing this to be a before/ after COMPONENT
  const beforeImage = {
    backgroundImage: `url(${before})`
  };

  //Dynamically set the after image allowing this to be a before/ after COMPONENT
  const afterImage = {
    backgroundImage: `url(${after})`
  };

  // JSX for slider (HTML)
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