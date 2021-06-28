import React from 'react';
import { Link } from 'react-scroll';
import Resume from './documents/NeilTengbumroong.pdf';

import './css/nav.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="home" className="first-link" smooth={true}>Home</Link>
    <Link to="contact" className="nav-link" smooth={true}>Contact</Link>
    <a href={Resume} target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
    <Link to="portfolio" className="nav-link" smooth={true}>Portfolio</Link>
    <Link to="experience" className="nav-link" smooth={true}>Experience</Link>
    <Link to="about" className="nav-link" smooth={true}>About</Link>
  </nav>
);

export default Navbar;
