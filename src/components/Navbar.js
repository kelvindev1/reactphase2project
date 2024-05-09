import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      className="nav-container"
      style={{
        margin: "15px",
        justifyContent: "space-between",
        textAlign: "right",
      }}
    >
      <Link
        to={"/kazi"}
        style={{
          border: "",
          margin: "20px",
          padding: "20px",
          textDecoration: "none",
          fontSize: "20px",
        }}
      >
        Jobs
      </Link>
      <Link
        to={"/addjob"}
        style={{
          margin: "10px",
          padding: "4px",
          textDecoration: "none",
          fontSize: "20px",
        }}
      >
        AddJob
      </Link>
    </div>
  );
}

export default Navbar;
