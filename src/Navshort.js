import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Resume from './documents/NeilTengbumroong.pdf';
import { FaBars } from 'react-icons/fa';

import './css/nav.css';

class Navshort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    }

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render() {
    return (
      <nav className="navbar-short">
        <div className="short-first-link">
          <FaBars onClick={this.handleToggle}/>
        </div>
        {this.state.isExpanded ? 
          <div className="navlinks-row">
            <Link to="home" className="navshort-link" smooth={true}>Home</Link>
            <Link to="about" className="navshort-link" smooth={true}>About</Link>
            <Link to="portfolio" className="navshort-link" smooth={true}>Portfolio</Link>
            <a href={Resume} className="navshort-link" rel="nopener noreferrer">Resume</a>
            <Link to="contact" className="navshort-link" smooth={true}>Contact</Link>
          </div>
        :
          null
        }
      </nav>
    )
  }
  
}

export default Navshort;
