import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark px-5 py-3"
      style={{ fontFamily: "Segoe UI, sans-serif", fontSize: "1.1rem" , fontWeight:"500" }}
    >
      <a className="navbar-brand text-white text-lg" href="#">
        AskPCTE
      </a>

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

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item mx-2">
            <a className="nav-link text-white nav-link-underline" href="#">
              Login
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link text-white nav-link-underline" href="#">
              Dashboard
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link text-white nav-link-underline" href="#">
              Createticket
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link text-white nav-link-underline" href="#">
              Ticketdetails
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
