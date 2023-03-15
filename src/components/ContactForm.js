import "./ContactFormstyle.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const form = useRef();
const [status, setStatus] = useState('')
  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm(
    'service_s5x3t56', 
    'template_ustar5u',
     form.current, 
     'nQKANl-CQdYVdIHnK')
      .then((result) => {
          console.log(result.text);
          setStatus('SUCCESS');
      }, (error) => {
          console.log(error.text);

      });
      // alert("Message Sent!")
  e.target.reset()
  }
  return (
    <div className="form">
      {status && renderAlert()}
       <form ref={form} onSubmit={sendEmail} >
        <label>Name</label>
        <input type="text" name="user_name"></input>
        <label>Email</label>
        <input type="email" name="user_email"></input>
        <label>Message</label>
        <textarea name= "message" rows="6" placeholder="Write your message here"/>
         <button className="btn">Submit</button> 
        
        </form> 
    </div>
  );
};

const renderAlert = () => (
  <div className="AlertMessage">
    <p>Message Sent!</p>
  </div>
)

export default ContactForm;

