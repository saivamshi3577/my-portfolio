// src/components/Skills/Skill.js

import React from 'react';
import PropTypes from 'prop-types';
import './Skill.css';

const Skill = ({ name, image }) => {
  return (
    <div className="skill-item">
      <img src={image} alt={name} className="skill-image" />
      <p>{name}</p>
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Skill;
