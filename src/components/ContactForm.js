import "./ContactFormstyle.css";
import React from 'react'

const ContactForm = () => {
  return (
    <div className="form">
       <form>
        <label>Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="subject"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Write your message here"/>
         <button className="btn">Submit</button> 
        
        </form> 
    </div>
  );
};

export default ContactForm;
