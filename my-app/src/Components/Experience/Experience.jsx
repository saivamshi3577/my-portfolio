// src/components/Experience/Experience.js

import React from 'react';
import './Experience.css';

// Image imports
import company1Logo from '../../images/company1.png';
import company2Logo from '../../images/company2.png';
import company3Logo from '../../images/company3.png';

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-card">
        <div className="logo-container">
          <img src={company1Logo} alt="Company 1 Logo" className="company-logo" />
        </div>
        <div className="experience-details">
          <h3>Jr. Software Developer</h3>
       
          <ul>
            <li>Team Coordination and Project Management</li>
            <li>Improving the user experience</li>
            <li>Collaborating with designers</li>
          </ul>
        </div>
        <p>Jan 2024 - Present</p>
      </div>

      <div className="experience-card">
        <div className="logo-container">
          <img src={company2Logo} alt="Company 2 Logo" className="company-logo" />
        </div>
        <div className="experience-details">
          <h3>Intern</h3>
         
          <ul>
            <li>Managed a team of 3 developers</li>
            <li>Developed robust web applications</li>
            <li>Implemented best coding practices</li>
          </ul>
        </div>
        <p>June 2023 - Jan 2024</p>
      </div>

      <div className="experience-card">
        <div className="logo-container">
          <img src={company3Logo} alt="Company 3 Logo" className="company-logo" />
        </div>
        <div className="experience-details">
          <h3>Project Intern</h3>
          
          <ul>
            <li>Algorithm Development</li>
            <li>Worked on multiple projects</li>
            <li>Improved code quality</li>
          </ul>
        </div>
        <p>Jan 2023 - June 2023</p>
      </div>
    </section>
  );
};

export default Experience;
