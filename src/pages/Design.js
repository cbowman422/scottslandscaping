import { React, useState } from 'react';
import '../css/Design.css';

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

  const [designSliderState, setDesignSliderState]=useState(null)
  
  const handleClick = (index) => {
    const designSlider=designImages[index];
    setDesignSliderState(designSlider);
  }

  const sliderLeft = () => {
    const currentIndex = designImages.indexOf(designSliderState);
    if (currentIndex === 0) {
      setDesignSliderState(designImages[designImages.length - 1]);
    } else {
      setDesignSliderState(designImages[currentIndex - 1]);
    }
  };

  const sliderRight = () => {
    const currentIndex = designImages.indexOf(designSliderState);
    if (currentIndex === designImages.length - 1) {
      setDesignSliderState(designImages[0]);
    } else {
      setDesignSliderState(designImages[currentIndex + 1]);
    }
  }

  const closeSlider = () => {
    setDesignSliderState(null);
  }

  return ( 
    <div className="design-gallery-container">

      <h3 className="design-gallery-container-h3" > Design Work </h3>

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

