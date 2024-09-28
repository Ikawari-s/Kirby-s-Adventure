import React, { useState, useEffect } from "react";
import "../Designs/Css/LoginPage.css";
import GuestHeader from "../Components/GuestHeader";
import { Form, Button, Spinner, Alert } from 'react-bootstrap';

function LoginPage() {
  // Move the hooks inside the component
  const [registerFormData, setRegisterFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegisterChange = (e) => {
    setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <div
        id="SignUpPage"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="fab">
          <h1>Sign up today, Become part of Shareable!</h1>
        </div>
        <div className="container">
          <div className="card grabber">
            <div className="card-header logo">
              {/* <img src={logo} alt="Logo" /> */}
            </div>

            <div className="card-body">
              <Form onSubmit={handleRegisterSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email (Associated with PayPal):</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={registerFormData.email}
                    onChange={handleRegisterChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    id="username"
                    name="username"
                    value={registerFormData.username}
                    onChange={handleRegisterChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={registerFormData.password}
                    onChange={handleRegisterChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Retype Password:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Retype Password"
                    id="retypePassword"
                    name="retypePassword"
                    value={registerFormData.retypePassword}
                    onChange={handleRegisterChange}
                  />
                </Form.Group>

                <div className="d-grid gap-2 cum">
                  <Button variant="primary" type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Spinner animation="border" size="sm" /> Creating...
                      </>
                    ) : (
                      "Create!"
                    )}
                  </Button>
                </div>
              </Form>
              {error && (
                <Alert
                  variant="primary"
                  style={{
                    backgroundColor: "#52c7b8",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {error}
                </Alert>
              )}
            </div>
            <p className="text-center texto">Shareable Copyright ©</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
