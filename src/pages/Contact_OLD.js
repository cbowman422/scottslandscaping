import React, { useState } from 'react';
import '../css/Contact.css'



const Contact = () => {
  const URL = "http://localhost:4000/contact";

  const [newForm, setNewForm] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setNewForm({ ...newForm, [e.target.name]: e.target.value });
  };

  const createContact = async (contactData) => {
    try {
      const newContact = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });
      const response = await newContact.json();
      // Once posted, the user will be notified 
      alert("Thank you, your message has been sent to Scott's Landscaping, Inc.");
      return response;
      
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    await createContact(newForm);
    setNewForm({
      name: "",
      phone: "",
      location: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">

      <h3 className="contact-h3">Contact</h3>

      <div className="contact-flex">

        <div className="map-container">
            <h3 className="map-container-title">Scotts Landscaping, Inc.</h3>
            <h3 className="map-container-address">P.O. Box 208 Hopkinton, MA 01748</h3>
            <a className="map-container-phone" href="tel:508-435-3911">508 435 3911</a>
            <a className="map-container-email" href = "mailto: office@scottslandscaping.org">office@scottslandscaping.org</a>
        </div>

        <div className="contact-flex-mid">

              <section className="contact-section">
                <h3>Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="Name :"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    value={newForm.phone}
                    name="phone"
                    placeholder="Phone # :"
                    onChange={handleChange}
                  />
                    <input
                    type="text"
                    value={newForm.location}
                    name="location"
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