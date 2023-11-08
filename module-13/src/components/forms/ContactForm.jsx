import { useState } from 'react';
import './contact-form.style.css'

const ContactForm = () => {

  const [message, setMessage] = useState({fullName:"", email:"", message:""})

  const onChange = (e, key)=>{

    setMessage(
      {...message, [key]:e.target.value}
    )
  }

  const formHandler = async (e)=>{
    e.preventDefault()
    console.log(message)
  }
  return (
    <div>
      <form onSubmit={e => formHandler(e)}>
        <label htmlFor="fullName">Your Name</label>
        <input type="text" name='fullName' onChange={e=>onChange(e, "fullName")}/>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' onChange={e=>onChange(e, "email")}/>
        <label htmlFor="message">Your message</label>
        <textarea name="message" id="" onChange={e=>onChange(e, "message")} />
        <input type="submit" />      
      </form>
      
    </div>
  );
};

export default ContactForm;