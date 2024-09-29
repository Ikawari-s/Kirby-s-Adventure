import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Designs/Css/Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      role="contentinfo"
      itemscope
      itemtype="http://schema.org/WPFooter"
    >
      <div
        className="social"
        role="navigation"
        aria-labelledby="social-heading"
      >
        <h3 id="social-heading" className="sr-only">
          Follow us on social media
        </h3>
        <a href="#" aria-label="Facebook">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <hr className="footer-break" />
      <ul
        className="footer-links"
        role="navigation"
        aria-labelledby="footer-links-heading"
      >
        <h3 id="footer-links-heading" className="sr-only">
          Footer Links
        </h3>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <p className="copyright">
        © 2024 Kirbivent | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
