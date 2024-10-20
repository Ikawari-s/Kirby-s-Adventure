import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Designs/Css/OrganizeEvent.css'; // Ensure the CSS is correctly linked

const OrganizeEvent = () => {
  return (
    <div className='potato'>
      {/* Help Title */}
      <h1 className="help-title">We’re here to help</h1>

      {/* Navbar with Links */}
      <nav className="navbar">
        <Link className="nav-button" to="/find-events">Attending an event</Link>
        <Link className="nav-button active" to="/organize-events">Organizing an event</Link>
        <Link className="nav-button" to="/ticket-order">Ticket Order Information</Link>
        <Link className="nav-button" to="/payment">Managing Payments</Link>
      </nav>

      {/* Main Content Area */}
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
