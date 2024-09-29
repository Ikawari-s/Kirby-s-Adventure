import React, { useState } from "react";
import GuestHeader from "../Components/GuestHeader";
import "../Designs/Css/CreateEventsPage.css";

function CreateEventsPage() {
  const [event, setEvent] = useState({
    title: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [pickerOpen, setPickerOpen] = useState({
    startDate: false,
    endDate: false,
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

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

  const handleSave = () => {
    alert("Event Saved!");
  };

  const handleEdit = () => {
    alert("Editing Event...");
  };

  const handleDiscard = () => {
    setEvent({ title: "", location: "", startDate: "", endDate: "", description: "" });
    alert("Changes Discarded!");
  };

  return (
    <>
      <div className="container">
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
              style={{ cursor: "pointer" }}
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
              style={{ cursor: "pointer" }}
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
            <button onClick={handleSave}>Save</button>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDiscard}>Discard</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateEventsPage;
