import React, { Component } from 'react';
import About from './About';
import Navbar from './Navbar';
import Navshort from './Navshort';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import { Link, Element } from 'react-scroll';
import Headroom from 'react-headroom';

import './css/main.css';



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

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
            <p>Aspiring Software Engineer • NCAA Student-Athlete </p>
            <Link to="portfolio" smooth={true}>
              <button className="button learn-more-button">View My Work</button> 
            </Link>             
          </div>
        </div>
        <Element id="about">
          <About/>
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