import React, { useEffect, useState } from "react";
import Joblisting from "./Joblisting";

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
      <div className="container-fluid">
        <div className="row">
          <h4
            style={{
              textAlign: "center",
              fontStyle: "italic",
              textDecoration: "underline",
              color: "blue",
            }}
          >
            Recent Jobs
          </h4>
          {recentJobs.map((job) => (
            <Joblisting key={job.id} job={job} />
          ))}
        </div>
      </div>{" "}
    </div>
  );
}

export default Joblistings;
