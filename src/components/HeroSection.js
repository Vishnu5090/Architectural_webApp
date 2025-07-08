import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/components/HeroSection.css';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setLoaded(true);
  }, []);

  return (
    <section className={`hero ${loaded ? 'loaded' : ''}`}>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Architectural Excellence <span>Redefined</span></h1>
          <p className="hero-subtitle">
            We craft spaces that inspire – blending innovation, functionality and timeless design
          </p>
          <div className="hero-cta">
            <button className="primary-btn">
              View Our Portfolio <FaArrowRight className="arrow-icon" />
            </button>
            <button className="secondary-btn">Get Free Consultation</button>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="image-overlay"></div>
        <img 
          src="https://futurestiles.com/wp-content/uploads/2024/08/20-Trending-Normal-House-Front-Elevation-Designs-in-2024.jpg" 
          alt="Modern architectural building with clean lines and large windows"
          className="hero-image"
        />
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="arrow-down"></div>
      </div>
    </section>
  );
};

export default HeroSection;
