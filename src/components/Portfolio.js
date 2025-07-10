import React, { useEffect, useRef, useState } from 'react';
import '../styles/components/Portfolio.css';
import im from '../assets/terreceoffice.png';


const projects = [
  {
    id: 1,
    title: "Modern Villa",
    category: "Residential",
    image: im
  },
  {
    id: 2,
    title: "Office Complex",
    category: "Commercial",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGUZCweePomyJDIX8EY4OVXDr0slk77O8UxCp2-iwsvmWPVVpPAgk7Ah98_TPQrLcshO8&usqp=CAU"
  },
  {
    id: 3,
    title: "Luxury Apartment",
    category: "Residential",
    image: "https://media.designcafe.com/wp-content/uploads/2022/07/15170350/luxury-home-design-on-budget.jpg"
  },
  {
    id: 4,
    title: "Shopping Mall",
    category: "Commercial",
    image: "https://example.com/mall.jpg"
  },
  {
    id: 5,
    title: "Urban Loft",
    category: "Interior",
    image: "https://example.com/loft.jpg"
  },
  {
    id: 6,
    title: "Hotel Lobby",
    category: "Interior",
    image: "https://cdn0.weddingwire.in/vendor/5493/3_2/960/jpg/hotel-design-hotel-chennai-by-justa-chennai-hotel-space-3_15_365493-161831561312802.jpeg"
  },
  {
    id: 7,
    title: "Cozy Cabin",
    category: "Residential",
    image: "https://example.com/cabin.jpg"
  },
  {
    id: 8,
    title: "Modern Office",
    category: "Commercial",
    image: "https://example.com/modern-office.jpg"
  },
  {
    id: 9,
    title: "Stylish Interior",
    category: "Interior",
    image: "https://example.com/stylish-interior.jpg"
  }
];

const Portfolio = () => {
  const portfolioRef = useRef(null);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const displayProjects = filteredProjects.slice(0, visibleProjects);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const items = portfolioRef.current?.querySelectorAll('.portfolio-item') || [];
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, [displayProjects]);

  const toggleView = () => {
    setVisibleProjects(prev => prev === 6 ? filteredProjects.length : 6);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <h2>Our Portfolio</h2>
          <p>Explore our collection of architectural designs</p>
        </div>

        <div className="portfolio-filters">
          {['All', 'Residential', 'Commercial', 'Interior'].map(category => (
            <button 
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter(category);
                setVisibleProjects(6); // Reset to show 6 projects when filter changes
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid" ref={portfolioRef}>
          {displayProjects.map(project => (
            <div className="portfolio-item" key={project.id}>
              <img src={project.image} alt={project.title} className="portfolio-img" />
              <div className="portfolio-overlay">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > 6 && (
          <button 
            onClick={toggleView} 
            className="view-toggle-btn" 
            aria-label={visibleProjects === 6 ? 'View all projects' : 'See less projects'}
          >
            {visibleProjects === 6 ? 'View All' : 'See Less'}
          </button>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
