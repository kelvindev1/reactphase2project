import React from "react";
import { Link } from "react-router-dom";

function ViewAllJobs() {
  return (
    <div>
      <button>
        <Link to="/jobs"> View All Jobs </Link>
      </button>
    </div>
  );
}

export default ViewAllJobs;
