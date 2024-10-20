import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Designs/Css/Footer.css";
import PinkLogo from "../Designs/Images/PinkLogo.png";
import Kirbcloud from "../Designs/Images/Kirbcloud.png";

const Footer = () => {
  return (
    <>

      <footer
        className="footer"
        role="contentinfo"
        itemscope
        itemtype="http://schema.org/WPFooter"
      >
        <div className="kirbcloud-image"></div>
        <ul
          className="footer-links"
          role="navigation"
          aria-labelledby="footer-links-heading"
        >
          <h3 id="footer-links-heading" className="sr-only">
            Footer Links
          </h3>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <a href="/TERMS OF USE.pdf" target="_blank">Terms</a>
          </li>
          <li>
            <a href="/PRIVACY POLICY.pdf" target="_blank">Privacy</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr className="footer-break" />

        <div className="footer-logo">
          <img src={PinkLogo} alt="Logo" id="FooterLogo" />
          <p className="copyright">© 2024 Kirbivent | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
