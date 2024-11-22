import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A scalable e-commerce platform built with React and Node.js.",
      image: "/assets/ecommerce.jpg",
      link: "https://example.com/ecommerce",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase projects and skills.",
      image: "/assets/portfolio.jpg",
      link: "https://example.com/portfolio",
    },
    {
      title: "Digital Marketing Dashboard",
      description: "An analytics dashboard to track marketing campaigns and KPIs.",
      image: "/assets/marketing-dashboard.jpg",
      link: "https://example.com/dashboard",
    },
  ];

  return (
    <div className="projects">
      <section className="projects-header">
        <h1>Our Projects</h1>
        <p>Explore some of the projects we've delivered to help businesses grow.</p>
      </section>

      <section className="projects-grid">
  {projects.map((project, index) => (
    <div
      key={index}
      className="project-card"
      data-aos="zoom-in"
      data-aos-delay={`${index * 150}`} // Stagger animations
    >
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project
        </a>
      </div>
    </div>
  ))}
</section>

    </div>
  );
}

export default Projects;
