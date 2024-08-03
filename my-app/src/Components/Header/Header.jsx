// src/components/Header/Header.js

import React from 'react';
import './Header.css';
import NavBar from '../Navbar/NavBar';
import headerImage from '../../images/header-image.png'; // Update the image path

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <div className="header-content">
        <div className="intro-section">
          <h1>Hi, I’m Sai Vamshi</h1>
          <p>
            I'm a full-stack developer focused on React.js & Node.js, passionate about creating and seamlessly designing
            interactive digital experiences that are clean, accessible, visually appealing, and optimized.
          </p>
          <p className="location">
            <strong>Location:</strong> <span>Hyderabad, India</span>
          </p>
          <p className="availability">Available for new projects</p>
          <div className="social-links">
            {/* Add links to your social profiles */}
            <a href="https://www.instagram.com/saivamshi_chary_/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/sai-vamshi-chary-45495a272/" target="_blank" rel="noopener noreferrer">
              <img src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-3mmtnow6.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/saivamshi3577" >
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
            </a>
          </div>
        </div>
        <div className="header-image-container">
          <img src={headerImage} alt="Sai Vamshi" className="header-image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
