import React, { Component } from 'react';
import ProfilePic from './images/Neil_Profile_Pic.JPG';
import NeilTennis from './images/NeilTennis.jpg';

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
              <p className="about-text-header">Hello! I'm Neil, a recent college graduate based in Austin, TX.</p>
              <p className="about-text-description">I graduated from the <a href="https://ucsd.edu/" target="_blank" rel="noopener noreferrer" className="bio-link">
                University of California, San Diego</a>, where I received my B.S. in Computer Science. 
                I am also a former 4-year member and co-captain of the <a href="https://ucsdtritons.com/sports/mens-tennis/roster/neil-tengbumroong/10541" 
                target="_blank" rel="noopener noreferrer" className="bio-link">NCAA Division 1 Men's Tennis Team</a>.
              </p>
              <p className="about-text-description">My current strengths and experience are in full-stack development, but really I'm fascinated
                by and interested in all things computer science.
              </p>
              <p className="about-text-description">I started out as a Psychology major in 2017 wanting to attend medical school, and wrote my first ever line of code in January 2018.
              I bounced around to Cognitive Science, Data Science, and finally was admitted into the Computer Science major in April 2019. </p> 
              <p className="about-text-description">In my free time, I like to run, play the piano, and crank 90s
              in <a href="https://fortnitetracker.com/profile/all/neil%20is%20dogwater" target="_blank" rel="noopener noreferrer" className="bio-link">Fortnite</a>. I also 
              play a lot of <a href="https://rocketleague.tracker.network/rocket-league/profile/epic/neil%20is%20dogwater/overview" target="_blank" rel="noopener noreferrer" className="bio-link">Rocket League</a>,
              so make sure to be on the lookout for the streaming channel - coming soon!
              </p>
            </div>
            <div className="about-image">
              <img 
                src={ProfilePic}
                className="about-pic"
                alt="profile-pic"
                height="280" 
                width="400" 
                style={{'display': 'block', 'borderRadius': '5%'}}
                />
                <br/>
                <img 
                src={NeilTennis}
                className="about-pic"
                alt="profile-pic"
                height="280" 
                width="400" 
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