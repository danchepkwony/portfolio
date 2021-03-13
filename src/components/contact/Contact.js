import React, {useState} from 'react';
import "./Contact.css";
import form from '../../form.json';
import axios from 'axios';

const ContactPage = (props) => {
  
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const onSubmit = () => {
    axios.post(form.RequestUrl,
      {[form.Email]: email, [form.Message]: message}).then(() =>
        {setEmail("");
        setEmail("");
      })
      .catch(() => {var errorMessage = document.getElementById("Fail-Send");
      errorMessage.style.display = "block"});
  }

  return (
    <div className = "Contact">
      {props.wideEnough ? 
      <div className = "Banner" /> : ""}
      <div id = "Fail-Send" className="Fail-Send">
        <span className="close-button" onClick={(e) => {e.target.parentElement.style.display = "none"}}>X</span> 
        There was a problem sending your message :(
    </div>
      <form className = "Text">
        <h1 className = "header">CONTACT ME</h1>
        <p className = "field">EMAIL</p>
        <input className = "input email-input" onChange={e => (setEmail(e.target.value))}/>
        <p className = "field">MESSAGE</p>
        <textarea className = "input" name= "message" cols="50" onChange={e => (setMessage(e.target.value))}/>
        <div className = "submit">
          <button type="reset" className = "button" onClick={onSubmit}>SEND</button>
        </div>
      </form>
    </div>
  )
}
 
export default ContactPage;