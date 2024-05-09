import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReadmoreDetails() {
  const [jobs, setJobs] = useState([]);

  const { id } = useParams();

  // param is used to get parametrs 

  useEffect(() => {
    fetch(`http://localhost:3000/jobs/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      })
      .then((data) => {
        setJobs([data]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div>
      {Array.isArray(jobs) &&
        jobs.map((job) => (
          <div key={job.id} className="job-details" style={{border:"solid", margin:'20px', padding:'10px', backgroundColor:'purple light ', borderRadius:'5px,5px,5px'}}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>Type: {job.type}</p>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary} / Year</p>
            <p>Company: {job.company.name}</p>
            <p>Contact Email: {job.company.contactEmail}</p>
            <p>Contact Phone: {job.company.contactPhone}</p>
          </div>
        ))}
      {!Array.isArray(jobs) && <div>No jobs found</div>}
    </div>
  );
}

export default ReadmoreDetails;
