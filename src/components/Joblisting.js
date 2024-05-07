import React from "react";

function Joblisting({ job }) {
  return (
    <div>
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
    </div>
  );
}

export default Joblisting;
