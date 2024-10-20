import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import GuestHeader from "../Components/GuestHeader";
import "../Designs/Css/FindEventsPage.css";

function FindEventsPage() {
  const [events, setEvents] = useState([]); // State to hold events
  const navigate = useNavigate(); // Initialize useNavigate for redirecting to event page

  useEffect(() => {
    // Fetch the created events from the backend when the component mounts
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/events/");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data); // Update state with fetched events
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents(); // Call the fetch function
  }, []);

  const formatDateTime = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "Asia/Manila",
    };
    const date = new Date(dateString); // Ensure this date is in UTC format
    return date.toLocaleString("en-US", options);
  };

  const handleEventClick = (id) => {
    navigate(`/event/${id}`); // Redirect to the EventPage with the event id
  };

  return (
    <>
      <div className="rap">
        <div className="amazing">
          <h2 className="widget-title">
            <strong>Upcoming Events</strong>
          </h2>
          <hr className="event-underline" />

          <ul className="event-list">
            {events.map((event, index) => (
              <li
                className="event"
                key={index}
                onClick={() => handleEventClick(event.id)} // Trigger the click handler
              >
                <div className="date">
                  <time>
                    <span className="start-duration">
                      {formatDateTime(event.startDate)}
                    </span>
                    <span className="to-duration"> - to - </span>
                    <span className="end-duration">
                      {formatDateTime(event.endDate)}
                    </span>
                    <br />
                    <span className="location">{event.location}</span>
                  </time>
                  <i className="fas fa-minus minimize-icon"></i>
                </div>

                <div className="info">
                  <h2 className="title">{event.title}</h2>
                  <p className="desc">{event.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FindEventsPage;
