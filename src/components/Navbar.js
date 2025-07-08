import React, { useState } from 'react';
import '../styles/components/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">DesignArch</div>
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
        
        <button 
          className={`hamburger ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
