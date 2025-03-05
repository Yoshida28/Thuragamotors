import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg"; // Import your logo
import "./Navbar.css"; // Import CSS

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="logo-container"
        >
          <img src={logo} alt="THURAGA MOTORS" className="logo-img" />
          <h1 className="logo-text">THURAGA MOTORS</h1>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="nav-links">
          {["Home", "About", "Features", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="nav-item"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-menu"
        >
          <ul>
            {["Home", "About", "Features", "Contact"].map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
