import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function JobDetails() {
  const [jobDetails, setJobDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJobDetails(data);
      });
  }, [id]);

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{jobDetails.title}</h2>
      <p>{jobDetails.description}</p>
      <p>Type: {jobDetails.type}</p>
      <p>Location: {jobDetails.location}</p>
      <p>Salary: {jobDetails.salary} / Year</p>
      <p>Company: {jobDetails.company.name}</p>
      <p>Contact Email: {jobDetails.company.contactEmail}</p>
      <p>Contact Phone: {jobDetails.company.contactPhone}</p>
    </div>
  );
}

export default JobDetails;
