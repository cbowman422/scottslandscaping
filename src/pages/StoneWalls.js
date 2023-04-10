import React from 'react';
import '../css/StoneWalls.css';

import image1 from '../images/13-142-151-pool.jpeg';

const StoneWalls = () => {

  return (
    <div className="gallery-container">
      <h3> Stone walls </h3>
      <div className="gallery-item-container" >
        <img src={image1} alt="gallery-image" />
        <img src={image1} alt="gallery-image" />
        <img src={image1} alt="gallery-image" />
        <img src={image1} alt="gallery-image" />
        <img src={image1} alt="gallery-image" />
        <img src={image1} alt="gallery-image" />
      </div>
    </div>
  )
}

export default StoneWalls;