import {React, useState} from 'react';
import '../css/WalkwaysDriveways.css';

// import images for walkways and driveways
import walksImage1 from '../images/Walks1.jpeg';
import walksImage2 from '../images/Walks2.jpeg';
import walksImage3 from '../images/Walks3.jpeg';
import walksImage4 from '../images/Walks4.jpeg';
import walksImage5 from '../images/Walks5.jpeg';
import walksImage6 from '../images/Walks6.jpeg';
import walksImage7 from '../images/Walks7.jpeg';
import walksImage8 from '../images/Walks8.jpeg';
import walksImage9 from '../images/Walks9.jpeg';
import walksImage10 from '../images/Walks10.jpeg';
import walksImage11 from '../images/Walks11.jpeg';
import walksImage12 from '../images/Walks12.jpeg';

import leftArrow from '../images/left-arrow.png';
import rightArrow from '../images/right-arrow.png';
import cross from '../images/cross.png';


const WalkwaysDriveways = () => {

  // Import walkway images for gallery
  const walksImages = [
    walksImage1,
    walksImage2,
    walksImage3,
    walksImage4,
    walksImage5,
    walksImage6,
    walksImage7,
    walksImage8,
    walksImage9,
    walksImage10,
    walksImage11,
    walksImage12
  ]

  // Defining state for gallery modal window and slider 
  const [walksSliderState, setWalksSliderState]=useState(null)
  
  //The handle click function takes an index parameter, which represents the index of the backyard images array. The index is passed from the Map ID of the selected value in the JSX mapping.
  const handleClick = (index) => {

    // a variable is set for the correct selected mapped image from the array using the passed parameter.
    const walksSlider=walksImages[index];

    // State is set to the selected image from the variable.
    setWalksSliderState(walksSlider);
  }

  // a function that uses indexOf method to change state by -1 when selected. array.indexOf(The value to search for, Optional Where to start the search)
  const sliderLeft = () => {
    const currentIndex = walksImages.indexOf(walksSliderState);
    if (currentIndex === 0) {
      setWalksSliderState(walksImages[walksImages.length - 1]);
    } else {
      setWalksSliderState(walksImages[currentIndex - 1]);
    }
  };

  // a function that uses indexOf method to change state by +1 when selected. array.indexOf(The value to search for, Optional Where to start the search)
  const sliderRight = () => {
    const currentIndex = walksImages.indexOf(walksSliderState);
    if (currentIndex === walksImages.length - 1) {
      setWalksSliderState(walksImages[0]);
    } else {
      setWalksSliderState(walksImages[currentIndex + 1]);
    }
  }

  // set modal window state back to null to close slider
  const closeSlider = () => {
    setWalksSliderState(null);
  }

  return ( 
    <div className="walks-gallery-container">

      <a className="return-before" href="/gallery" > &#60; Return to Gallery </a>

      <h3 className="walks-gallery-container-h3" > Walkways & Driveways </h3>

      <div className={walksSliderState ? 'walks-slider-container activeWalksSlider' : 'walks-slider-container'}>
        <img src={walksSliderState} className="walks-slider-img" alt="carousel"/>
        <div className="walks-slider-change" >
          <div className="walks-slider-X-div" onClick={()=>closeSlider()} > <img src={cross} alt="Cross Btn" /> </div>
          <div className="walks-slider-left" onClick={()=>sliderLeft()} > <img src={leftArrow} alt="Left Arrow" /> </div>
          <div className="walks-slider-right" onClick={()=>sliderRight()} > <img src={rightArrow} alt="Right Arrow" /> </div>
        </div>
      </div>

      <div className="walks-gallery-item-container">
      {walksImages.map((imagesMap,walksMapId) => 
          {
            return ( 
              <div className="walks-gallery-item" key={walksMapId}>
                <img className="walks-gallery-img" src={imagesMap} alt={imagesMap} onClick={()=>handleClick(walksMapId)}/>
              </div>
                  )
          }       )
        }
      </div>

    </div>
  )
  }

export default WalkwaysDriveways;
