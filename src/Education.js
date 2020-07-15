import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import './css/about.css';

const Education = () => (
  <div className="education-row-wrapper">
    <div className="education-header">
      <p className="education-header-paragraph">
        <strong>School:</strong> University of California, San Diego
      </p>
      <p className="education-header-paragraph">
        <strong>Degree/Major:</strong> B.S. Computer Science
      </p>
      <p className="education-header-paragraph">
        <strong>GPA:</strong> 3.48 &nbsp;<strong>Major GPA:</strong> 3.50
      </p>
      <p className="education-header-paragraph">
        <strong>Graduation Date:</strong> June 2021
      </p>
    </div>
    <div className="skills-row-header">
      <p><b>Some useful and relevant classes I've taken:</b></p>
    </div>
    <div className="skills-row">
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span><b>CSE 100</b> - Advanced Data Structures</p> 
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span><b>CSE 110</b> - Software Engineering</p>     
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span><b>CSE 101</b> - Design and Analysis of Algorithms</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span><b>CSE 134B</b> - Web Client Languages</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span><b>CSE 132A</b> - Database System Principles</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span><b>CSE 105</b> - Theory of Computation</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span><b>CSE 150B</b> - AI: Search and Reasoning</p>
      <p className="skill-item"><span className="skill-icon"><IoMdArrowDropright/></span><b>CSE 140</b> - Combinational Logic Design</p>       
    </div>
    <div className="skills-row-header">
      <p><b>Awards</b></p>
    </div>
    <div className="awards-row">
      <p className="award-item"><span className="skill-icon"><IoMdArrowDropright/></span>ITA Scholar Athlete (2018, 2019)</p> 
      <p className="award-item"><span className="skill-icon"><IoMdArrowDropright/></span>Team Rookie of the Year (2018)</p>           
    </div>
  </div>
);

export default Education;