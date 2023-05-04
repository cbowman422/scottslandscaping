
import { React, useState } from 'react';
import '../css/StoneWalls.css';

import image1 from '../images/StoneWalls1.jpeg';
import image2 from '../images/StoneWalls2.jpeg';
import image3 from '../images/StoneWalls3.jpeg';
import image4 from '../images/StoneWalls4.jpeg';
import image5 from '../images/StoneWalls5.jpeg';
import image6 from '../images/StoneWalls6.jpeg';
import image7 from '../images/StoneWalls7.jpeg';
import image8 from '../images/StoneWalls8.jpeg';
import image9 from '../images/StoneWalls9.jpeg';
import image10 from '../images/StoneWalls10.jpeg';
import image11 from '../images/StoneWalls11.jpeg';
import image12 from '../images/StoneWalls12.jpeg';




const StoneWalls = () => {

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12
  ]


  return ( 
    <div className="stone-gallery-container">

      <a className="return-before" href="/gallery" > &#60; Return to Gallery </a>

      <h3> Stone Work </h3>
      <div className="stone-gallery-item-container" >
      {images.map((imagesMap,serviceMapId) => 
          {
            return ( 
              <div className="stone-gallery-item" key={serviceMapId}>
                <img className="stone-gallery-img" src={imagesMap} alt={imagesMap} />
              </div>
                  )
          }       )
        }
      </div>



    </div>
  )
  }

export default StoneWalls;

