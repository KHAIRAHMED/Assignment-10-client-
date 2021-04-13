import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home{" "}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/orders">
                Orders
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/review">
                Review
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/admin">
                <Button type="button" className="btn btn-dark">
                  Admin
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
