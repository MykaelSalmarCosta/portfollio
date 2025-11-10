import React from 'react';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <p>Frontend Developer & Web Designer</p>
      </header>

      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer focused on creating beautiful and functional web applications.
        </p>
      </section>

      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {/* Add your project cards here */}
        </div>
      </section>

      <section className="contact-section">
        <h2>Get In Touch</h2>
        <div className="social-links">
          {/* Add your social media links here */}
        </div>
      </section>
    </div>
  );
};

export default Home;