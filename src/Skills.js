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
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>C++</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>JavaScript</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>React</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Node JS</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>SQL</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>NoSQL</p>        
    </div>

    <div className="skills-row-header">
      <p>... and some tools and technologies I've used before:</p>
    </div>
    <div className="skills-row">
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Git</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>REST APIs</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>MongoDB</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Maven</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Vim</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Docker</p>     
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Bootstrap</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>JUnit</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>Firebase</p>  
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span>SQLite</p>
     </div>
  </div>
);

export default Skills;