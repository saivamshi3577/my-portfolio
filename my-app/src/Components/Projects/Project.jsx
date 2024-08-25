import React from 'react';
import './Project.css';

const Project = ({ title, description, technologies, image, link }) => {
  return (
    <div className="project">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M10.586 14.828l-1.414 1.414a4 4 0 01-5.657-5.657l1.414-1.414a1 1 0 10-1.414-1.414l-1.414 1.414a6 6 0 008.485 8.485l1.414-1.414a1 1 0 10-1.414-1.414zm3.828-5.656l1.414-1.414a4 4 0 015.657 5.657l-1.414 1.414a1 1 0 001.414 1.414l1.414-1.414a6 6 0 00-8.485-8.485l-1.414 1.414a1 1 0 101.414 1.414z"></path>
            <path d="M10 13a1 1 0 001 1h4a1 1 0 001-1V9a1 1 0 10-2 0v2h-2a1 1 0 00-1 1z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Project;
