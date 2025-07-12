import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import gsap from 'gsap';
import '../styles/components/HeroSection.css';

// Image and text data
const heroContent = [
  {
    title: "<span style='color: #E0E0E0;'>Welcome to </span> <span style='color: #00FFFF;'>Aakaraa Designs</span>",
    subtitle: "Where visionary architecture meets exceptional craftsmanship",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    cta: "Begin Your Journey"
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
  },
  {
    title: "Interior Solutions",
    subtitle: "Bespoke interiors crafted to perfection",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
  },
  {
    title: "Terrace Office",
    subtitle: "Productive environments with executive elegance",
    image: "https://lh3.googleusercontent.com/b3Iy8pbFF6WS_SnuDQzl3j1DjILPybcP--fapHtSxWsjAIPJDYl6A1q9_R-jkLBoiXGjW9aC0q61Fq4Pc7KbnbDnHLvZuS4DkVlp8o8=w900-rw",
    features: [
      "Ergonomic workstations",
      "Modern conference rooms",
      "Acoustic optimization",
      "Brand-consistent aesthetics"
    ],
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

  const goToNext = () => {
    clearInterval(intervalRef.current);
    setCurrentSlide(prev => (prev + 1) % heroContent.length);
    restartInterval();
  };

  const goToPrev = () => {
    clearInterval(intervalRef.current);
    setCurrentSlide(prev => (prev - 1 + heroContent.length) % heroContent.length);
    restartInterval();
  };

  const restartInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroContent.length);
    }, 5000);
  };

  return (
    <section className="hero" ref={heroRef} id="home">
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

      {/* Navigation Arrows */}
      {currentSlide !== 0 && (
        <>
          <button className="hero-nav hero-nav-left" onClick={goToPrev}>
            <FaChevronLeft />
          </button>
          <button className="hero-nav hero-nav-right" onClick={goToNext}>
            <FaChevronRight />
          </button>
        </>
      )}

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          <h1
            className={currentSlide === 0 ? 'welcome-title' : ''}
            dangerouslySetInnerHTML={{ __html: heroContent[currentSlide].title }}
          />
          <p className={currentSlide === 0 ? 'welcome-subtitle' : ''}>
            {heroContent[currentSlide].subtitle}
          </p>
          {/* Render button only on welcome slide */}
          {currentSlide === 0 && (
            <button 
              className="welcome-btn" 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              {heroContent[currentSlide].cta}
            </button>
          )}
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
