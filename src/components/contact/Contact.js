import React, {useState} from 'react';
import "./Contact.css";
import axios from 'axios';

const ContactPage = (props) => {
  
  const [failSend, setFailSend] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const onSubmit = () => {
    setFailSend(true);
    // axios.post(process.env.REACT_APP_FORM_URL,
    //   {[process.env.REACT_APP_FORM_EMAIL]: email, [process.env.REACT_APP_FORM_MESSAGE]: message}).then(() =>
    //     {setEmail("");
    //     setMessage("");
    //   })
    //   .catch(() => {setFailSend(true)});
  }

  return (
    <div className = "Contact">
      {props.wideEnough ? 
      <div className = "Banner" /> : ""}
      <div class = {failSend ? "Fail-Send active" : "Fail-Send"} id = "Fail-Send">
        <span className="close-button" onClick={() => setFailSend(false)}>X</span> 
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