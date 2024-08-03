// src/components/Skills/Skills.js

import React from 'react';
import './Skills.css';
import Skill from './Skill';

// Import images from src folder
import javascriptImage from '../../images/javascript.png';
import reactImage from '../../images/react.png';
import nodejsImage from '../../images/nodejs.png';
import expressjsImage from '../../images/expressjs.png';
import mongodbImage from '../../images/mongodb.png';
import javaImage from '../../images/java.png';
import springbootImage from '../../images/springboot.png';
import sqlImage from '../../images/sql.png';
import figmaImage from '../../images/figma.png';
import gitImage from '../../images/git.png';

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', image: javascriptImage },
    { name: 'React', image: reactImage },
    { name: 'Node.js', image: nodejsImage },
    { name: 'Express.js', image: expressjsImage },
    { name: 'MongoDB', image: mongodbImage },
    { name: 'Java', image: javaImage },
    { name: 'Spring Boot', image: springbootImage },
    { name: 'SQL', image: sqlImage },
    { name: 'Figma', image: figmaImage },
    { name: 'Git', image: gitImage },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <p>The skills, tools and technologies I am really good at:</p>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <Skill key={index} name={skill.name} image={skill.image} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
