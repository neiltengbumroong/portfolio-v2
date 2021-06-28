import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import './css/experience.css';
import './css/portfolio.css';

import AppleLogo from './images/AppleLogo.png';
import RocheLogo from './images/RocheLogo.png';
import OmniLogo from './images/OmniLogo.png';
import CPMHALogo from './images/CPMHALogo.png';

const Experience = () => (
  <div className="experience-wrapper">
    <div className="experience-margin-wrapper">
      <div className="experience-main-header">
        <p><b>Work Experience</b></p>
      </div>
      <div className="exp-wrapper">
        {/* Apple */}
        <div className="exp-row">
          <div className="exp-pic-wrapper">
            <img 
              src={AppleLogo}
              className="exp-pic"
              alt="exp-pic"
              height="150" 
              width="150" 
              style={{'display': 'block', 'borderRadius': '5%'}}
            />
          </div>
          <div className="exp-info-wrapper">
            <div className="exp-name">
              Apple
            </div>
            <div className="exp-info">
              <p>Software Engineer | Customer Systems Team</p>
              <div className="exp-info-extra">
                <p>Austin, TX | Aug 2021 - present</p>
              </div>           
            </div>
            <p className="exp-info-desc">On August 9, I will begin working at Apple as a full-stack and Java engineer. I'm incredibly excited
            and grateful for this opportunity, as Apple has always been a dream company of mine to work for. If you had told me 4 years ago,
            as an incoming psychology major and apsiring doctor, that my career would take such a turn, I would have called you crazy. Actually,
            I'd probably still call you crazy.<br/><br/> To be updated soon.
            </p>
          </div>
        </div>

        {/* Roche */}
        <div className="exp-row">
          <div className="exp-pic-wrapper">
            <img 
              src={RocheLogo}
              className="exp-pic"
              alt="exp-pic"
              height="150" 
              width="150" 
              style={{'display': 'block', 'borderRadius': '5%'}}
            />
          </div>
          <div className="exp-info-wrapper">
            <div className="exp-name">
              Roche
            </div>
            <div className="exp-info">
              <p>Software Engineering Co-Op</p>
              <div className="exp-info-extra">
                <p>Santa Clara, CA (remote) | Jan 2021 - June 2021</p>
              </div>           
            </div>
            <p className="exp-info-desc">At Roche, I worked as a full-stack co-op on the Navify Mutation Profiler team. Our product
            aids in tertiary analysis of next-gen sequencing (NGS), and we consume patient assays to generate a report tagged with 
            various genetic mutations and variants, along with their corresponding levels of severity and known studies to be
            reviewed by geneticists and lab technicians. <br/><br/> Personally, I created a PMID auto-linking feature, where user
            input that correlates to a specific report ID on PubMed would automatically generate a hyperlink in the report. I also
            fixed several defects from AWS's EC2 and S3 services to controller/database operations in Java and Angular errors in the UI. 
            </p>
          </div>
        </div>
        {/* OmniSync */}
        <div className="exp-row">
          <div className="exp-pic-wrapper">
            <img 
              src={OmniLogo}
              className="exp-pic"
              alt="exp-pic"
              height="150" 
              width="150" 
              style={{'display': 'block', 'borderRadius': '5%'}}
            />
          </div>
          <div className="exp-info-wrapper">
            <div className="exp-name">
              OmniSync, Inc.
            </div>
            <div className="exp-info">
              <p>Software Developer Intern</p>
              <div className="exp-info-extra">
                <p>San Diego, CA (remote) | Oct 2020 - Dec 2020</p>
              </div>           
            </div>
            <p className="exp-info-desc">At OmniSync, I worked as a primarily front-end developer intern, which used React
            and Tailwind CSS, and GraphQL for its API. I worked on various bug fixes and helped insert calls using Segment API
            to gain insight into user analytics. I was also reponsible for refactoring 50+ core application files from standard CSS to Tailwind CSS,
            and created an interface for a "Build Your Business" page on the company's primary product - TurboSBIR.
            </p>
          </div>
        </div>
        {/* CPMHA */}
        <div className="exp-row">
          <div className="exp-pic-wrapper">
            <img 
              src={CPMHALogo}
              className="exp-pic"
              alt="exp-pic"
              height="150" 
              width="150" 
              style={{'display': 'block', 'borderRadius': '5%'}}
            />
          </div>
          <div className="exp-info-wrapper">
            <div className="exp-name">
              Concussions, Pain, Mental Health Awareness
            </div>
            <div className="exp-info">
              <p>Software Engineering Intern</p>
              <div className="exp-info-extra">
                <p>Palm Beach Gardens, FL (remote) | June 2020 - Sept 2020</p>
              </div>           
            </div>
            <p className="exp-info-desc">At CPMHA, I designed, implemented, and tested a complete Jira clone/administrative system
            for all 20+ interns on the team. As my first full-scale independent project, I used the MERN stack and created functionality 
            to create interns, tasks, teams, and events for a calendar, and the ability to assign tasks to individuals and create 
            announcements for everyone to see. The project spanned the entire length of the internship, and more info can be found in 
            my "Featured Projects" section.
            </p>
          </div>
        </div>
      </div>
    </div>
      
  </div>
);

export default Experience;