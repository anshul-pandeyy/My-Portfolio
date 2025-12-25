import React from 'react'
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";


const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "84a013bc-9cbd-4d31-8499-50c8b01ef1cf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
        alert("Email Sent Successfully! Thank you for reaching out."); 
        event.target.reset();
    } else {
        alert("Error! Message not sent. Please try again later.");
    }
};

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I’m currently open to new roles and technical collaborations. Whether you're looking to build a scalable web application, discuss Java-based system logic, or explore D2C e-commerce strategies, let’s connect and build something impactful.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /><p>okanshul1404@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /><p>Lucknow, India (Open to Relocation)</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /><p>+91 9305471002</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor=''>Your name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor=''>Your e-mail</label>
            <input type="email" placeholder='Enter your email address' name='email'/>
            <label htmlFor=''>Subject</label>
            <input type="text" placeholder='Subject' name='subject'/>
            <label htmlFor=''>Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
