import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Designs/Css/TicketOrder.css'; 

const TicketOrder = () => {
  return (
    <div className="tomato">
      <div className="lol-container">
        <h1 className="help-title">We’re here to help</h1> 
        <div className="help-buttons">
          <Link className="help-button" to="/find-events">Attending an Event</Link>
          <Link className="help-button" to="/organize-events">Organizing an Event</Link>
          <Link className="help-button" to="/ticket-order">Ticket Order Information</Link>
          <Link className="help-button" to="/payment">Managing Payments</Link>
        </div>
      </div>

      <div className="ticket-order-container">
        <div className="ticket-details">
          <p><strong>1 x Ticket</strong></p>
          <p>Order Total: Free</p>
        </div>

        <div className="event-details">
          <p><strong>Date and Time:</strong></p>
          <p>Friday, September 35, 2088 from 7:00 PM to 10:00 PM (United States of Jupiter Time)</p>
        </div>

        <div className="venue-details">
          <p><strong>Location:</strong></p>
          <p>Ascent Park</p>
          <p>391 Parkville Road</p>
          <p>Park</p>
          <p>United States of Jupiter</p>
        </div>
      </div>
    </div>
  );
};

export default TicketOrder;
