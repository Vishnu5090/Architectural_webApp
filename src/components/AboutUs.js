import React from 'react';
import { FaAward, FaUsers, FaProjectDiagram } from 'react-icons/fa';

import '../styles/components/AboutUs.css';

const AboutUs = () => {
  const stats = [
    { icon: <FaAward />, number: '15+', label: 'Years Experience' },
    { icon: <FaUsers />, number: '200+', label: 'Happy Clients' },
    { icon: <FaProjectDiagram />, number: '50+', label: 'Projects Completed' }
  ];

  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="about-header">
          <h2>Our Story</h2>
          <p>Creating spaces that inspire since 2008</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
              alt="Our team collaborating in a modern office space" 
            />
          </div>

          <div className="about-text">
            <h3>Redefining Architectural Excellence</h3>
            <p>
              Founded in 2008, DesignArch has grown from a small studio to a leading architectural firm 
              known for innovative designs that blend functionality with aesthetic beauty. Our team 
              of award-winning architects and designers bring diverse perspectives to every project.
            </p>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">{stat.icon}</div>
                  <div>
                    <h4>{stat.number}</h4>
                    <p>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="learn-more-btn">
              Learn More About Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
