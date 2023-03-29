import React from 'react'
import '../css/Home.css'

// Photo Imports
import expertise from '../images/home-expertise.jpeg';
import flexibility from '../images/home-flexibility.jpeg';
import attentionDetail from '../images/home-attention-detail.jpeg';
 

const Home = () => {


  return (
    <div className="home-container">
      
      <div className="hero-container" > 
         <h1> Scott's Landscaping, Inc. <span className=""> Hopkinton, MA </span></h1> 
         <h2> Scott's Landscaping is a full service lawn care, landscape management, and design company specializing in all areas of stonework.</h2>
         <a href="/" > Schedule a consultation </a>
      </div>
       
      <div className="home-welcome-statement-container">

        <h3> Welcome ! </h3>
        <p> Scott's offers service in New England to residential customers, contractors, commercial and industrial facilities. </p>
        <p> We offer our customers the advantage of one company to handle all of their landscaping needs.
        Contact us for your free, no-obligation estimate of services that best fits your needs as well
        as your budget.
        </p>


        <div className="home-welcome-details-container">
          <h3> What you can expect! </h3>
          <div className="home-welcome-details">
            <img src={expertise} alt="expertise"/>
            <h3>Expertise</h3>
            <p>
            With over 25 years of experience our team of experts can transform any outdoor area into a stunning oasis. From creating custom stonework to landscape design and maintenance we have the skill and knowledge to make your landscaping dreams a reality.
            </p>
          </div>
          <div className="home-welcome-details">
            <img src={flexibility} alt="flexibility"/>
            <h3>Flexibility</h3>
            <p>At Scott's we understand that each client and property is unique, and we take pride in our ability to adapt and customize our services to fit each individual project. </p>
          </div>
          <div className="home-welcome-details">
            <img src={attentionDetail} alt="attention to detail"/>
            <h3>Attention to Detail</h3>
            <p> From the initial consultation to the final touches, we are dedicated to ensuring that every detail is accounted for and executed flawlessly. </p>
          </div>

        </div>
      </div>

    </div>

  )
}

export default Home;



