import React from 'react';
import logo from './Assets/logo.png';  // Adjust path to your logo file
import './CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-title">
          <img src={logo} alt="Logo" className="footer-logo" />
          <h2 className="footer-title">ToDo App</h2>
        </div>
        <div className="footer-info">
          <p>&copy; 2024 ToDo App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
