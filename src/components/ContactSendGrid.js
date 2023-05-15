import React from 'react';
import sgMail from '@sendgrid/mail';

const ContactSendGrid = () => {

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const sendEmail = async (req, res) => {
    try {
      // console.log("REQ.BODY", req.body);
      await sendgrid.send({
        to: "mannuarora7000@gmail.com", // Your email where you'll receive emails
        from: "manuarorawork@gmail.com", // your website email address here
        subject: `${req.body.subject}`,
        html: `<div>You've got a mail</div>`,
      });
    } catch (error) {
      // console.log(error);
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  
    return res.status(200).json({ error: "" });
  }
  

  return (
    <div>ContactSendGrid</div>
  )
}

export default ContactSendGrid;

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'office@scottslandscaping.org', // Change to your recipient
  from: 'office@scottslandscaping.org', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })