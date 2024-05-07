import React from "react";
import { Link } from "react-router-dom";
import Joblistings from "./Joblistings";

function ViewAllJobs() {
  return (
    <div>
     
      <Link to="/jobs">View All Jobs</Link>
    </div>
  );
}

export default ViewAllJobs;
