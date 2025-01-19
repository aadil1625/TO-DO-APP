import React, { useState, useEffect } from 'react';
import './CSS/Profile.css';
import MainPageNavbar from './MainPageNavbar';
import Footer from './Footer';

export default function Profile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Fetch user data from backend (assumed API endpoint)
  useEffect(() => {
    fetch('http://localhost:4000/fetch') // Fetch user details from API
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send updated user data to backend API
    fetch('http://localhost:4000/profile-update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => {
        alert('Profile updated successfully!');
      })
      .catch((err) => {
        alert('Error updating profile');
        console.error(err);
      });
  };

  return (
    <>
    <MainPageNavbar/>
    <div className='profile'>
    <div className="profile-container">
      <div className='profile-form-container'>
      <h1>Update Your Profile</h1>
      <form className="profile-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />
  <br/>
        <button type="submit">Update Profile</button>
      </form>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}
