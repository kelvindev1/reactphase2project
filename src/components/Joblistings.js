import React, { useEffect, useState } from "react";

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
          <li key={job.id} className="joblist-item">
            <div className="card">
              <div className="card-body">
                <p>{job.type}</p>
                <h5 className="card-title">{job.title}</h5>
                <p>{job.description}</p>
                <p>{job.salary} /Year</p>
                <p>{job.location}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Joblistings;
