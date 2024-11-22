import React from 'react';
// import '../styles/Footer.css'; // Import Footer-specific styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>SP Digital Marketing</h3>
        <p>Empowering businesses with digital excellence.</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} SP Digital Marketing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
