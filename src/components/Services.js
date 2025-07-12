import React, { useState } from 'react';
import { FaPaintBrush, FaHome, FaEye, FaProjectDiagram, FaBuilding, FaTools } from 'react-icons/fa';
import '../styles/components/Services.css';
import modernresi from '../assets/Services/modern-resi.jpg';  
import LuxuryInteriorDesign from '../assets/Services/Luxury-Interior-Design.png';
import LuxuryExDesign from '../assets/Services/image.png';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);

  const services = [
    {
      icon: <FaBuilding className="services-icon" />,
      title: 'Architecture',
      description: 'Design innovative and functional spaces that reflect your style and meet your needs.',
      content: (
        <>
          <p>Our comprehensive architectural services include:</p>
          <ul>
            <li>Concept development and space planning</li>
            <li>Site analysis and feasibility studies</li>
            <li>3D modeling and visualization</li>
            <li>Construction documentation and specifications</li>
          </ul>
        </>
      ),
      image: modernresi
    },
    {
      icon: <FaPaintBrush className="services-icon" />,
      title: 'Interior Design',
      description: 'Transform your living spaces with our innovative interior design solutions.',
      content: (
        <>
          <p>Our interior design services cover:</p>
          <ul>
            <li>Space planning and furniture layout</li>
            <li>Color scheme and material selection</li>
            <li>Lighting design and fixture specification</li>
            <li>Custom millwork and cabinetry design</li>
          </ul>
        </>
      ),
      image: LuxuryInteriorDesign
    },
    {
      icon: <FaHome className="services-icon" />,
      title: 'Exterior Design',
      description: 'Create stunning facades and outdoor living spaces with our expertise.',
      content: (
        <>
          <p>Our exterior design services include:</p>
          <ul>
            <li>Facade design and material selection</li>
            <li>Landscape architecture integration</li>
            <li>Outdoor living space design</li>
            <li>Lighting and hardscape planning</li>
          </ul>
        </>
      ),
      image: LuxuryExDesign
    },
    {
      icon: <FaTools className="services-icon" />,
      title: 'Construction',
      description: 'Quality craftsmanship and timely project delivery.',
      content: (
        <>
          <p>Our construction services feature:</p>
          <ul>
            <li>New building construction</li>
            <li>Renovations and additions</li>
            <li>Project scheduling and management</li>
            <li>Quality control and assurance</li>
          </ul>
        </>
      ),
    
    },
    {
      icon: <FaEye className="services-icon" />,
      title: '3D Visualization',
      description: 'Experience your project before construction begins.',
      content: (
        <>
          <p>Our visualization services include:</p>
          <ul>
            <li>Photorealistic 3D renderings</li>
            <li>Virtual walkthroughs and fly-throughs</li>
            <li>Material and finish simulations</li>
            <li>Daylight and lighting studies</li>
          </ul>
        </>
      ),
    
    },
    {
      icon: <FaProjectDiagram className="services-icon" />,
      title: 'Project Management',
      description: 'Overseeing every detail from concept to completion.',
      content: (
        <>
          <p>Our project management covers:</p>
          <ul>
            <li>Comprehensive project planning</li>
            <li>Budget development and tracking</li>
            <li>Schedule management</li>
            <li>Contractor coordination</li>
          </ul>
        </>
      ),
    
    }
  ];

  const openServicesModal = (service) => {
    setSelectedService(service);
    setIsServicesModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeServicesModal = () => {
    setIsServicesModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>Comprehensive architectural solutions tailored to your vision and needs</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              {service.icon}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button 
                onClick={() => openServicesModal(service)} 
                className="service-cta"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn more →
              </button>
            </div>
          ))}
        </div>

        {/* Services Modal */}
        {isServicesModalOpen && selectedService && (
          <div className="services-modal">
            <div className="services-modal-overlay" onClick={closeServicesModal}></div>
            <div className="services-modal-content">
              <button 
                className="services-modal-close" 
                onClick={closeServicesModal}
                aria-label="Close services modal"
              >
                &times;
              </button>
              
              <div className="services-modal-header">
                <div className="services-modal-icon">{selectedService.icon}</div>
                <h3>{selectedService.title}</h3>
              </div>
              
              <div className="services-modal-body">
                {selectedService.image && (
                  <div className="services-image-container">
                    <img 
                      src={selectedService.image} 
                      alt={selectedService.title} 
                      className="services-modal-image"
                      loading="lazy"
                    />
                  </div>
                )}
                
                <div className="services-modal-text">
                  {selectedService.content}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;