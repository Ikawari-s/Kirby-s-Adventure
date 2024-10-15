import React from "react";
import "../Designs/Css/HelpPage.css"; // Ensure you link the CSS file correctly
import { Link } from "react-router-dom";

const HelpPage = () => {
  return (
  <div className="container">
    <div className="help-container">
      <h1 className="help-title">We’re here to help</h1>
      <div className="help-buttons">
        <Link className="help-button" as={Link} to="/find-events">Attending an Event</Link>
        <Link className="help-button" as={Link} to="/organize-events">Organizing an Event</Link>
        <button className="help-button">Ticket Order Information</button>
        <Link className="help-button" as={Link} to="/payment">Managing Payments</Link>
      </div>
    </div>
  </div>  
  );
};

export default HelpPage;
