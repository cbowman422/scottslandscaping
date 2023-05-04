import React from 'react';
import '../css/Pools.css';

import poolImage1 from '../images/Pools1.jpeg';
import poolImage2 from '../images/Pools2.jpeg';
import poolImage3 from '../images/Pools3.jpeg';
import poolImage4 from '../images/Pools4.jpeg';
import poolImage5 from '../images/Pools5.jpeg';
import poolImage6 from '../images/Pools6.jpeg';
import poolImage7 from '../images/Pools7.jpeg';
import poolImage8 from '../images/Pools8.jpeg';
import poolImage9 from '../images/Pools9.jpeg';
import poolImage10 from '../images/Pools10.jpeg';
import poolImage11 from '../images/Pools11.jpeg';
import poolImage12 from '../images/Pools12.jpeg';


const Pools = () => {


  const poolImages = [
    poolImage1,
    poolImage2,
    poolImage3,
    poolImage4,
    poolImage5,
    poolImage6,
    poolImage7,
    poolImage8,
    poolImage9,
    poolImage10,
    poolImage11,
    poolImage12
  ]

  return (
    <div className="pools-gallery-container">

    <a className="return-before" href="/gallery" > &#60; Return to Gallery </a>
    
          <h3> Pool Landscapes </h3>
          <div className="pools-gallery-item-container" >
          {poolImages.map((imagesMap,poolMapId) => 
          {
            return ( 
              <div className="pools-gallery-item" key={poolMapId}>
                <img className="pools-gallery-img" src={imagesMap} alt={imagesMap} />
              </div>
                  )
          }       )
        }
          </div>
        </div>
  )
}

export default Pools;