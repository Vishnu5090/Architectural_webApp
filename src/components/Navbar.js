import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.PNG'; // Replace with your logo path
import '../styles/components/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-wrapper">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="logo-image"
            // Ensures black logo remains black
          />
          <span className="logo-text">AAKARAA DESIGNS</span>
        </div>
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
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
