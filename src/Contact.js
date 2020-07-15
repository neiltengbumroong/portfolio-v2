import React from 'react';
import './css/contact.css';
import { FiMail } from 'react-icons/fi';

const Contact = () => (
  <div className="contact-wrapper">
    <div className="contact-margin-wrapper">
      <div className="contact-header">
        <p>Contact Me</p>
      </div>
      <p className="contact-text">
        I'm still on the lookout for a summer internship opportunity, so whether you're interested or 
        would just like to chat, my email's door is always open and I will try my best to always answer!
      </p>
      <div className="contact-icon">
        <a href="mailto: ntengbum@ucsd.edu" target="_blank" rel="noopener noreferrer" className="contact-icon-link"><FiMail/> </a>
      </div>
    </div>
    
  </div>
);

export default Contact;