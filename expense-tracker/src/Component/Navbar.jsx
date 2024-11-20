import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div>
            <Link to="/">Add</Link>
            <Link to="/view">View</Link>
        </div>
     );
}
 
export default Navbar;