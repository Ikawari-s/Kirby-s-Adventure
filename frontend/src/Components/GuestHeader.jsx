import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import PinkLogo from "../Designs/Images/PinkLogo.png";
import KirbSearch from "../Designs/Images/KirbSearch.png";
import { Link, useNavigate } from "react-router-dom";
import "../Designs/Css/GuestHeader.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const GuestHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <header id="bodhi">
      <nav className="d-flex justify-content-center">
        <Nav.Link id="pluh" as={Link} to="/">
          <img src={PinkLogo} alt="Logo" id="PinkLogo" />
        </Nav.Link>
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
        <Nav.Link className="rah" as={Link} to="/find-events">
          Find Events
        </Nav.Link>
        <Nav.Link className="rah" as={Link} to="/create-events">
          Create Events
        </Nav.Link>
        <Nav.Link className="rah" as={Link} to="/payment">
          Payment
        </Nav.Link>{" "}
        {/* Added Payment Link */}
        <Nav.Link className="rah">Help</Nav.Link>
        <Nav.Link className="rah" as={Link} to="/login">
          Log In
        </Nav.Link>
        <Nav.Link className="rah">Signup</Nav.Link>
      </nav>
    </header>
  );
};

export default GuestHeader;
