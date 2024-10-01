import React, { useState } from "react";
import "../Designs/Css/LoginPage.css";
import GuestHeader from "../Components/GuestHeader";
import { Form, Button } from "react-bootstrap";
import PinkLogo from "../Designs/Images/PinkLogo.png";
import { Link } from 'react-router-dom';

function LoginPage() {
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
            <input type="password" name="password" placeholder="Password" required onChange={handleRegisterChange} />
            <button type="submit" className="signup-btn">LOG IN</button>
          </form>
          <h5>Don't have an account?</h5>
          <Link to="/register">
            <button className="login-btn">SIGN UP</button>
          </Link> 
        </div>
      </div>
      <h1 className="welcome-font">
            <strong>Welcome!</strong>
          </h1>
    </div>
  );
}

export default LoginPage;
