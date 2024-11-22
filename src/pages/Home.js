import React from 'react';
import { Link } from 'react-router-dom';  // Import Link component
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content" data-aos="fade-right">
          <h1>Welcome to SP Digital Marketing</h1>
          <p>Empowering businesses with digital growth and strategies that drive results.</p>
          <Link to="/contact" className="cta-button">Get Started</Link> {/* Using Link */}
        </div>
        <img src="/assets/hero-banner.jpg" alt="Digital Marketing" className="hero-image" />
      </section>

      {/* About Us Section */}
      <section className="about">
        <h2>Who We Are</h2>
        <p>
          At SP Digital Marketing, we are passionate about helping businesses grow. Our expert team delivers 
          personalized strategies for SEO, PPC, social media, and more to ensure your brand shines online.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-preview">
        <h2>What We Offer</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="/assets/seo.jpg" alt="SEO" />
            <h3>SEO</h3>
            <p>Boost your website’s ranking on Google with expert SEO services.</p>
          </div>
          <div className="service-card">
            <img src="/assets/ppc.jpg" alt="PPC" />
            <h3>PPC</h3>
            <p>Drive targeted traffic to your site with effective PPC campaigns.</p>
          </div>
          <div className="service-card">
            <img src="/assets/social-media.jpg" alt="Social Media" />
            <h3>Social Media Marketing</h3>
            <p>Engage and grow your audience on top social platforms.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Ready to Grow Your Business?</h2>
        <p>Contact us today and let’s make your digital dreams a reality.</p>
        <Link to="/contact" className="cta-button">Contact Us</Link> {/* Using Link */}
      </section>
    </div>
  );
}

export default Home;
