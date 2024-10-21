import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Designs/Css/LandingPage.css";
import GuestHeader from "../Components/GuestHeader";
import Kirbface from "../Designs/Images/Kirbface.png";
function LandingPage() {
  return (
    <div className="kirb-bg">
      <div className="wat">
        <div className="wow">
          <h1>Effortless Events, Seamless Experiences.</h1>
          <h3>Join Us Today!</h3>
          <Link className="reach" as={Link} to="/find-events">
                REACH OUT
              </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

{/* <div className="row" style={{ zIndex: 1000 }}></div> */}
