import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import gsap from 'gsap';
import '../styles/components/HeroSection.css';

// Image and text data
const heroContent = [
  {
    title: "Welcome to AAKARAA DESIGNS",
    subtitle: "Where visionary architecture meets exceptional craftsmanship",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d", // Grand entrance/welcome image
    cta: "Begin Your Journey"
  },
  {
    title: "Office Spaces",
    subtitle: "Productive environments with executive elegance",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    features: [
      "Ergonomic workstations",
      "Modern conference rooms",
      "Acoustic optimization",
      "Brand-consistent aesthetics"
    ],
    cta: "Explore Office Designs"
  },
  {
    title: "Neo-Classical Interiors",
    subtitle: "Timeless elegance meets modern functionality",
    image: "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-0318a68/www.decorilla.com/online-decorating/wp-content/uploads/2022/02/Neoclassical-house-interior-Home-designing.jpg", 
    features: [
      "Symmetrical layouts",
      "Ornamental detailing",
      "Luxurious fabrics",
      "Classical proportions"
    ],
    cta: "See Classical Styles"
  },
  {
    title: "Interior Solutions",
    subtitle: "Bespoke interiors crafted to perfection",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
    cta: "See Interiors"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-rotate slides
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroContent.length);
    }, 5000);
    
    return () => clearInterval(intervalRef.current);
  }, []);

  // Animation on slide change
  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0.8 },
      { opacity: 1, duration: 1, ease: "power2.inOut" }
    );
  }, [currentSlide]);

  return (
    <section className="hero" ref={heroRef}>
      {/* Background images */}
      <div className="hero-backgrounds">
        {heroContent.map((item, index) => (
          <div 
            key={index}
            className={`background-image ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          <h1 className={currentSlide === 0 ? "welcome-title" : ""}>
            {heroContent[currentSlide].title}
          </h1>
          <p className={currentSlide === 0 ? "welcome-subtitle" : ""}>
            {heroContent[currentSlide].subtitle}
          </p>
          <button className={`cta-btn ${currentSlide === 0 ? "welcome-btn" : ""}`}>
            {heroContent[currentSlide].cta}
          </button>
        </div>

        {/* Slide indicators */}
        <div className="slide-indicators">
          {heroContent.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <FaChevronDown />
      </div>
    </section>
  );
};

export default HeroSection;
