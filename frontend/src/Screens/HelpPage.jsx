import React from "react";
import "../Designs/Css/HelpPage.css"; // Ensure you link the CSS file correctly

const HelpPage = () => {
  return (
    <div className="help-container">
      <h1 className="help-title">We’re here to help</h1>
      <div className="help-buttons">
        <button className="help-button">Attending an event</button>
        <button className="help-button">Organizing an event</button>
        <button className="help-button active">Ticket Order Information</button>
        <button className="help-button">Managing Payments</button>
      </div>
    </div>
  );
};

export default HelpPage;
