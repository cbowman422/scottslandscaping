import React from 'react';
import '../css/Home.css';
 

const Home = () => {


  return (
    <div className="home-container">
      
      <div className="hero-container" > 
         <h1> Scott's Landscaping, Inc. <span className=""> Hopkinton, MA </span></h1> 
         <h2> Scott's Landscaping is a full service lawn care, landscape management and design company specializing in all areas of stonework.</h2>
         <a href='./contact' > Schedule a Consultation </a>

      </div>
       
       <div className="home-welcome-statement-container-shadow">
          <div className="home-welcome-statement-container">

            <h3> Experts in Landscape Architecture </h3>

            <p className="home-bio">
              At Scott's Landscaping, Incorporated we offer service in New England to residential customers, contractors, commercial and industrial facilities. 
              Scott's team of experienced professionals is well-versed in landscape design, landscape architecture, custom stone work, stone walls, architectural pool landscapes, walkways, driveways, backyard elements, and garden design.
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
                
                  <div className="home-welcome-details-img-expertise">
                      <h3 className="home-welcome-details-h3">
                        Expertise
                      </h3>
                      <a href='./about' className="home-welcome-details-a">Learn More About Scott's</a>
                  </div>
                    <div className="home-welcome-details-div-p-expertise">
                      <p className="home-welcome-details-p">
                        With over 35 years of experience Scott's can transform any outdoor area into a stunning oasis. From custom stonework to landscape design and maintenance we have the skills and knowledge to make your landscaping dreams a reality.
                      </p>
                    </div>
            </div>

            <div className="home-welcome-details-alt">
               
                 <div className="home-welcome-details-img-flexibility">
                    <h3 className="home-welcome-details-h3">
                      Flexibility
                    </h3>
                    <a href='./contact' className="home-welcome-details-a">Schedule a Consultation</a>
                  </div>
                    <div className="home-welcome-details-div-p-flexibility">
                      <p className="home-welcome-details-p">
                        At Scott's we understand that each client and property is unique, and take pride in our ability to adapt and customize our services to fit each individual project. 
                      </p>
                    </div>
            </div>

            <div className="home-welcome-details">
            
                  <div className="home-welcome-details-img-detail">
                    <h3 className="home-welcome-details-h3">
                      Attention to Detail
                    </h3>
                    <a href='./gallery' className="home-welcome-details-a">View Gallery</a>
                  </div>
                  <div className="home-welcome-details-div-p-detail">
                    <p className="home-welcome-details-p"> 
                      From the initial consultation to the final touches, we are dedicated to ensuring that every detail is accounted for and executed flawlessly. 
                    </p>
                  </div>
            </div>
          </div>
        </div>
      

    </div>

  )
}

export default Home;



