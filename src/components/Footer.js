import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import '../styles/components/Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Interior Design',
    'Exterior Design',
    '3D Visualization',
    'Space Planning',
    'Project Management',
    'Renovation'
  ];

  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-col">
          <h3 className="footer-logo">AAKARAA DESIGNS</h3>
          <p className="footer-about">
            Creating innovative architectural solutions that blend functionality with aesthetic excellence.
          </p>
          <div className="social-links" aria-label="Social Media Links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://www.instagram.com/aakaraadesigns" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links" aria-label="Quick Links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links" aria-label="Services">
            {services.map((service, index) => (
              <li key={index}>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4 className="footer-title">Contact Us</h4>
          <div className="contact-info" aria-label="Contact Information">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>S V TOWERS, <br />Mount Poonamallee Rd, <br/> Porur, Chennai-116.</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+91 8056263866</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>aakaraadesigns@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaClock className="contact-icon" />
              <span>Mon-Fri: 9AM - 6PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} AAKARAA DESIGNS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
