import React from 'react';
import '../styles/Services.css'; // Correct path for styles folder
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();



function Services() {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Boost your website's visibility and rank higher on search engines.",
      icon: "fas fa-chart-line",
    },
    {
      title: "Social Media Management",
      description: "Engage your audience and grow your brand on social platforms.",
      icon: "fas fa-share-alt",
    },
  
    {
      title: "Content Marketing",
      description: "Create valuable content that resonates with your audience.",
      icon: "fas fa-pen-nib",
    },
    {
      title: "Video Editing",
      description: "Professional video editing services to captivate your audience.",
      icon: "fas fa-video",
    },
    {
      title: "Graphic Designing",
      description: "Creative designs to make your brand stand out.",
      icon: "fas fa-paint-brush",
    },
  ];

  return (
    
    <div className="services">
      <section className="services-header">
        <h1>Our Services</h1>
        <p>Discover the wide range of digital marketing services we offer to help your business thrive.</p>
      </section>

      <section className="services-grid">
  {services.map((service, index) => (
    <div
      key={index}
      className="service-card"
      data-aos="fade-up" // Animation type
      data-aos-delay={`${index * 100}`} // Delay for staggered effect
    >
      <i className={service.icon}></i>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
    </div>
  ))}
</section>

    </div>
  );
}

export default Services;
