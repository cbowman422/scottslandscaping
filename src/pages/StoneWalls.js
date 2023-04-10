import React from 'react';
import '../css/StoneWalls.css';

import image1 from '../images/13-142-151-pool.jpeg';

const StoneWalls = () => {

  return (
    <div className="stone-gallery-container">
      <h3> Stone walls </h3>
      <div className="stone-gallery-item-container" >
        <img className="stone-gallery-item" src={image1} alt="stone-gallery-image" />
        <img className="stone-gallery-item" src={image1} alt="stone-gallery-image" />
        <img className="stone-gallery-item" src={image1} alt="stone-gallery-image" />
        <img className="stone-gallery-item" src={image1} alt="stone-gallery-image" />
        <img className="stone-gallery-item" src={image1} alt="stone-gallery-image" />
        <img className="stone-gallery-item" src={image1} alt="stone-gallery-image" />
      </div>
    </div>
  )
}

export default StoneWalls;