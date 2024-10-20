import React from "react";
import "../Designs/Css/AboutUs.css"; // Ensure you link the CSS file correctly
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
  <div className="bunny"> 
    <div className="about-container">
      <h1>Welcome to Kirbivent!</h1>
      <p>
        At Kirby's Dreamland, we believe in the power of connection. Through
        Kirbivent, we provide a platform where organizing and attending events
        is simplified, seamless, and enjoyable.
      </p>
      <p>
        Whether you're planning a conference, a concert, or a social gathering,
        Kirbivent is here to make the process efficient and hassle-free.
      </p>
      <p>
        Our mission is to empower event organizers with the tools they need to
        manage their events effortlessly while providing attendees with an
        intuitive and user-friendly experience.
      </p>
      <p>
        We are passionate about creating memorable experiences and helping you
        bring your event visions to life.
      </p>
      
      {/* Optional privacy policy link */}
      <a href="/PRIVACY POLICY.pdf" className="privacy-a" target="_blank">
        Read our Privacy Policy
      </a>
    </div>
  </div>   
  );
};

export default AboutUs;
