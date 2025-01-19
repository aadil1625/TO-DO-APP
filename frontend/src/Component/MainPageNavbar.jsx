import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import './CSS/Navbar.css';
import logo from './Assets/logo.png';
import Profile_logo from './Assets/profile-logo.png';

export default function MainPageNavbar() {
  const [userName, setUserName] = useState('');

  

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
          <li><Link to="/todo-page">Dashboard</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
   
        <Link to="/profile">
          <button className="login-button">Profile</button>
        </Link>
      </div>
    </nav>

  );
}
