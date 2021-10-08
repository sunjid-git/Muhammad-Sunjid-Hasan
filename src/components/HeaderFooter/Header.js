import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* navbar starts */}
      <nav className="font-b navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <Link to="/">Sunjid</Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
              
                <Link to="/home" className="nav-link active" aria-current="page">
                Home
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/about" className="nav-link" >
                  About
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/project" className="nav-link" >
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* navbar endss */}
    </div>
  );
};

export default Header;
