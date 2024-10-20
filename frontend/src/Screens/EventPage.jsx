import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function EventPage() {
  const { id } = useParams(); // Get event id from URL
  const [event, setEvent] = useState(null); // State to hold event data

  useEffect(() => {
    // Fetch the event data from the backend using the id from the URL
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/events/${id}`); 
        if (!response.ok) {
          throw new Error("Failed to fetch event");
        }
        const data = await response.json();
        setEvent(data); // Update state with fetched event
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    fetchEvent(); // Call the fetch function
  }, [id]);

  if (!event) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>
        Start: {new Date(event.startDate).toLocaleString("en-US")}
        <br />
        End: {new Date(event.endDate).toLocaleString("en-US")}
      </p>
      <p>Location: {event.location}</p>
    </div>
  );
}

export default EventPage;
