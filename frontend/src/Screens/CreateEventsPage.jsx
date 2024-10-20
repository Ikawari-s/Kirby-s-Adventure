import React, { useState } from "react";
import Swal from "sweetalert2";
import "../Designs/Css/CreateEventsPage.css";

function CreateEventsPage() {
  const [pickerOpen, setPickerOpen] = useState({
    startDate: false,
    endDate: false,
  });

  const togglePicker = (inputName) => {
    const inputField = document.getElementsByName(inputName)[0];
    if (pickerOpen[inputName]) {
      inputField.blur();
    } else {
      inputField.showPicker();
    }

    setPickerOpen({
      ...pickerOpen,
      [inputName]: !pickerOpen[inputName],
    });
  };

  const [event, setEvent] = useState({
    title: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    // Check if all fields are filled
    if (
      !event.title ||
      !event.location ||
      !event.startDate ||
      !event.endDate ||
      !event.description
    ) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all fields before submitting.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return; // Stop the function if validation fails
    }

    // Convert local date to UTC
    const eventWithUTC = {
      ...event,
      startDate: new Date(event.startDate).toISOString(), // Convert startDate to UTC
      endDate: new Date(event.endDate).toISOString(), // Convert endDate to UTC
    };

    try {
      const response = await fetch("http://localhost:8000/api/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventWithUTC), // Send event with UTC dates
      });

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Event Created Successfully!",
          icon: "success",
          confirmButtonText: "OK",
          font: "Dancing Script",
        });

        // Reset form after successful creation
        setEvent({
          title: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Unable to Create Event. Please check that all required fields are completed correctly.",
          icon: "error",
          confirmButtonText: "OK",
          font: "Dancing Script",
        });
      }
    } catch (error) {
      console.error("Error creating event:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while creating the event.",
        icon: "error",
        confirmButtonText: "OK",
        font: "Dancing Script",
      });
    }
  };

  return (
    <div className="twat">
      <div className="event-form">
        <h2 className="dancing-font">
          <strong>Create an Event</strong>
        </h2>

        <div className="form-group">
          <label>Event Title</label>
          <input
            type="text"
            name="title"
            value={event.title}
            onChange={handleChange}
            placeholder="Enter event title"
          />
        </div>

        <div className="form-group">
          <label>Event Location</label>
          <input
            type="text"
            name="location"
            value={event.location}
            onChange={handleChange}
            placeholder="Enter event location"
          />
        </div>

        <div className="form-group">
          <label>Starts</label>
          <input
            type="datetime-local"
            name="startDate"
            value={event.startDate}
            onChange={handleChange}
            onClick={() => togglePicker("startDate")}
          />
        </div>

        <div className="form-group">
          <label>Ends</label>
          <input
            type="datetime-local"
            name="endDate"
            value={event.endDate}
            onChange={handleChange}
            onClick={() => togglePicker("endDate")}
          />
        </div>

        <div className="form-group">
          <label>Event Description</label>
          <input
            type="text"
            name="description"
            value={event.description}
            onChange={handleChange}
            placeholder="Enter event description"
          />
        </div>

        <div className="button-group">
          <button onClick={handleCreate}>CREATE</button>
        </div>
      </div>
    </div>
  );
}

export default CreateEventsPage;
