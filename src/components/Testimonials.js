import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import '../styles/components/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Transforming our vision into a stunning, functional villa was no easy task—but Aakaraa Designs nailed it. Every detail, from the grand staircase to the modular kitchen, reflects precision and creativity.",
      author: "Rohit Narayanan",
      position: "Entrepreneur",
      rating: 5,
      project: "Luxury Villa Interior"
    },
    {
      id: 2,
      quote:
        "We approached Aakaraa for a full-scale interior overhaul of our 5-floor corporate office. Their spatial planning and modern aesthetics boosted both employee productivity and brand image.",
      author: "Meera Kulkarni",
      position: "HR Head, Nexora Technologies",
      rating: 5,
      project: "Corporate Office Redesign"
    },
    {
      id: 3,
      quote:
        "Aakaraa Designs elevated our apartment interiors with premium finishes and thoughtful layouts. Their model flat presentation helped drive faster sales. Highly professional and detail-oriented.",
      author: "Sandeep Reddy",
      position: "MD, Reddy Infra Projects",
      rating: 5,
      project: "Builder Collaboration - Model Flat Design"
    },
    {
      id: 4,
      quote:
        "Renovating our 90-year-old heritage home was a dream come true. Aakaraa respected the legacy while bringing in smart, elegant solutions. It’s now a timeless blend of old and new.",
      author: "Anjali Iyer",
      position: "Classical Artist",
      rating: 5,
      project: "Heritage Home Restoration"
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
