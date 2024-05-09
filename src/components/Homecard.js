import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
function Homecard() {
  return (
    <div>
      <Card>
        <div className="card" style={{ margin: "2rem" }}>
          <div className="card-body">
            {" "}
            <h5 className="card-title">For Developers</h5>
            <p className="card-text">
              Browse our React jobs and start your career today
            </p>
            <Link to="/kazi" className="btn btn-primary">
              Browse jobs
            </Link>
          </div>
        </div>
      </Card>

      <Card>
        {" "}
        <div className="card" style={{ margin: "2rem" }}>
          <div className="card-body">
            <h5 className="card-title">For Employers</h5>
            <p className="card-text">
              List your job to find the perfect developer for the role
            </p>
            <Link to="/addjob" className="btn btn-primary">
              Add Job
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Homecard;
