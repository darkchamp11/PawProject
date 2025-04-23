import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Pet-Friendly City</h3>
            <p>Creating a better world for pets and their humans, one paw at a time.</p>
            <div className="social-links">
              <a href="#">📱</a>
              <a href="#">📘</a>
              <a href="#">📸</a>
              <a href="#">🐦</a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#volunteer">Volunteer</a></li>
              <li><a href="#stories">Success Stories</a></li>
              <li><a href="#adoption">Pet Adoption</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-links">
              <li>📧 info@petfriendlycity.org</li>
              <li>📞 (555) 123-4567</li>
              <li>📍 123 Paw Street, Pet City</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pet-Friendly City. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;