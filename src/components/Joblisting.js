import React, { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

function Joblisting({ job }) {
  const [showfullDescription, setshowfullDescription] = useState(false);

  let description = job.description;

  if (!showfullDescription) {
    description = description.substring(0, 80) + "...";
  }
  return (
    <div className="col-md-3" style={{ margin: "1.55rem" }}>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li key={job.id} className="list-group-item">
            <div className="card-body" style={{ background: "beige" }}>
              <p>{job.type}</p>
              <h5 className="card-title">{job.title}</h5>
              <p>{description}</p>
              <button
                className="btn btn-primary"
                onClick={() =>
                  setshowfullDescription((prevState) => !prevState)
                }
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
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Joblisting;
