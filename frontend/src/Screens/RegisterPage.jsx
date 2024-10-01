import React, { useState } from "react";
import "../Designs/Css/RegisterPage.css"; // Adjust the path as necessary
import GuestHeader from "../Components/GuestHeader";
import { Form, Button } from "react-bootstrap";
import PinkLogo from "../Designs/Images/PinkLogo.png";
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [registerFormData, setRegisterFormData] = useState({});

  const handleRegisterChange = (e) => {
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", registerFormData);
  };

  return (
    <div>
      {/* Left Section: Form */}
      <div className="left-section">
        <div className="form-container">
          <img src={PinkLogo} alt="Logo" id="LoginLogo" />
          <form onSubmit={handleRegisterSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              onChange={handleRegisterChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleRegisterChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleRegisterChange}
            />
            <input
              type="password"
              name="confirm-password"
              placeholder="Confirm Password"
              required
              onChange={handleRegisterChange}
            />
            <button type="submit" className="signup-btn">REGISTER</button>
          </form>
          <h5>Already have an account?</h5>
          <Link to="/login">
            <button className="login-btn">LOG IN</button>
          </Link> 
        </div>
      </div>
      <h1 className="welcome-font">
        <strong>Welcome!</strong>
      </h1>
    </div>
  );
}

export default RegisterPage;
