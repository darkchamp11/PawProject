import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
        <h1 className="animated-title">Creating <span className="highlight">Pawsitive</span> Spaces For Every Pet <span className="paw-icon">🐾</span></h1>
        <p className="hero-description">
          Join our movement to transform our city into a haven for pets and their humans.
          Together, we can build a community where every paw is welcome.
        </p>
        <div className="hero-buttons">
          <a href="#volunteer" className="btn btn-primary pulse">Join The Movement</a>
          <a href="#volunteer" className="btn btn-secondary">Volunteer Now</a>
          <a href="#stories" className="btn btn-accent">Learn More</a>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="hero-background">
        <svg className="hero-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M45.7,-76.3C58.9,-69.9,69.2,-56.5,76.4,-41.9C83.7,-27.2,87.9,-11.3,85.7,3.5C83.5,18.3,74.8,32,65.1,44.1C55.4,56.2,44.7,66.7,31.9,72.6C19.1,78.5,4.3,79.8,-10.9,78.5C-26.1,77.2,-41.7,73.3,-53.3,64.5C-64.9,55.7,-72.5,42,-77.3,27.5C-82.1,13,-84.1,-2.3,-80.3,-15.8C-76.5,-29.3,-66.9,-40.9,-55.5,-47.8C-44.1,-54.7,-30.9,-56.9,-18.8,-63.8C-6.7,-70.7,4.3,-82.3,17.4,-84.5C30.5,-86.7,45.7,-79.5,45.7,-76.3Z" transform="translate(100 100)" />
        </svg>
        
        <div className="floating-paws">
          <span className="floating-paw">🐾</span>
          <span className="floating-paw delay-1">🐾</span>
          <span className="floating-paw delay-2">🐾</span>
          <span className="floating-paw delay-3">🐾</span>
        </div>
      </div>
    </section>
  );
};


export default Hero;