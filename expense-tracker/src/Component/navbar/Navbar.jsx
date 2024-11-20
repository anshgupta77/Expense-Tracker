// import React from "react";
// import { Link } from "react-router-dom";
// const Navbar = () => {
//     return ( 
//         <div>
//             <Link to="/">Add</Link>
//             <Link to="/view">View</Link>
//         </div>
//      );
// }

// export default Navbar;




// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation(); // To highlight the active link

//   return (
//     <div className="flex justify-between items-center bg-blue-800 p-4 shadow-lg">
//       <Link
//         to="/"
//         className={`text-white font-bold text-2xl tracking-wide px-4 py-2 rounded-md transition${
//           location.pathname === "/" ? "bg-grey-500" : "hover:text-black"
//         }`}
//       >
//         ExpenseTracker
//       </Link>

//       <div className="flex space-x-4">

//       <Link
//         to="/add"
//         className={`text-white font-bold mx-4 px-4 py-2 rounded-md transition ${
//           location.pathname === "/add" ? "bg-grey-500" : "hover:bg-gray-700"
//         }`}
//       >
//         Add
//       </Link>
//       <Link
//         to="/view"
//         className={`text-white font-bold mx-4 px-4 py-2 rounded-md transition ${
//           location.pathname === "/view" ? "bg-grey-500" : "hover:bg-gray-700"
//         }`}
//       >
//         View
//       </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


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
          <Link to="/view" className={`navbar-link`} >
            <> View <hr></hr></> </Link> :
          <Link to="/view" className={`navbar-link`} >
            <> View</> </Link>}
      </div>
    </div>
  );
};

export default Navbar;


