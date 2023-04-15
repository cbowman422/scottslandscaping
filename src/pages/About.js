import React from 'react';
import '../css/About.css';

import quotes from '../images/double-quotes.png'
import scott from '../images/scott-250x180.jpeg';
import charlene from '../images/Charlene_office_pic.jpeg';

const About = () => {


  return (
    <div className="about-container" >

      <div className="about-hero-container" >
      </div>

      <div className="about-section-container-shadow">
        <div className="about-section-container" >
          <h3 className="about-section-h3" > About Us </h3>
            <p className="about-section-p"> Scott's Landscaping, Inc., established in 1985, is owned and operated by Scott Dryden, a lifelong resident of Hopkinton, MA. What started as a simple desire to work in the outdoors has grown into a thriving business that's dedicated to serving clients throughout New England. </p>
            <p className="about-section-p"> As a full-service lawn care and landscape management company, we're proud to offer comprehensive services that meet the needs of residential customers, commercial properties, contractors, and industrial facilities. From design to installation, maintenance to upkeep, we take care of every aspect of your landscaping needs. </p>
            <p className="about-section-p"> Contact us today for your free, no-obligation estimate and proposal. We'll visit your home or business to discuss your vision and create the plan that works for you.</p>
            <a href='./contact' > Schedule a Consultation </a>
        </div>
      </div>


        <h3 className="about-team-h3"> Our Team </h3>
      <div className="about-team-container">

        <div className="about-team-container-style">

            <img className="about-team-image" src={scott} alt="owner" />
            <h3 className="about-team-name"> Scott Dryden </h3>
            <p className="about-team-p"> Owner </p>

        </div>

        <div className="about-team-container-style">

            <img className="about-team-image" src={charlene} alt="office-manager" />
            <h3 className="about-team-name"> Charlene Daigle </h3>
            <p className="about-team-p"> Office Manager </p>

      </div>


      </div>

      <div className="about-testimonials-container">
        <h3 className="about-testimonials-h3"> What our Customers are Saying </h3>
          <div className="about-testimonials-content-container"> 
            <div className="about-testimonials-content-p-containers">
              <img src={quotes} alt="quotes-text" />
              <p>
              <span> Sandra F. </span>from<span>  Hopkinton, MA .</span>
              <br/>
              " It has been our complete pleasure working with Scott Dryden of Scott's Landscaping, Inc. for all our landscaping and masonry needs. We have been clients of Scott's since 1995. Scott has a magnificcent eye for taking the humdrum and turning it into a inviting, relaxing area. He is always there in case of emergency as well. Scott has a proven track record of being a man of his word. He is fair and honest in his pricing and his quote is his word. His crew is quick and efficient and are friendly faces on the property. Scott takes the worry out of all my landscape needs. "
              </p>
            </div>

            <div className="about-testimonials-content-p-containers" >
              <img src={quotes} alt="quotes-text" />
              <p>
              <span> Debbie C. </span>from<span> Hopkinton, MA .</span>
              <br/>
              " Scott's Landscaping has been providing us with exemplary service for over 11 years. They have done work for us in numerous capacities. We have utilized their lawn care, mowing, and fertilization programs. They provide our Spring and Fall cleanup, and tree and shrub maintenance and pruning. Following a severe storm, we had extensive damage and instead of having to hire a tree company Scott's was able have our yard looking perfect again.
              
              Scott offered creative use on landscaping and built the stone walls when we were putting in our pool which gave the area an appealing look all year round. He even worked with my husband to build our outdoor stero speakers into the stone wall surrounding the pool.

              Scott's is reliable, dependable, reasonably priced and willing to go the extra mile to satisfy their customers. It is a pleasure to recommend their service to new customers. We would be happy to provide more information upon request. "          
              </p>
            </div>

            <div className="about-testimonials-content-p-containers" >
              <img src={quotes} alt="quotes-text" />
              <p>
              <span> Michael D. </span>from<span>  Hopkinton, MA . </span>
              <br/>
              "Scott and his crews completely transformed our front landscape, including tree and shrub removal, transplanting and new lawn installation.  All of the work done exceeded my expectations which were high because I knew of Scott's reputation before I hired him which is why I hired him.  

              The whole organization is very professional, they show up on time on the days they say they would come, work extremely hard, pay attention to detail, and have the equipment and people with the experience and knowledge to make your plantings and lawn look perfect.  

              Scott always took the time to check in with me to make sure all aspects of the project, no matter how minor, were to my specifications.  I've worked with quite a few landscapers who were all good, but if you want great, I highly recommend Scott's Landscaping. "  
              </p>
            </div>
    
          </div>
        
      </div>

    </div>
  )
}

export default About;