import React from 'react';
import '../css/Gallery.css';


const Gallery = () => {
  return (
    <div className= "gallery-container">
      
      
        <a href='./before-after' className= "before-container"> 
          <h3> Before & After </h3>
        </a>
   
        <a href='./stone-work' className= "stone-container"> 
          <h3> Stone Work </h3>
        </a>
     
        <a href='./walks-drives' className= "walk-container"> 
          <h3> Walkways & Driveways </h3>
        </a>

        <a href='./pools' className= "pool-container"> 
          <h3> Pool Landscapes </h3>
        </a>
      
        <a href='./backyard-elements' className= "backyard-container"> 
          <h3> Backyard Elements </h3>
        </a>
      
    </div>
  )
}

export default Gallery;