import {React, useState} from 'react';
import '../css/Careers.css';

const Careers = () => {

  const URL = "http://localhost:4000/contact";

  const [newForm, setNewForm] = useState({
    name: "",
    // email: "",
    phone: "",
    // location: "",
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
      // email: "",
      phone: "",
      // location: "",
      message: "",
    });
  };


  return (
    <div className="careers-container">
        <h3 className="careers-title"> Join Scott's Landscaping, Inc. </h3>

        <p className="careers-p"> Scotts Landscaping is seeking skilled landscapers to join our team. Do you enjoy a fast-paced, dynamic environment? We're looking for candidates with a strong work ethic, and excellent communication skills. At Scott's we offers competitive pay and opportunities for career growth. Apply now! </p>

      <section className="careers-section">

                <h3>Application Form</h3>
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