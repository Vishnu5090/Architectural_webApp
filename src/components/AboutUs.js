import React from 'react';
import { FaAward, FaUsers, FaProjectDiagram } from 'react-icons/fa';

import '../styles/components/AboutUs.css';

const AboutUs = () => {
  const stats = [
    { icon: <FaAward />, number: '5+', label: 'Years Experience' },
    { icon: <FaUsers />, number: '100+', label: 'Happy Clients' },
    { icon: <FaProjectDiagram />, number: '40+', label: 'Projects Completed' }
  ];

  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="about-header">
          <h2>Our Story</h2>
          <p>Creating spaces that inspire since 2020</p>
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
             At Aakaraa Designs, we harness the transformative power of architecture. Our name, "Aakaraa," derived from Sanskrit, signifies "form," "shape," and "appearance," reflecting our commitment to creating functional and visually stunning spaces.

With over 5 years of experience, we have become a trusted name in architectural design, serving more than 100 satisfied clients. Our talented team of architects and designers combines diverse perspectives to ensure each project harmonizes creativity with practicality.

At Aakaraa Designs, we don’t just build structures; we shape experiences.
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
