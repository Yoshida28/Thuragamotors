import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.svg"; // Ensure you have this logo
import "./Footer.css"; // Ensure you have the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Branding */}
        <div className="footer-logo">
          <img src={logo} alt="THURAGA MOTORS Logo" className="footer-logo-img" />
          <h2 className="footer-logo-text">THURAGA MOTORS</h2>
        </div>

        {/* Navigation Links */}
        <nav className="footer-links">
          <a href="#home" aria-label="Home">Home</a>
          <a href="#about" aria-label="About">About</a>
          <a href="#features" aria-label="Features">Features</a>
          <a href="#contact" aria-label="Contact">Contact</a>
        </nav>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook aria-hidden="true" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter aria-hidden="true" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram aria-hidden="true" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} THURAGA MOTORS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
