import React from "react";
import { images } from "../../constants";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="grid-container">
        <div className="grid-item1">
          <img src={images.logo} alt="logo" />
        </div>

        <div className="grid-item2">
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" className="link">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reservations" className="link">
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/order-online" className="link">
                Order online
              </Link>
            </li>
            <li>
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
