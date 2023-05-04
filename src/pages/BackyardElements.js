import React from 'react';
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


  return (
    <div className="backyard-gallery-container">

    <a className="return-before" href="/gallery" > &#60; Return to Gallery </a>
    
          <h3> Backyard Elements </h3>
          <div className="backyard-gallery-item-container" >
          {backyardImages.map((imagesMap,backyardMapId) => 
          {
            return ( 
              <div className="backyard-gallery-item" key={backyardMapId}>
                <img className="backyard-gallery-img" src={imagesMap} alt={imagesMap} />
              </div>
                  )
          }       )
        }
          </div>
        </div>
  )
}

export default BackyardElements;