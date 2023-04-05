import React from 'react'
import beforeImg from '../images/13-142-209-walls.jpeg';
import stoneImg from '../images/IMG_1187-600x450-walls.jpeg';
import walkImg from '../images/IMG_0355_600x450-walk.jpeg';
import poolImg from '../images/13-142-151-pool.jpeg';
import backyardImg from '../images/13-142-363-backyard.jpeg';

const Gallery = () => {
  return (
    <div>
      
      <div className= "before-container"> 
      <h3> Before & After </h3>
      <img src={beforeImg} />
      </div>

      <div className= "stone-container"> 
      <h3> Stone Work </h3>
      <img src={stoneImg} />
      </div>
      
      <div className= "walk-container"> 
      <h3> Walkways & Driveways </h3>
      <img src={walkImg} /> 
      </div>
      
      <div className= "pool-container"> 
      <h3> Pool Landscapes </h3>
      <img src={poolImg} />
      </div>
      
      <div className= "backyard-container"> 
      <h3> Backyard Elements </h3>
      <img src={backyardImg} />
      </div>
      

    </div>
  )
}

export default Gallery;