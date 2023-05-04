
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




const StoneWalls = () => {

  
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

  const [stoneSliderState, setStoneSliderState]=useState(null)
  
  const handleClick = (index) => {
    console.log(index);
    const stoneSlider=stoneImages[index];
    setStoneSliderState(stoneSlider);
  }

  const closeSlider = () => {
    setStoneSliderState(null);
  }


  return ( 
    <div className="stone-gallery-container">

      <a className="return-before" href="/gallery" > &#60; Return to Gallery </a>

      <h3> Stone Work </h3>

      <div className={stoneSliderState ? 'stone-slider-container activeStoneSlider' : 'stone-slider-container'}>
        <div className="stone-slider-X-div" onClick={()=>closeSlider()} ><h3>X</h3></div>
        <img src={stoneSliderState} className="stone-slider-img" />
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

