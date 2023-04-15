import React from 'react';
import { useState, useEffect } from 'react';
import '../css/Services.css';


const Services = () => {


   const [services, setServices] = useState(null);
 
   const getServicesData = async () => {
     
     const response = await fetch("./services.json");
     const data = await response.json();
     setServices(data);
 
   };
 
   useEffect(() => {
      getServicesData()
   },[]);


  return ( services ?
    <div className="services-container" >

      <div className="about-hero-container" > </div>

      <h3 className="services-container-h3"> Services </h3>
      <div className="services-content-flex">
        {services.map((servicesMap,serviceMapId) => 
          {
            return ( 
              <div className="services-content" key={serviceMapId}>
                <img src={servicesMap.icon} alt="service-image" />
                <h3> {servicesMap.name} </h3>
                <p> {servicesMap.description} </p>
              </div>
                  )
          }       )
        }
      </div>
      <h3 className="services-a-header"> Please contact us for more information and to schedule services</h3>
      <a href='./contact' className="services-a">Schedule a Consultation</a>
    </div> 
    :
    <p> Loading ... </p>
  )
}

export default Services;