// src/components/Header.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark px-4">
      <div className="container-fluid">
        {/* Logo + App Name */}
        <a className="navbar-brand d-div align-items-center text-white" href="#">
          <img
            src="data:image/png;base64,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"
            alt="Logo"
            width="40"
            height="40"
            className="me-2 rounded-circle"
          />
          <span className="fw-bold">NIT JSR Freshers' Hub</span>
        </a>

        {/* Collapsible Navigation */}
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links + Toggles */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-3">
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold hover-effect" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold hover-effect" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold hover-effect" href="/signup">Signup</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light btn-sm" onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-warning btn-sm" onClick={toggleContrast}>
                {highContrast ? 'Normal Contrast' : 'High Contrast'}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Custom CSS styles */}
      <style jsx="true">{`
        .hover-effect:hover {
          color: #ffc107 !important;
        }
      `}</style>
    </nav>
  );
};

export default Header;
