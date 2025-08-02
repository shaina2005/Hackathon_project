import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand text-white" href="#">MyProject</a>

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

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
