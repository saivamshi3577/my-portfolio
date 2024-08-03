// src/components/About/About.js

import React from 'react';
import './About.css';
import profilePhoto from '../../images/profile-photo.png';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>Curious about me? Here you have it:</h2>
      <div className="about-content">
        <div className="about-image-container">
          <img src={profilePhoto} alt="Profile of Sai Vamshi" className="about-image" />
        </div>
        <div className="about-text">
          <h3>Profile</h3>
          <p>
            I'm a passionate and self-motivated developer with 1 year of experience specializing
            in full-stack development using React.js and Node.js. As a keen thinker, I am capable
            of working on products from ideation to development, focusing on user experience,
            pixel-perfect design, and writing clear, readable, and highly performant code. I also
            have experience with Java, the Spring Boot framework, and SQL. Besides coding, I
            love spending time on Twitter and Indie Hacker, observing early startups, and
            relaxing.
          </p>
          <p>
            Besides coding, I love spending time on Twitter and Indie Hacker, observing early
            startups, and relaxing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
