import React from 'react';
import './CSS/Features.css';

export default function Features() {
  return (
    <div>
    <div className="features-container">
      <h1>Features</h1>

      <div className="feature-card">
        <h3>Easy Task Management</h3>
        <p>Quickly add, edit, and delete tasks with an intuitive interface.</p>
      </div>
      <div className="feature-card">
        <h3>Prioritize & Organize</h3>
        <p>Set deadlines and prioritize tasks to stay focused on what matters.</p>
      </div>
      <div className="feature-card">
        <h3>Real-Time Sync</h3>
        <p>Access your tasks across all your devices with real-time synchronization.</p>
      </div>
      <div className="feature-card">
        <h3>Flexible & Accessible</h3>
        <p>Access your to-do list from any device, anywhere, with seamless syncing across platforms.</p>
      </div>
      <div className="feature-card">
        <h3>Customizable</h3>
        <p>Tailor your task lists to your needs with priority settings, tags, and color-coded categories.</p>
      </div>
      <div className="feature-card">
        <h3>Track Your Progress</h3>
        <p>Mark tasks as completed and see your progress over time.</p>
      </div>
    </div>


    </div>
  );
}
