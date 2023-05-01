import React, { useState } from 'react';
import '../css/Contact.css'

const Contact = () => {
  const URL = "http://localhost:4000/contact";

  const [newForm, setNewForm] = useState({
    name: "",
    email: "",
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
      return newContact.json();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newContact = await createContact(newForm);
    setNewForm({
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <h3>Contact us, where do you live?</h3>

      <div className="contact-flex">

        <section className="contact-section">
          <h2>Contact Us</h2>
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
                value={newForm.email}
                name="email"
                placeholder="Email :"
                onChange={handleChange}
              />
            <input
              type="text"
              value={newForm.location}
              name="location"
              placeholder="Location for Estimate :"
              onChange={handleChange}
            />
            <textarea 
              className="contact-message"
              rows = "5" 
              cols = "30"
              type="text"
              value={newForm.message}
              name="message"
              placeholder="Message Details :"
              onChange={handleChange}
            />
            <button type="submit">Contact Us</button>
          </form>
        </section>

        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112334.23537620694!2d-71.60565905499556!3d42.2587478748035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e474f384ae20b1%3A0xf8e89a162281fd0c!2sHopkinton%2C%20MA!5e1!3m2!1sen!2sus!4v1682963786510!5m2!1sen!2sus"
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          className="map">
        </iframe>

      </div>

    </div>
  );
};

export default Contact;