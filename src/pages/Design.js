import { React, useState } from 'react';
import '../css/Design.css';

// import images for design drawings 
import designImage1 from '../images/Design1.jpeg';
import designImage2 from '../images/Design2.jpeg';
import designImage3 from '../images/Design3.jpeg';
import designImage4 from '../images/Design4.jpeg';
import designImage5 from '../images/Design5.jpeg';
import designImage6 from '../images/Design6.jpeg';
import designImage7 from '../images/Design7.jpeg';
import designImage8 from '../images/Design8.jpeg';
import designImage9 from '../images/Design9.jpeg';
import designImage10 from '../images/Design10.jpeg';
import designImage11 from '../images/Design11.jpeg';
import designImage12 from '../images/Design12.jpeg';

import leftArrow from '../images/left-arrow.png';
import rightArrow from '../images/right-arrow.png';
import cross from '../images/cross.png';

const Design = () => {
  
  // Import design drawing images
  const designImages = [
    designImage1,
    designImage2,
    designImage3,
    designImage4,
    designImage5,
    designImage6,
    designImage7,
    designImage8,
    designImage9,
    designImage10,
    designImage11,
    designImage12
  ]

  // Defining state for gallery modal window and slider 
  const [designSliderState, setDesignSliderState]=useState(null)
  
  //The handle click function takes an index parameter, which represents the index of the backyard images array. The index is passed from the Map ID of the selected value in the JSX mapping.
  const handleClick = (index) => {

    // a variable is set for the correct selected mapped image from the array using the passed parameter.
    const designSlider=designImages[index];

    // State is set to the selected image from the variable.
    setDesignSliderState(designSlider);
  }

  // a function that uses indexOf method to change state by -1 when selected. array.indexOf(The value to search for, Optional Where to start the search)
  const sliderLeft = () => {
    const currentIndex = designImages.indexOf(designSliderState);
    if (currentIndex === 0) {
      setDesignSliderState(designImages[designImages.length - 1]);
    } else {
      setDesignSliderState(designImages[currentIndex - 1]);
    }
  };

  // a function that uses indexOf method to change state by +1 when selected. array.indexOf(The value to search for, Optional Where to start the search)
  const sliderRight = () => {
    const currentIndex = designImages.indexOf(designSliderState);
    if (currentIndex === designImages.length - 1) {
      setDesignSliderState(designImages[0]);
    } else {
      setDesignSliderState(designImages[currentIndex + 1]);
    }
  }

  // set modal window state back to null to close slider
  const closeSlider = () => {
    setDesignSliderState(null);
  }

  // JSX
  return ( 
    <div className="design-gallery-container">

      <h3 className="design-gallery-container-h3" > Landscape Design Drawings </h3>

      <div className={designSliderState ? 'design-slider-container activeDesignSlider' : 'design-slider-container'}>
        <img src={designSliderState} className="design-slider-img" alt="carousel" />
        <div className="design-slider-change" >
          <div className="design-slider-X-div" onClick={()=>closeSlider()} > <img src={cross} alt="Cross Btn" /> </div>
          <div className="design-slider-left" onClick={()=>sliderLeft()} > <img src={leftArrow} alt="Left Arrow" /> </div>
          <div className="design-slider-right" onClick={()=>sliderRight()} > <img src={rightArrow} alt="Right Arrow" /> </div>
        </div>
      </div>

      <div className="design-gallery-item-container">
      {designImages.map((imagesMap,designMapId) => 
          {
            return ( 
              <div className="design-gallery-item" key={designMapId}>
                <img className="design-gallery-img" src={imagesMap} alt={imagesMap} onClick={()=>handleClick(designMapId)}/>
              </div>
                  )
          }       )
        }
      </div>

    </div>
  )
  }

export default Design;

