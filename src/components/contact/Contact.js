import React from 'react';
import "./Contact.css"

const ContactPage = () => {
  return (
    <div className = "Contact">
      <h1 className = "header">CONTACT ME!</h1>
      <p className = "field">EMAIL</p>
      <input className = "input email-input"/>
      <p className = "field">MESSAGE</p>
      <textarea className = "input" name= "message" cols="50"/>
      <div className = "submit">
        <button className = "button">SEND</button>
      </div>
    </div>
  )
}
 
export default ContactPage;