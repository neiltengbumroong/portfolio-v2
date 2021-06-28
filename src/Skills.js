import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import './css/about.css';

const Skills = () => (
  <div className="skills-row-wrapper">
    <div className="skills-row-header">
      <p>Here are some skills I've learned and worked with, either through my education or on my own time:</p>
    </div>
    <div className="skills-row">
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Java</p> 
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Python</p>     
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>JavaScript</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>TypeScript</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>SQL</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>NoSQL</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>HTML</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>CSS</p>
    </div>

    <div className="skills-row-header">
      <p>... and some tools and technologies I've used before:</p>
    </div>
    <div className="skills-row">
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>React</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Angular</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Express</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Node.js</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Bootstrap</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Cucumber</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>EC2, S3</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>PostgreSQL, SQLite</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>MongoDB</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Jenkins</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Git</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Docker</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Jira</p>
     </div>
  </div>
);

export default Skills;