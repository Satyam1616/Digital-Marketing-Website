import React from 'react';
import '../styles/About.css'; 

function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About SP Digital Marketing</h1>
        <p>
          Your trusted partner for innovative digital marketing solutions, 
          tailored strategies, and measurable results.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At SP Digital Marketing, our mission is to empower businesses by harnessing 
          the potential of digital platforms. We aim to deliver cutting-edge strategies 
          to help our clients grow and succeed in an ever-evolving digital landscape.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-why">
        <h2>Why Choose Us?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>Expert Team</h3>
            <p>Our experienced professionals ensure your campaigns deliver maximum ROI.</p>
          </div>
          <div className="why-card">
            <h3>Customized Strategies</h3>
            <p>We design unique solutions tailored to your business goals.</p>
          </div>
          <div className="why-card">
            <h3>Proven Results</h3>
            <p>We focus on data-driven results to help you achieve measurable success.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="about-testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>
            "SP Digital Marketing transformed our online presence. Their expert team delivered 
            outstanding results that exceeded our expectations!"
          </p>
          <h4>- Sarah Johnson, CEO of TechHub</h4>
        </div>
        <div className="testimonial">
          <p>
            "Thanks to SP Digital Marketing, our website traffic has doubled in just three months. 
            Highly recommend their services!"
          </p>
          <h4>- Mark Wilson, Founder of Foodies' Delight</h4>
        </div>
      </section>
    </div>
  );
}

export default About;
