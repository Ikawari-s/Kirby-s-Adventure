import React from 'react';
import '../Designs/Css/OrganizeEvent.css';

const OrganizeEvent = () => {
  return (
    <div className="organize-event-page">
      <header className="header">
        <div className="logo">Logo</div>
      </header>
      <nav className="navbar">
        <button className="nav-button">Attending an event</button>
        <button className="nav-button active">Organizing an event</button>
        <button className="nav-button">Ticket Order Information</button>
        <button className="nav-button">Managing Payments</button>
      </nav>
      <main className="main-content">
        <div className="action-buttons">
          <div className="action-card">
            <img src="path/to/refund-icon.png" alt="Refund Icon" className="icon" />
            <button className="action-button">ISSUE A FULL OR PARTIAL REFUND</button>
          </div>
          <div className="action-card">
            <img src="path/to/email-icon.png" alt="Email Icon" className="icon" />
            <button className="action-button">EMAIL YOUR REGISTERED ATTENDEES</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrganizeEvent;
