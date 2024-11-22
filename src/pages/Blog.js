import React from 'react';
import '../styles/Blog.css'; // Link to the CSS file

function Blog() {
  const blogs = [
    {
      title: "5 Essential Digital Marketing Trends in 2024",
      description: "Stay ahead of the competition by understanding the latest trends in digital marketing.",
      image: "/assets/digital-trends.jpg",
      date: "November 15, 2024",
      link: "/blog/digital-trends-2024",
    },
    {
      title: "How to Boost Your SEO Rankings Effectively",
      description: "Discover actionable SEO tips to improve your website's visibility on search engines.",
      image: "/assets/seo-tips.jpg",
      date: "October 10, 2024",
      link: "/blog/boost-seo-rankings",
    },
    {
      title: "Social Media Strategies for Small Businesses",
      description: "Learn how to leverage social media to grow your brand and connect with customers.",
      image: "/assets/social-strategies.jpg",
      date: "September 25, 2024",
      link: "/blog/social-media-strategies",
    },
  ];

  return (
    <div className="blog">
      <section className="blog-header">
        <h1>Our Blog</h1>
        <p>Insights, tips, and strategies to help you thrive in the digital world.</p>
      </section>

      <section className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <div className="blog-footer">
                <span>{blog.date}</span>
                <a href={blog.link} className="read-more">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Blog;
