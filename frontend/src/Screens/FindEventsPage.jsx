import React, { useEffect, useState } from "react";
import GuestHeader from "../Components/GuestHeader";
import "../Designs/Css/FindEventsPage.css";

function FindEventsPage() {
  const [events, setEvents] = useState([]); // State to hold events

  useEffect(() => {
    // Fetch the created events from the backend when the component mounts
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/events/"); // Adjust the endpoint as needed
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

  return (
    <>
      <div className="row" style={{ zIndex: 1000, marginTop: "-35vh" }}>
        <div className="small-12 columns">
          <h2 className="widget-title">
            <strong>Upcoming Events</strong>
          </h2>
          <hr className="event-underline" />

          <ul className="event-list">
            {events.map((event, index) => (
              <li className="event" key={index}>
                <div className="date">
                  <time>
                    <span className="start-duration">{event.startDate}</span>
                    <span className="to-duration"> - to - </span>
                    <span className="end-duration">{event.endDate}</span>
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
