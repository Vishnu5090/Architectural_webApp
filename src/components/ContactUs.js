import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import '../styles/components/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = 'Enquiry from Website';
    const body = `
Name: ${formData.name}
Phone: ${formData.phone}

Message:
${formData.message}
`;

    // Gmail web compose link
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=studio@aakaraadesigns.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open Gmail in a new tab
    window.open(gmailLink, '_blank');

    // Reset form
    setFormData({
      name: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Have a project in mind or questions about our services? Contact us today.</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Our Office</h3>
                <p>S V TOWERS, Mount Poonamallee Rd, <br />Porur, Chennai-116.</p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>+91 8056263866<br />+91 8939555582</p>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>studio@aakaraadesigns.com</p>
              </div>
            </div>

            <div className="contact-item">
              <FaClock className="contact-icon" />
              <div>
                <h3>Hours</h3>
                <p>Monday - Friday: 9AM - 6PM<br />Saturday: By appointment only</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message via Gmail
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
