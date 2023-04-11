import React from 'react';
import scott from '../images/scott-250x180.jpeg';
import charlene from '../images/Charlene_office_pic.jpeg';

const About = () => {
  return (
    <div className="about-container" >

      <div className="about-section-container" >
        <h3 className="about-section-h3" > About Us </h3>
          <p className="about-section-p"> Scott's Landscaping, Inc., established in 1985, is owned and operated by Scott Dryden, a lifelong resident of Hopkinton, MA. What started as a simple desire to work in the outdoors has grown into a thriving business that's dedicated to serving clients throughout New England. </p>
          <p className="about-section-p"> As a full-service lawn care and landscape management company, we're proud to offer comprehensive services that meet the needs of residential customers, commercial properties, contractors, and industrial facilities. From design to installation, maintenance to upkeep, we'll take care of every aspect of your landscaping needs. </p>
          <p className="about-section-p"> At Scott's Landscaping, Inc., we're committed to staying ahead of the curve when it comes to lawn maintenance, landscaping trends, and design techniques. Let us create a custom landscape that perfectly fits your style, needs, and budget. Join the growing list of satisfied customers who have trusted us to transform their outdoor spaces.</p>
          <p className="about-section-p"> Contact us today for your free, no-obligation estimate and proposal. We'll visit your home or business to discuss your vision and create the plan that works for you.</p>
      </div>

      <div className="about-team-container">
        <h3 className="about-team-h3"> Our Team </h3>
          <img className="about-team-image" src={scott} alt="owner" />
          <h3 className="about-team-name"> Scott Dryden </h3>
          <p className="about-team-p"> Owner </p>
            <img className="about-team-image" src={charlene} alt="office-manager" />
            <h3 className="about-team-name"> Charlene Daigle </h3>
            <p className="about-team-p"> Office Manager </p>
      </div>

    </div>
  )
}

export default About;