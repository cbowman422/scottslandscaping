import {React, useState} from 'react';
import '../css/BackyardElements.css';

import backyardImage1 from '../images/Backyard1.jpeg';
import backyardImage2 from '../images/Backyard2.jpeg';
import backyardImage3 from '../images/Backyard3.jpeg';
import backyardImage4 from '../images/Backyard4.jpeg';
import backyardImage5 from '../images/Backyard5.jpeg';
import backyardImage6 from '../images/Backyard6.jpeg';
import backyardImage7 from '../images/Backyard7.jpeg';
import backyardImage8 from '../images/Backyard8.jpeg';
import backyardImage9 from '../images/Backyard9.jpeg';
import backyardImage10 from '../images/Backyard10.jpeg';
import backyardImage11 from '../images/Backyard11.jpeg';
import backyardImage12 from '../images/Backyard12.jpeg';

import leftArrow from '../images/left-arrow.png';
import rightArrow from '../images/right-arrow.png';
import cross from '../images/cross.png';



const BackyardElements = () => {

  const backyardImages = [
    backyardImage1,
    backyardImage2,
    backyardImage3,
    backyardImage4,
    backyardImage5,
    backyardImage6,
    backyardImage7,
    backyardImage8,
    backyardImage9,
    backyardImage10,
    backyardImage11,
    backyardImage12
  ]

  const [backyardSliderState, setBackyardSliderState]=useState(null)
  
  const handleClick = (index) => {
    console.log(index);
    const backyardSlider=backyardImages[index];
    setBackyardSliderState(backyardSlider);
  }

  const sliderLeft = () => {
    const currentIndex = backyardImages.indexOf(backyardSliderState);
    if (currentIndex === 0) {
      setBackyardSliderState(backyardImages[backyardImages.length - 1]);
    } else {
      setBackyardSliderState(backyardImages[currentIndex - 1]);
    }
  };

  const sliderRight = () => {
    const currentIndex = backyardImages.indexOf(backyardSliderState);
    if (currentIndex === backyardImages.length - 1) {
      setBackyardSliderState(backyardImages[0]);
    } else {
      setBackyardSliderState(backyardImages[currentIndex + 1]);
    }
  }

  const closeSlider = () => {
    setBackyardSliderState(null);
  }

  return ( 
    <div className="backyard-gallery-container">

      <a className="return-before" href="/gallery" > &#60; Return to Gallery </a>

      <h3 className="backyard-gallery-container-h3" > Backyard Elements </h3>

      <div className={backyardSliderState ? 'backyard-slider-container activeBackyardSlider' : 'backyard-slider-container'}>
        <img src={backyardSliderState} className="backyard-slider-img" />
        <div className="backyard-slider-change" >
          <div className="backyard-slider-X-div" onClick={()=>closeSlider()} > <img src={cross} alt="Cross Btn" /> </div>
          <div className="backyard-slider-left" onClick={()=>sliderLeft()} > <img src={leftArrow} alt="Left Arrow" /> </div>
          <div className="backyard-slider-right" onClick={()=>sliderRight()} > <img src={rightArrow} alt="Right Arrow" /> </div>
        </div>
      </div>

      <div className="backyard-gallery-item-container">
      {backyardImages.map((imagesMap,backyardMapId) => 
          {
            return ( 
              <div className="backyard-gallery-item" key={backyardMapId}>
                <img className="backyard-gallery-img" src={imagesMap} alt={imagesMap} onClick={()=>handleClick(backyardMapId)}/>
              </div>
                  )
          }       )
        }
      </div>

    </div>
  )
  }

export default BackyardElements;