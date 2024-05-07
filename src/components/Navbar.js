import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <NavLink> Home </NavLink>
        <NavLink> Jobs </NavLink>
        <NavLink> Add Jobs </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
