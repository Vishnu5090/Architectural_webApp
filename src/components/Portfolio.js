import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/components/Portfolio.css';
import Residential from '../assets/Residential/32.jpg';
import Commercial from '../assets/Commercial.jpg';
import Apartment from '../assets/Apartment.jpg';
import Iyyapnthangal from '../assets/Residential/Residential.jpg';
import Arun from '../assets/Residential/2.jpg';
import Anand from '../assets/interior/Anand.jpg';
import sb1 from '../assets/interior/sb1.jpg';
import image1 from '../assets/interior/image1.png';
import ed6 from '../assets/Residential/ed6.jpg';
import ed90 from '../assets/Residential/image2.png';
import Commercial1 from '../assets/image.png';

const projects = [
  {
    id: 1,
    title: "Mr. Raj Residence at ECR",
    category: "Residential",
    image: Residential,
  },
  {
    id: 2,
    title: "Commercial Building at Porur",
    category: "Commercial",
    image: Commercial,
  },
  {
    id: 3,
    title: "Apartment at Porur",
    category: "Residential",
    image: Apartment,
  },
  {
    id: 4,
    title: "Mr. Arun Residence at Ashok Pillar",
    category: "Residential",
    image: Arun,
  },
  {
    id: 5,
    title: "Mr. Anand at Kotturpuram",
    category: "Interior",
    image: Anand,
  },
  {
    id: 6,
    title: "Residence at Iyyappanthangal",
    category: "Residential",
    image: Iyyapnthangal,
  },
  {
    id: 7,
    title: "Apartment",
    category: "Residential",
    image: ed6,
  },
  {
    id: 8,
    title: "complex design",
    category: "Commercial",
    image: Commercial1,
  },
  {
    id: 9,
    title: "Bedroom Design",
    category: "Residential",
    image: sb1,
  },
  {
    id: 10,
    title: "WABI - SABI Style",
    category: "Residential",
    image: image1,
  },
  {
    id: 11,
    title: "Terrace Office",
    category: "Interior",
    image: ed90,
  },
  {
    id: 12,
    title: "Bedroom Design",
    category: "Residential",
    image: sb1,
  }
];

const Portfolio = () => {
  const portfolioRef = useRef(null);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const displayProjects = filteredProjects.slice(0, visibleProjects);

  const goToPrev = useCallback(() => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  }, [filteredProjects.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  }, [filteredProjects.length]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

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

  const openModal = useCallback((index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, goToPrev, goToNext, closeModal]);

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
                setVisibleProjects(6);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid" ref={portfolioRef}>
          {displayProjects.map((project, index) => (
            <div 
              className="portfolio-item" 
              key={project.id}
              onClick={() => openModal(filteredProjects.findIndex(p => p.id === project.id))}
            >
              <img src={project.image} alt={project.title} className="portfolio-img" />
              <div className="portfolio-overlay">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>

       {filteredProjects.length > 6 && (
  <div className="button-container"> {/* Add this div to center the button */}
    <button 
      onClick={toggleView} 
      className="view-toggle-btn" 
      aria-label={visibleProjects === 6 ? 'View all projects' : 'See less projects'}
    >
      {visibleProjects === 6 ? 'View All' : 'See Less'}
    </button>
  </div>
)}


        {isModalOpen && (
          <div className="image-modal">
            <div className="modal-overlay" onClick={closeModal}></div>
            <div className="modal-content">
              <button className="close-btn" onClick={closeModal}>&times;</button>
              <div className="modal-image-container">
                <img 
                  src={filteredProjects[currentImageIndex].image} 
                  alt={filteredProjects[currentImageIndex].title} 
                  className="modal-image"
                />
                <div className="image-info-bottom-right">
                  <h3>{filteredProjects[currentImageIndex].title}</h3>
                  <span className="project-category">
                    {filteredProjects[currentImageIndex].category}
                  </span>
                </div>
              </div>
              <button className="nav-btn prev-btn" onClick={goToPrev}>&#10094;</button>
              <button className="nav-btn next-btn" onClick={goToNext}>&#10095;</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;