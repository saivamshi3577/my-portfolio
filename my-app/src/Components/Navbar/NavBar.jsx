// src/components/Navbar/Navbar.js

import React from 'react';
import './NavBar.css';
import LOGO from '../../images/Logo.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/"><img src={LOGO} alt="Logo" className="logo" /></a>
        </div>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
