import React, { useEffect, useRef } from 'react';
import '../styles/components/Portfolio.css';

// Sample project data
const projects = [
  {
    id: 1,
    title: "Modern Villa",
    category: "Residential",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1j0YW09Pl57VgMyCy_sVNc3K6D10SG4XB7Q&s"
  },
  {
    id: 2,
    title: "Office Complex",
    category: "Commercial",
    image: "https://www.niveeta.com/images/extra/oic-2.webp"
  },
  // Add more projects...
];

const Portfolio = () => {
  const portfolioRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const items = portfolioRef.current.querySelectorAll('.portfolio-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <h2>Our Portfolio</h2>
          <p>Explore our diverse collection of architectural designs that showcase our creativity and expertise.</p>
        </div>

        <div className="portfolio-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Residential</button>
          <button className="filter-btn">Commercial</button>
          <button className="filter-btn">Interior</button>
          <button className="filter-btn">Exterior</button>
        </div>

        <div className="portfolio-grid" ref={portfolioRef}>
          {projects.map(project => (
            <div className="portfolio-item" key={project.id}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="portfolio-img" 
              />
              <div className="portfolio-overlay">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
