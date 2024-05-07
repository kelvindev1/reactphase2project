import React, { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import "./JobListings.css";

function Joblisting({ job }) {
  const [showfullDescription, setshowfullDescription] = useState(false);

  let description = job.description;

  if (!showfullDescription) {
    description = description.substring(0, 90) + "...";
  }
  return (
    <div>
      <li key={job.id} className="joblist-item">
        <div className="card">
          <div className="card-body">
            <p>{job.type}</p>
            <h5 className="card-title">{job.title}</h5>
            <p>{description}</p>
            <button
              className="btn btn-primary"
              onClick={() => setshowfullDescription((prevState) => !prevState)}
            >
              {showfullDescription ? "less" : "more"}
            </button>
            <p>{job.salary} / Year</p>
            <p>
              {" "}
              <FaMapMarker className="inline text-lg mb-1 mr-1" />{" "}
              {job.location}{" "}
            </p>
            
          </div>
        </div>
      </li>
    </div>
  );
}

export default Joblisting;
