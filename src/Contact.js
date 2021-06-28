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
        If you thought my website (or anything I did) was at least somewhat cool, feel free to reach out!
        My email is always open and I'd love to chat!
      </p>
      <div className="contact-icon">
        <a href="mailto: neil.tengbumroong@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-icon-link"><FiMail/> </a>
      </div>
    </div>
    
  </div>
);

export default Contact;