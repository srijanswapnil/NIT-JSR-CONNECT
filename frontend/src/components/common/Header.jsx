import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Make sure this is imported

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
    <nav className="navbar navbar-expand-lg bg-dark px-3 py-2" data-bs-theme="dark">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand d-flex align-items-center text-white" href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            width="40"
            height="40"
            className="me-2 rounded-circle"
          />
          <span className="fw-bold fs-5">NIT JSR Freshers' Hub</span>
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center text-center mt-3 mt-lg-0">
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
              <button
                onClick={toggleDarkMode}
                className="btn btn-sm btn-outline-light w-100 my-1"
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={toggleContrast}
                className="btn btn-sm btn-outline-warning w-100 my-1"
              >
                {highContrast ? 'Normal Contrast' : 'High Contrast'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
