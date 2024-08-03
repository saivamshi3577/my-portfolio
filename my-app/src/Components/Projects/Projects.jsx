// src/components/Projects/Projects.js

import React from 'react';
import './Projects.css';
import Project from './Project';

// Import project images
import project1Image from '../../images/project1.png';
import project2Image from '../../images/project2.png';
import project3Image from '../../images/project3.png';

const projectsData = [
  {
    title: 'IT Monks Website',
    description: `The IT Monks website, designed and developed with a responsive interface, leverages the MERN stack technology (MongoDB, Express.js, React.js, Node.js) for seamless performance. It ensures an intuitive user experience with pixel-perfect design and is deployed to efficiently handle various business needs and functionalities in real-time.`,
    technologies: [
      'React',
      'NodeJs',
      'Figma',
      'MongoDB',
      'Git',
    ],
    image: project1Image,
    link: '#',
  },
  {
    title: 'Downey Bail Bonds Website',
    description: `The Downey Bail Bonds website, built using the MERN stack technology (MongoDB, Express.js, React.js, Node.js), offers a responsive and user-friendly design. It streamlines the bail bond process with intuitive navigation and real-time updates, ensuring a seamless user experience while meeting client needs efficiently and effectively.`,
    technologies: [
      'React',
      'Node.js',
      'Javascript',
      'Express.js',
      'Figma',
      'css',
      'Html',
      'MongoDB',
      'Git',
    ],
    image: project2Image,
    link: '#',
  },
  {
    title: 'Expense Tracker',
    description: `The Expense Tracker application is built using Java Spring Boot and SQL, offering a robust and responsive interface for managing personal finances. It enables users to track expenses, categorize transactions, and generate insightful reports, ensuring a seamless user experience with real-time data updates and secure data management.`,
    technologies: [
      'React',
      'SQL',
      'Javascript',
      'Springboot',
      'Html',
      'css',
      'Figma',
      'Java',
      'Git',
    ],
    image: project3Image,
    link: '#',
  },
  {
    title: 'IMS Website',
    description: `The IMS Website is a comprehensive solution for managing inventory and sales operations. Developed using the MERN stack, it integrates modern technologies to deliver seamless inventory management, order processing, and real-time data insights. The platform's user-friendly interface ensures efficient business operations.`,
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Bootstrap',
      'Javascript',
      'Git',
    ],
    image: project3Image,
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Work</h2>
      <p>Some of the noteworthy projects I have built:</p>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
