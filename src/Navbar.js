import React from 'react';
import { Link } from 'react-scroll';

import './css/nav.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="home" className="first-link" smooth={true}>Home</Link>
    <Link to="contact" className="nav-link" smooth={true}>Contact</Link>
    <a href="NeilTengbumroong.pdf" className="nav-link">Resume</a>
    <Link to="portfolio" className="nav-link" smooth={true}>Portfolio</Link>
    <Link to="about" className="nav-link" smooth={true}>About</Link>
  </nav>
);

export default Navbar;
