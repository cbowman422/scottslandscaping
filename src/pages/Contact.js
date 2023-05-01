import React, { useState } from 'react';

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

      <section>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.email}
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.phone}
            name="phone"
            placeholder="phone"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.location}
            name="location"
            placeholder="location"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.message}
            name="message"
            placeholder="message"
            onChange={handleChange}
          />
          <button type="submit">Contact Us</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;