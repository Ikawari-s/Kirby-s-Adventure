import React from "react";
import "../Designs/Css/HelpPage.css"; // Ensure you link the CSS file correctly
import { Link } from "react-router-dom";

const HelpPage = () => {
  return (
    <div className="container">
      <div className="help-container">
        <h1 className="help-title">We’re here to help</h1>
        <div className="help-buttons">
          <Link className="help-button" to="/find-events">Attending an Event</Link>
          <Link className="help-button" to="/organize-events">Organizing an Event</Link>
          <Link className="help-button" to="/ticket-order">Ticket Order Information</Link>
          <Link className="help-button" to="/payment">Managing Payments</Link>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
