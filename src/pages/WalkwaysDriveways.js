import React from 'react';
import '../css/WalkwaysDriveways.css';

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



const WalkwaysDriveways = () => {

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


  return (
    <div className="walks-gallery-container">

    <a className="return-before" href="/gallery" > &#60; Return to Gallery </a>
    
          <h3> Walkways & Driveways </h3>
          <div className="walks-gallery-item-container" >
          {walksImages.map((imagesMap,walksMapId) => 
          {
            return ( 
              <div className="walks-gallery-item" key={walksMapId}>
                <img className="walks-gallery-img" src={imagesMap} alt={imagesMap} />
              </div>
                  )
          }       )
        }
          </div>
        </div>
  )
}

export default WalkwaysDriveways;