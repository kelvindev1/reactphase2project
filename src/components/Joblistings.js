import React, { useEffect, useState } from "react";
import Joblisting from "./Joblisting.js";

// import { Link } from "react-router-dom";

function Joblistings() {
  const [jobs, setJobs] = useState([]);
  const recentJobs = jobs.slice(0, 3);
  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div className="jobs-container">
      <ul className="jobs-items">
        {recentJobs.map((job) => (
          <Joblisting key={job.id} job={job} />
        ))}
      </ul>
      
    </div>
  );
}

export default Joblistings;
