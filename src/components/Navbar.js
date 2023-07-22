import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
// import { MenuItems } from "./MenuItem";



function Navbar() {
  const [clicked, setClicked] = useState(false);
  // console.log(setClicked)
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippin</h1>
      <div className="menu-icons">
      <i className={clicked ? "fas fa-times" : "fas fa-bars"} onClick={() => setClicked(!clicked)}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" className="nav-links">
            <i className="fa-solid fa-house-user"></i>Home
          </Link>
        </li>
        <li className="nav-links">
          <Link to="/about">
            <i className="fa-solid fa-circle-info"></i>About
          </Link>
        </li>
        <li className="nav-links">
          <Link to="/service">
            <i className="fa-solid fa-briefcase"></i>Service
          </Link>
        </li>{" "}
        <li className="nav-links">
          <Link to="/contact">
            <i className="fa-solid fa-address-book"></i>Contact
          </Link>
        </li>
        <li className="nav-links-mobile">
          <button> Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
