import {React, useState, useRef} from 'react';
import '../css/Careers.css';

import emailjs from '@emailjs/browser';

const Careers = () => {

  const [newForm, setNewForm] = useState({
    from_name: "",
    from_phone: "",
    from_email: "",
    from_address: "",
    message: "",
  });

  const handleChange = (e) => {
    setNewForm({ ...newForm, [e.target.name]: e.target.value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bqh7se3', 'contact_form', form.current, '4mhxTKYYjguD_KwoO')
      .then((result) => {
        alert("Thank you, your message has been sent to Scott's Landscaping, Inc.");
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  setNewForm({
            from_name: "",
            from_phone: "",
            from_email: "",
            from_address: "",
            message: "",
          });
      
  };


  return (
    <div className="careers-container">
        <h3 className="careers-title"> Join Scott's Landscaping, Inc. </h3>

        <p className="careers-p"> Scott's Landscaping, Inc. is one of the leading landscape design, build and maintenance companies in Hopkinton and surrounding towns. We are looking for full time, motivated individuals to fill openings in all departments installing high end residential landscapes. We offer highly competitive wages, great benefits and pension plan. Apply now! </p>

      <section className="careers-section">

                <h3>Application Form</h3>
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    value={newForm.from_name}
                    name="from_name"
                    placeholder="Name :"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    value={newForm.from_phone}
                    name="from_phone"
                    placeholder="Phone # :"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    value={newForm.from_email}
                    name="from_email"
                    placeholder="Email :"
                    onChange={handleChange}
                  />
                    <input
                    type="text"
                    value={newForm.from_address}
                    name="from_address"
                    placeholder="Address :"
                    onChange={handleChange}
                  />
                  <textarea 
                    className="contact-message"
                    rows = "7" 
                    cols = "22"
                    type="text"
                    value={newForm.message}
                    name="message"
                    placeholder="Message Details :"
                    onChange={handleChange}
                  />
                  <button className="careers-section-btn" type="submit" > Submit </button>
                </form>
        </section>
    </div>
  )
}

export default Careers;