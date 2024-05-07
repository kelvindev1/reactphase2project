import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <NavLink> Artists </NavLink>
        <NavLink> Genres </NavLink>
        <NavLink> </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
