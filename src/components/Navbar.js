import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/Logo.png'; 
import '../styles/components/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle link click
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-wrapper">
          {logo && (
              <img 
                src={logo} 
                alt="Company Logo" 
                className="logo-image"
              />
          )}

          <span className="logo-text">AAKARAA DESIGNS</span>
        </div>
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#portfolio" onClick={handleLinkClick}>Portfolio</a>
          <a href="#services" onClick={handleLinkClick}>Services</a>
          <a href="#about" onClick={handleLinkClick}>About Us</a>
          <a href="#testimonials" onClick={handleLinkClick}>Testimonials</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>
        
        <button 
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
