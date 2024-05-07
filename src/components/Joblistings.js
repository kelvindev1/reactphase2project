import React, { useEffect, useState } from "react";
import Joblisting from "./Joblisting";

function Joblistings() {
  const [jobs, setJobs] = useState([]);
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
        {jobs.map((job) => (
          <Joblisting key={job.id} job={job} />
        ))}
      </ul>
    </div>
  );
}

export default Joblistings;
