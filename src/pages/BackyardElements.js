import React from 'react';
import '../css/BackyardElements.css';

const BackyardElements = () => {
  return (
    <div className="backyard-gallery-container">

    <a className="return-before" href="/gallery" > &#60; Return to Gallery </a>
    
          <h3> Backyard Elements </h3>
          <div className="backyard-gallery-item-container" >
            <div className="backyard-gallery-item" id="backyard-gallery-item-1"></div>
            <div className="backyard-gallery-item" id="backyard-gallery-item-2"></div>
            <div className="backyard-gallery-item" id="backyard-gallery-item-3"></div>
            <div className="backyard-gallery-item" id="backyard-gallery-item-4"></div>
            <div className="backyard-gallery-item" id="backyard-gallery-item-5"></div>
            <div className="backyard-gallery-item" id="backyard-gallery-item-6"></div>
            <div className="backyard-gallery-item" id="backyard-gallery-item-7"></div>
            <div className="backyard-gallery-item" id="backyard-gallery-item-8"></div>
            <div className="backyard-gallery-item" id="backyard-gallery-item-9"></div>
          </div>
        </div>
  )
}

export default BackyardElements;