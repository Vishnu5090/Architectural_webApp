import React from 'react';
import { FaPaintBrush, FaHome, FaEye, FaProjectDiagram } from 'react-icons/fa';
import '../styles/components/Services.css';


const Services = () => {
  const services = [
    {
      icon: <FaPaintBrush className="service-icon" />,
      title: 'Interior Design',
      description: 'Transform your living spaces with our innovative interior design solutions. We specialize in space planning, lighting design, and bespoke furniture selection.',
      link: '#interior'
    },
    {
      icon: <FaHome className="service-icon" />,
      title: 'Exterior Design',
      description: 'Create stunning facades and outdoor living spaces with our landscape architecture and exterior design expertise for residential and commercial properties.',
      link: '#exterior'
    },
    {
      icon: <FaEye className="service-icon" />,
      title: '3D Visualization',
      description: 'Experience your project before construction begins with our photorealistic 3D renderings and virtual walkthroughs.',
      link: '#visualization'
    },
    {
      icon: <FaProjectDiagram className="service-icon" />,
      title: 'Project Management',
      description: 'From concept to completion, we oversee every detail to ensure your project is delivered on time, on budget, and exceeds expectations.',
      link: '#management'
    }
  ];

  return (
    <section className="services" id="services">
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
              <a href={service.link} className="service-cta">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
