import React, { useState } from 'react';
import img1 from "./Assets/Banner.png";
import './CSS/Banner.css';
import Navbar from "./Navbar";
import Features from './Features';
import Service from './Service';
import Login from './Login';
import Footer from './Footer';

export default function Banner() {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="banner-container"> {/* Flex container */}
          <div className="banner-content"> {/* Left content */}
            <h1 className='banner-welcome'>Welcome to Your Personal Task Manager !!</h1><br/><br/>
            <h2>Stay Organized, Stay Productive </h2><br/>
            <p>
              Manage your daily tasks efficiently and never miss a deadline again.
              Our To-Do List App is designed to help you stay on top of your tasks and boost your productivity. 
              Whether you're managing daily chores, work projects, or long-term goals, our app simplifies task management 
              to ensure nothing slips through the cracks.<br/><br/>
            </p>
            {showMore && (
              <div> {/* Changed to div for better layout control */}
                <h4>Our Mission</h4>
                Our goal is simple, to help you stay organized and stress-free. We believe that better task management
                leads to better time management, helping you achieve more in less time.
                <br /><br/>
                <h4>Get Started Now!</h4><br/>
                Sign Up or Log In to start creating your to-do list.<br />
                Begin adding tasks and ticking them off as you complete them.
                <br /><br />
                <b>Your productivity starts here!</b><br/><br/>
              </div>
            )}
            <button onClick={handleShowMore}>
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>
          <div className="banner-img"> {/* Right image */}
            <img src={img1} alt="Banner" />
          </div>
        </div>
      </div>

      <Features />
      <Login />
      <Service />
      <Footer />
    </>
  );
}
