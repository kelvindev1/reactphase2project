import React, { useEffect, useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

function Job({ kazi }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = kazi.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="col-md-3" style={{ margin: "1.5rem" }}>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li key={kazi.id} className="list-group-item">
            <div className="card-body">
              <p>{kazi.type}</p>
              <h5 className="card-title">{kazi.title}</h5>
              <p>{description}</p>
              <button
                className="btn btn-primary"
                onClick={() =>
                  setShowFullDescription((prevState) => !prevState)
                }
              >
                {showFullDescription ? "less" : "more"}
              </button>
              <p>{kazi.salary} / Year</p>
              <p>
                {" "}
                <FaMapMarker className="inline text-lg mb-1 mr-1" />{" "}
                {kazi.location}{" "}
              </p>
            </div>
            <Link to={`/details/${kazi.id}`} className="btn btn-primary">
              Readmore
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Browsejobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div>
      {jobs.map((kazi) => (
        <Job key={kazi.id} kazi={kazi} />
      ))}
    </div>
  );
}

export default Browsejobs;
