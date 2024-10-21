import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import PinkLogo from "../Designs/Images/PinkLogo.png";
import KirbSearch from "../Designs/Images/KirbSearch.png";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import "jquery";

import "../Designs/Css/GuestHeader.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const GuestHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  // Assuming isLoggedIn state manages the user's authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login actions here
    setIsLoggedIn(true);
    // Redirect to "/login" after successful login
    navigate("/login");
  };

  const handleLogout = () => {
    // Clear authentication token from local storage
    localStorage.removeItem("authToken");

    // Update isLoggedIn state
    setIsLoggedIn(false);

    // Redirect to "/" or any desired path
    navigate("/");
  };

  return (
    <header id="bodhi">
      <Navbar expand="lg" className="w-100">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={PinkLogo} alt="Logo" id="PinkLogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" className="navbut" />
          <Navbar.Collapse id="navbar-nav">
            <div className="input-group mb-3" id="search">
              <button
                className="input-group-text"
                onClick={() => {
                  /* Add your search functionality here */
                }}
              >
                <i className="bi bi-geo-alt-fill" id="location"></i>
              </button>
              <input
                type="text"
                placeholder="Location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control"
              />
              <button
                className="input-group-text kirb-search"
                onClick={() => {
                  /* Add your KirbSearch functionality here */
                }}
              >
                <img src={KirbSearch} alt="Search" id="Kirb" />
              </button>
            </div>
            <Nav className="ms-auto">
              <Nav.Link className="rah" as={Link} to="/find-events">
                Find Events
              </Nav.Link>
              <Nav.Link className="rah" as={Link} to="/create-events">
                Create Events
              </Nav.Link>
              <Nav.Link className="rah" as={Link} to="/help">
                Help
              </Nav.Link>
              {/* Profile Dropdown */}
              <div className="da-user">
                {userInfo ? (
                  <NavDropdown
                    title={<span className="custom-link">{userInfo.name}</span>}
                    id="username"
                  >
                    <NavDropdown.Item onClick={logoutHandler}>
                      <i
                        className="fas fa-sign-out-alt"
                        style={{ marginRight: "4px" }}
                      ></i>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to={"/login"}>
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                )}
              </div>
              {/* End Profile Dropdown */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default GuestHeader;
