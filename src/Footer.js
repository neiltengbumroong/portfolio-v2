import React from 'react';
import './css/footer.css';

import { FiInstagram, FiFacebook, FiMail } from 'react-icons/fi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => (
  <div className="footer-wrapper">
    <p>Personal Website V2 - Updated June 2021</p>
    <p>Designed and Implemented by Neil Tengbumroong</p>
    <div className="social-row">
      <a href="mailto: neil.tengbumroong@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-icon-link"><FiMail/> </a>
      <a href="https://www.facebook.com/teil.neng" target="_blank" rel="noopener noreferrer"><span><FiFacebook/></span></a>
    </div>
    <div className="social-row">
      <a className="social-link" href="https://www.facebook.com/teil.neng" target="_blank" rel="noopener noreferrer"><span className="social-icon"><FiFacebook/></span></a>
      <a className="social-link" href="https://www.instagram.com/neil_teng" target="_blank" rel="noopener noreferrer"><span className="social-icon"><FiInstagram/></span></a>
      <a className="social-link" href="https://www.linkedin.com/in/neil-tengbumroong-555131192/" target="_blank" rel="noopener noreferrer"><span className="social-icon"><AiFillLinkedin/></span></a>
      <a className="social-link" href="https://github.com/neiltengbumroong" target="_blank" rel="noopener noreferrer"><span className="social-icon"><AiFillGithub/></span></a>
    </div>
  </div>
);

export default Footer;