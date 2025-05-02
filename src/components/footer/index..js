import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>PCOS Wellness</h2>
          <p>Your guide to understanding and managing PCOS, Menarche, and Menopause.</p>
        </div>

       

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 PCOS Wellness | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
