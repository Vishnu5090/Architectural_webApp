import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import '../styles/components/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The team transformed our outdated office into a modern workspace that boosted employee morale and productivity. Their attention to detail was exceptional.",
      author: "Sarah Johnson",
      position: "CEO, TechSolutions Inc.",
      rating: 5,
      project: "Office Renovation"
    },
    {
      id: 2,
      quote: "Our home extension was completed on time and within budget. The architectural drawings were so precise that the builders had no questions during construction.",
      author: "Michael Chen",
      position: "Homeowner",
      rating: 5,
      project: "Residential Extension"
    },
    {
      id: 3,
      quote: "The 3D visualizations helped us visualize our restaurant concept before we committed to construction. This saved us thousands in potential redesign costs.",
      author: "Lisa Rodriguez",
      position: "Owner, Bistro Modern",
      rating: 4,
      project: "Commercial Interior"
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2>Client Testimonials</h2>
          <p>Hear what our clients say about working with us</p>
        </div>

        <div className="testimonial-slider">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-content">
                <FaQuoteLeft className="quote-icon" />
                <p>{testimonial.quote}</p>
              </div>
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                    <p className="project-name">{testimonial.project}</p>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < testimonial.rating ? 'star filled' : 'star'} 
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
