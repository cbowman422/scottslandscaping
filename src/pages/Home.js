import React from 'react'
import '../css/Home.css'
import image1 from '../images/13-164-068-walls.jpeg'

const Home = () => {
  return (
    <div>
       home
       <img className="heroHome" src={image1} alt="stone wall"/>
       <img className="heroHome" src={image1} alt="stone wall"/>
       <img className="heroHome" src={image1} alt="stone wall"/>
    </div>

  )
}

export default Home;