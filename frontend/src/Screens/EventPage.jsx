import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import "../Designs/Css/EventPage.css";

function EventPage() {
  const { id } = useParams(); // Get event id from URL
  const [event, setEvent] = useState(null); // State to hold event data

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/events/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch event, status: ${response.status}`);
        }
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
  <div className="john"> 
    <div className="event-page-container">
      <h1 className="event-title">{event.title}</h1>
      <p className="event-description">{event.description}</p>
      <div className="event-details">
        <p>
          <strong>Start:</strong>{" "}
          {new Date(event.startDate).toLocaleString("en-US")}
        </p>
        <p>
          <strong>End:</strong>{" "}
          {new Date(event.endDate).toLocaleString("en-US")}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
      </div>
    </div>
  </div>   
  );
}

export default EventPage;
