import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Footer from './Footer';
import Navbar from './Navbar';
import Navshort from './Navshort';
import Portfolio from './Portfolio';
import { Link, Element } from 'react-scroll';
import Headroom from 'react-headroom';

import './css/main.css';

class Main extends Component {

  render() {
    return (
      <>
        <div className="background-wrapper">
          <Element id="home"/>
          <Headroom
            style={{background: 'rgb(68, 146, 178)'}}
            upTolerance={5}
            downTolerance={5}>
              <Navbar/>
              <Navshort/>
          </Headroom>
 
          <div className="name-wrapper">
            <strong className="name-tag">Neil Tengbumroong</strong>
            <hr className="title-hr"/>
            <p>Software Engineer • Former NCAA Scholar-Athlete </p>
            <Link to="experience" smooth={true}>
              <button className="button learn-more-button">What am I up to?</button> 
            </Link>             
          </div>
        </div>
        <Element id="about">
          <About/>
        </Element>
        <Element id="experience">
          <Experience/>
        </Element>
        <Element id="portfolio">
          <Portfolio/>
        </Element>  
        <Element id="contact">
          <Contact/>
        </Element>
        <Footer/>          
       </>    
    )
  }
}

export default Main;