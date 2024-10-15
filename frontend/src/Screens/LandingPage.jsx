import React, { useState, useEffect } from "react";
import "../Designs/Css/LandingPage.css";
import GuestHeader from "../Components/GuestHeader";
import Kirbface from "../Designs/Images/Kirbface.png";
function LandingPage() {
  return (
    <div className="container kirb-bg">
        <div className="row">
            <div className="small-12 columns wow">
              <h1>Effortless Events, Seamless Experiences.</h1>
              <h3>Join Us Today!</h3>
              <button>REACH OUT</button>
            </div>
        </div>
      </div>
  );
}

export default LandingPage;
