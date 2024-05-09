import React, { useState, useEffect } from "react";

function ReadmoreDetails() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch data from db.json using fetch API
    fetch("http://localhost:3000/jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleJobDetails = (jobId) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, showDetails: !job.showDetails } : job
      )
    );
  };

  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id} className="job-details">
          <h2 onClick={() => toggleJobDetails(job.id)}>{job.title}</h2>
          {job.showDetails && (
            <div>
              <p>{job.description}</p>
              <p>Type: {job.type}</p>
              <p>Location: {job.location}</p>
              <p>Salary: {job.salary} / Year</p>
              <p>Company: {job.company.name}</p>
              <p>Contact Email: {job.company.contactEmail}</p>
              <p>Contact Phone: {job.company.contactPhone}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ReadmoreDetails;

