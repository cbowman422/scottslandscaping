import React from 'react'
import '../css/Home.css'
import image1 from '../images/13-164-068-walls.jpeg'

const Home = () => {
  return (
    <div className="homeContainer">

      <div className="heroContainer" > 
         <h1> Scott's Landscaping, Inc. <span className=""> Hopkinton, MA </span></h1> 
         <h2> Scott's Landscaping is a full service lawn care, landscape management, and design company specializing in all areas of stonework.</h2>
         <a> Shedule a consultation </a>
      </div>
       
    </div>

  )
}

export default Home;



{/* <img className="heroHome" src={image1} alt="stone wall"/> */}