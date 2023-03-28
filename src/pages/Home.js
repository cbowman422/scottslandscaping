import React from 'react'
import '../css/Home.css'
import image1 from '../images/13-164-068-walls.jpeg'

const Home = () => {
  return (
    <div className="home-container">

      <div className="hero-container" > 
         <h1> Scott's Landscaping, Inc. <span className=""> Hopkinton, MA </span></h1> 
         <h2> Scott's Landscaping is a full service lawn care, landscape management, and design company specializing in all areas of stonework.</h2>
         <a> Schedule a consultation </a>
      </div>
       
      <div className="home-welcome-statement">
        <h3> Welcome ! </h3>
        <p> Scott's offers service in New England to residential customers, contractors, commercial and industrial facilities. </p>
        <p> We offer our customers the advantage of one company to handle all of their landscaping needs.
        Contact us for your free, no-obligation estimate of services that best fits your needs as well
        as your budget.
        </p>
      </div>

    </div>

  )
}

export default Home;



{/* <img className="heroHome" src={image1} alt="stone wall"/> */}