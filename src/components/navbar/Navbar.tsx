import React, { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* Hamburger – only visible on small screens */}
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className="nav-links">
        <li><a href="#location" onClick={closeMenu}>Location</a></li>
        <li><a href="#menu" onClick={closeMenu}>Menu</a></li>

        <li className="dropdown-parent">
          <a href="#catering">Catering</a>
          <ul className="dropdown">
            <li><a href="#order-catering" onClick={closeMenu}>Order Catering</a></li>
            <li><a href="#fax" onClick={closeMenu}>Catering Fax</a></li>
          </ul>
        </li>

        <li className="dropdown-parent">
          <a href="#about">About Us</a>
          <ul className="dropdown">
            <li><a href="#philosophy" onClick={closeMenu}>Our Philosophy</a></li>
            <li><a href="#story" onClick={closeMenu}>Our Story</a></li>
            <li><a href="#press" onClick={closeMenu}>Press</a></li>
          </ul>
        </li>
      </ul>

      <div className="nav-buttons">
        <button className="order-btn" onClick={closeMenu}>ORDER ONLINE</button>
      </div>
    </nav>
  );
};
