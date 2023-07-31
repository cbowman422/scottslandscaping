import {React, useState} from 'react';
import '../css/Pools.css';

// import images for pools 
import poolsImage1 from '../images/Pools1.jpeg';
import poolsImage2 from '../images/Pools2.jpeg';
import poolsImage3 from '../images/Pools3.jpeg';
import poolsImage4 from '../images/Pools4.jpeg';
import poolsImage5 from '../images/Pools5.jpeg';
import poolsImage6 from '../images/Pools6.jpeg';
import poolsImage7 from '../images/Pools7.jpeg';
import poolsImage8 from '../images/Pools8.jpeg';
import poolsImage9 from '../images/Pools9.jpeg';
import poolsImage10 from '../images/Pools10.jpeg';
import poolsImage11 from '../images/Pools11.jpeg';
import poolsImage12 from '../images/Pools12.jpeg';

import leftArrow from '../images/left-arrow.png';
import rightArrow from '../images/right-arrow.png';
import cross from '../images/cross.png';


const Pools = () => {

  // Import pool images for gallery
  const poolsImages = [
    poolsImage1,
    poolsImage2,
    poolsImage3,
    poolsImage4,
    poolsImage5,
    poolsImage6,
    poolsImage7,
    poolsImage8,
    poolsImage9,
    poolsImage10,
    poolsImage11,
    poolsImage12
  ]

  // Defining state for gallery modal window and slider 
  const [poolsSliderState, setPoolsSliderState]=useState(null)
  
  //The handle click function takes an index parameter, which represents the index of the backyard images array. The index is passed from the Map ID of the selected value in the JSX mapping.
  const handleClick = (index) => {

    // a variable is set for the correct selected mapped image from the array using the passed parameter.
    const poolsSlider=poolsImages[index];

    // State is set to the selected image from the variable.
    setPoolsSliderState(poolsSlider);
  }

  // a function that uses indexOf method to change state by -1 when selected. array.indexOf(The value to search for, Optional Where to start the search)
  const sliderLeft = () => {
    const currentIndex = poolsImages.indexOf(poolsSliderState);
    if (currentIndex === 0) {
      setPoolsSliderState(poolsImages[poolsImages.length - 1]);
    } else {
      setPoolsSliderState(poolsImages[currentIndex - 1]);
    }
  };

  // a function that uses indexOf method to change state by +1 when selected. array.indexOf(The value to search for, Optional Where to start the search)
  const sliderRight = () => {
    const currentIndex = poolsImages.indexOf(poolsSliderState);
    if (currentIndex === poolsImages.length - 1) {
      setPoolsSliderState(poolsImages[0]);
    } else {
      setPoolsSliderState(poolsImages[currentIndex + 1]);
    }
  }

  // set modal window state back to null to close slider
  const closeSlider = () => {
    setPoolsSliderState(null);
  }

  // JSX
  return ( 
    <div className="pools-gallery-container">

      <a className="return-before" href="/gallery" > &#60; Return to Gallery </a>

      <h3 className="pools-gallery-container-h3" > Pool Landscapes </h3>

      <div className={poolsSliderState ? 'pools-slider-container activePoolsSlider' : 'pools-slider-container'}>
        <img src={poolsSliderState} className="pools-slider-img" alt="carousel" />
        <div className="pools-slider-change" >
          <div className="pools-slider-X-div" onClick={()=>closeSlider()} > <img src={cross} alt="Cross Btn" /> </div>
          <div className="pools-slider-left" onClick={()=>sliderLeft()} > <img src={leftArrow} alt="Left Arrow" /> </div>
          <div className="pools-slider-right" onClick={()=>sliderRight()} > <img src={rightArrow} alt="Right Arrow" /> </div>
        </div>
      </div>

      <div className="pools-gallery-item-container">
      {poolsImages.map((imagesMap,poolsMapId) => 
          {
            return ( 
              <div className="pools-gallery-item" key={poolsMapId}>
                <img className="pools-gallery-img" src={imagesMap} alt={imagesMap} onClick={()=>handleClick(poolsMapId)}/>
              </div>
                  )
          }       )
        }
      </div>

    </div>
  )
  }

export default Pools;