import React from 'react';
import '../styles/Contact.css';


function Contact() {
  return (
    <div className="contact">
      {/* Header Section */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions or want to work with us? We’d love to hear from you!</p>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      {/* Contact Details Section */}
      <section className="contact-details">
        <h2>Our Contact Details</h2>
        <div className="details-grid">
          <div className="details-card">
            <h3>Address</h3>
            <p>123 Digital Street, Tech City, IN 45678</p>
          </div>
          <div className="details-card">
            <h3>Email</h3>
            <p>contact@spdigitalmarketing.com</p>
          </div>
          <div className="details-card">
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
