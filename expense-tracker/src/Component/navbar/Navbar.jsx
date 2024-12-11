import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const location = useLocation(); // Access the current location
  const activeLink = location.pathname; // Track the active link
  return (
    <div className="navbar">
      {activeLink === "/" ?
        <Link to="/" className={`navbar-link`} >
          <> ExpenseTracker <hr></hr></> </Link> :
        <Link to="/" className={`navbar-link`} >
          <> ExpenseTracker</> </Link>}

      <div className="links">
        {activeLink === "/add" ?
          <Link to="/add" className={`navbar-link`} >
            <> Add <hr></hr></> </Link> :
          <Link to="/add" className={`navbar-link`} >
            <> Add</> </Link>}

        {activeLink === "/view" ?
          <Link to="/view" className={`navbar-link`}>
            <> View <hr></hr></> </Link> :

          <Link to="/view" className={`navbar-link`}>
            <> View </> </Link>}
            
      </div>
    </div>
  );
};

export default Navbar;