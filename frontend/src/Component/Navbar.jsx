import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './CSS/Navbar.css'; // Importing CSS for styling
import logo from './Assets/logo.png';
import Banner from './Banner';
import Features from './Features';
import Login from './Login';
import Service from './Service';
import Footer from './Footer';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" /> {/* Replace with your logo */}
        <span className="title">ToDo</span>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li> <Link to="/" >Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to="/login">
          <button className="login-button">Get Started</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
