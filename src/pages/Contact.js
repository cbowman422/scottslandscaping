import React, { useState, useRef } from 'react';
import '../css/Contact.css'

import emailjs from '@emailjs/browser';

const Contact = () => {

  // setting form state to objects with empty strings
  const [newForm, setNewForm] = useState({
    from_name: "",
    from_phone: "",
    from_email: "",
    from_address: "",
    message: "",
  });

  // on text changes set new form state to new strings value
  const handleChange = (e) => {
    setNewForm({ ...newForm, [e.target.name]: e.target.value });
  };

  // The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.
  const form = useRef();

  // EmailJS connection function to send emails, an Alert, AND reset form state
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8h9qehf', 'contact_form', form.current, 'EPPUvENMMcbFODozg')
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

  // JSX
  return (
    <div className="contact-container">

      <h3 className="contact-h3">Contact</h3>

      <div className="contact-flex">

        <div className="map-container">
            <h3 className="map-container-title">Scott's Landscaping, Inc.</h3>
            <h3 className="map-container-address">P.O. Box 208 Hopkinton, MA 01748</h3>
            <a className="map-container-phone" href="tel:508-435-3911">508 435 3911</a>
            <a className="map-container-email" href = "mailto: office@scottslandscaping.org">office@scottslandscaping.org</a>
        </div>

        <div className="contact-flex-mid">

              <section className="contact-section">
                <h3>Send a Message</h3>
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
                  <button className="contact-section-btn" type="submit" > Submit </button>
                </form>
              </section>

                  <iframe 
                    title="mapFrame"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112334.23537620694!2d-71.60565905499556!3d42.2587478748035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e474f384ae20b1%3A0xf8e89a162281fd0c!2sHopkinton%2C%20MA!5e1!3m2!1sen!2sus!4v1682963786510!5m2!1sen!2sus"
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="map">
                  </iframe>

        </div>



      </div>

    </div>
  );
};

export default Contact;