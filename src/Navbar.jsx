// Navbar.jsx
import React, { useState } from 'react';
import './style.css'; // Ensure to import your CSS styles

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">Fitness App</a>
        </div>
        <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
