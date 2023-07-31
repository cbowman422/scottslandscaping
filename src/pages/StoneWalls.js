import { React, useState } from 'react';
import '../css/StoneWalls.css';

import stoneImage1 from '../images/StoneWalls1.jpeg';
import stoneImage2 from '../images/StoneWalls2.jpeg';
import stoneImage3 from '../images/StoneWalls3.jpeg';
import stoneImage4 from '../images/StoneWalls4.jpeg';
import stoneImage5 from '../images/StoneWalls5.jpeg';
import stoneImage6 from '../images/StoneWalls6.jpeg';
import stoneImage7 from '../images/StoneWalls7.jpeg';
import stoneImage8 from '../images/StoneWalls8.jpeg';
import stoneImage9 from '../images/StoneWalls9.jpeg';
import stoneImage10 from '../images/StoneWalls10.jpeg';
import stoneImage11 from '../images/StoneWalls11.jpeg';
import stoneImage12 from '../images/StoneWalls12.jpeg';

import leftArrow from '../images/left-arrow.png';
import rightArrow from '../images/right-arrow.png';
import cross from '../images/cross.png';

const StoneWalls = () => {
  
  // Import stone wall images for gallery
  const stoneImages = [
    stoneImage1,
    stoneImage2,
    stoneImage3,
    stoneImage4,
    stoneImage5,
    stoneImage6,
    stoneImage7,
    stoneImage8,
    stoneImage9,
    stoneImage10,
    stoneImage11,
    stoneImage12
  ]

  // Defining state for gallery modal window and slider
  const [stoneSliderState, setStoneSliderState]=useState(null)
  
  //The handle click function takes an index parameter, which represents the index of the backyard images array. The index is passed from the Map ID of the selected value in the JSX mapping.
  const handleClick = (index) => {

    // a variable is set for the correct selected mapped image from the array using the passed parameter.
    const stoneSlider=stoneImages[index];

    // State is set to the selected image from the variable.
    setStoneSliderState(stoneSlider);
  }

  // a function that uses indexOf method to change state by -1 when selected. array.indexOf(The value to search for, Optional Where to start the search)
  const sliderLeft = () => {
    const currentIndex = stoneImages.indexOf(stoneSliderState);
    if (currentIndex === 0) {
      setStoneSliderState(stoneImages[stoneImages.length - 1]);
    } else {
      setStoneSliderState(stoneImages[currentIndex - 1]);
    }
  };

  // a function that uses indexOf method to change state by +1 when selected. array.indexOf(The value to search for, Optional Where to start the search)
  const sliderRight = () => {
    const currentIndex = stoneImages.indexOf(stoneSliderState);
    if (currentIndex === stoneImages.length - 1) {
      setStoneSliderState(stoneImages[0]);
    } else {
      setStoneSliderState(stoneImages[currentIndex + 1]);
    }
  }

  // set modal window state back to null to close slider
  const closeSlider = () => {
    setStoneSliderState(null);
  }

  // JSX
  return ( 
    <div className="stone-gallery-container">

      <a className="return-before" href="/gallery" > &#60; Return to Gallery </a>

      <h3 className="stone-gallery-container-h3" > Stone Work </h3>

      <div className={stoneSliderState ? 'stone-slider-container activeStoneSlider' : 'stone-slider-container'}>
        <img src={stoneSliderState} className="stone-slider-img" alt="carousel" />
        <div className="stone-slider-change" >
          <div className="stone-slider-X-div" onClick={()=>closeSlider()} > <img src={cross} alt="Cross Btn" /> </div>
          <div className="stone-slider-left" onClick={()=>sliderLeft()} > <img src={leftArrow} alt="Left Arrow" /> </div>
          <div className="stone-slider-right" onClick={()=>sliderRight()} > <img src={rightArrow} alt="Right Arrow" /> </div>
        </div>
      </div>

      <div className="stone-gallery-item-container">
      {stoneImages.map((imagesMap,stoneMapId) => 
          {
            return ( 
              <div className="stone-gallery-item" key={stoneMapId}>
                <img className="stone-gallery-img" src={imagesMap} alt={imagesMap} onClick={()=>handleClick(stoneMapId)}/>
              </div>
                  )
          }       )
        }
      </div>

    </div>
  )
  }

export default StoneWalls;

