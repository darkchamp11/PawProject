import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <span>🐾 Pet-Friendly City</span>
        </div>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#" onClick={handleSmoothScroll}>Home</a></li>
            <li><a href="#volunteer" onClick={handleSmoothScroll}>Volunteer</a></li>
            <li><a href="#stories" onClick={handleSmoothScroll}>Stories</a></li>
            <li><a href="#adoption" onClick={handleSmoothScroll}>Adoption</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;