import React, { Component } from 'react';

import Skills from './Skills';
import Education from './Education';
import './css/about.css';


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'sk'
    }

  }

  changeMode(mode) {
    this.setState({ mode: mode });
  }

  render() {
    return (
      <div className="about-background-wrapper">
        <div className="about-margin-wrapper">
          <div className="about-row-wrapper">
            <div className="about-text">
              <p className="about-text-header">Hello! I'm Neil, a college student from West Covina, CA.</p>
              <p className="about-text-description">I currently attend the <a href="https://ucsd.edu/" target="_blank" rel="noopener noreferrer" className="bio-link">
                University of California, San Diego</a>, where I am working towards my degree in Computer Science. 
                I am also a member and co-captain of the <a href="https://ucsdtritons.com/sports/mens-tennis/roster/neil-tengbumroong/10541" 
                target="_blank" rel="noopener noreferrer" className="bio-link">NCAA Division 1 Men's Tennis Team</a>.
              </p>
              <p className="about-text-description">My current strengths and experience are in full-stack development, but really I'm fascinated
                by and interested in all things computer science. 
              </p>
              <p className="about-text-description">In my free time, I also like to surf, play the piano, and crank 90s in Fortnite.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="/images/ProfilePic.jpeg" 
                className="about-pic"
                alt="profile-pic"
                height="300" 
                width="300" 
                style={{'display': 'block', 'borderRadius': '5%'}}
                />
            </div>
          </div>
          <div className="extras-button-row">
            <button onClick={() => this.changeMode('sk')} className={this.state.mode === 'sk' ? "extras-button-active" : "extras-button"}>Skills and Languages</button>
            <button onClick={() => this.changeMode('ed')} className={this.state.mode === 'ed' ? "extras-button-active" : "extras-button"}>Education</button>
          </div>
          {this.state.mode === 'sk' ? <Skills/> : <Education/>}
          
        
        </div>
      </div>
    )
  }

}

export default About;