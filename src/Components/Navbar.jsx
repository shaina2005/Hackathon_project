import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import { Link } from "react-router-dom"; 
=======
import { Link } from "react-router-dom"; // ✅ Import Link
>>>>>>> 149345f (done)

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark px-5 py-3"
      style={{ fontFamily: "Segoe UI, sans-serif", fontSize: "1.1rem", fontWeight: "500" }}
    >
      <Link className="navbar-brand text-white text-lg" to="/">
        AskPCTE
      </Link>

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
          <li className="nav-item mx-2">
            <Link className="nav-link text-white nav-link-underline" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link text-white nav-link-underline" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link text-white nav-link-underline" to="/createticket">
              Create Ticket
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link text-white nav-link-underline" to="/ticketdetails">
              Ticket Details
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
