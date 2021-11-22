import React, {useState} from 'react';
import "./Contact.css";
import axios from 'axios';

const ContactPage = (props) => {
  
  const [failSend, setFailSend] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    window.open("mailto:" + "dan.k.chepkwony@gmail.com" + "?subject=Interested in your portfolio!" + "&body=" + encodeURIComponent(message), "_blank");
  }

  return (
    <div className = "Contact">
      {props.wideEnough ? 
      <div className = "Banner" /> : ""}
      <div className = {failSend ? "Fail-Send active" : "Fail-Send"} id = "Fail-Send">
        <span className="close-button" onClick={() => setFailSend(false)}>X</span> 
        There was a problem sending your message :(
    </div>
      <form className = "Text">
        <h1 className = "header">CONTACT ME</h1>
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