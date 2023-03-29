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
         <h2> Scott's Landscaping is a full service lawn care, landscape management and design company specializing in all areas of stonework.</h2>
         <a href="/" > Schedule a consultation </a>
      </div>
       
       <div className="home-welcome-statement-container-shadow">
          <div className="home-welcome-statement-container">

            <h3> Experts in Landscape Architecture </h3>

            <p className="home-bio">
              At Scott's Landscaping, Inc. We offer service in New England to residential customers, contractors, commercial and industrial facilities. 
              Scott's team of experienced professionals is well-versed in landscape design, landscape architecture, custom stone work, stone walls, architectural pool landscapes, walkways, driveways, backyard elements, landscape lighting, and garden design.
              </p>
              <p className="home-bio">
              Whether you're looking to enhance your home's curb appeal or create a peaceful sancutary in your backyard, Scott's will transform your outdoor space into a beautiful and inviting extension of your home.
            </p>

          </div>
       </div>

        <div className="home-welcome-details-container">
            <h3 className="home-welcome-details-intro"> What to Expect </h3>
          <div className="home-welcome-details-container-bg">
            <div className="home-welcome-details">
              <img src={expertise} alt="expertise"/>
              <h3>
                Expertise
              </h3>
              <p>
                With over 25 years of experience Scott's team of professionals can transform any outdoor area into a stunning oasis. From custom stonework to landscape design and maintenance we have the skills and knowledge to make your landscaping dreams a reality.
              </p>
              <a>Learn more about the team</a>
            </div>

            <div className="home-welcome-details-alt">
              <img src={flexibility} alt="flexibility"/>
              <h3>
                Flexibility
              </h3>
              <p>
                At Scott's we understand that each client and property is unique, and we take pride in our ability to adapt and customize our services to fit each individual project. 
              </p>
              <a>Schedule a consultation</a>
            </div>

            <div className="home-welcome-details">
              <img src={attentionDetail} alt="attention to detail"/>
              <h3>
                Attention to Detail
              </h3>
              <p> 
                From the initial consultation to the final touches, we are dedicated to ensuring that every detail is accounted for and executed flawlessly. 
              </p>
              <a>Go to the Portfolio</a>
            </div>
          </div>
        </div>
      

    </div>

  )
}

export default Home;



