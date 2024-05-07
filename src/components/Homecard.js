import React from "react";
import Card from "./Card";
import './HomeCard.css';
function Homecard() {
  return (
    <div>
      <Card>
        <div className="card">
          <div className="card-body">
            {" "}
            <h5 className="card-title">For Developers</h5>
            <p className="card-text">
              Browse our React jobs and start your career today
            </p>
            <a href="#" className="btn btn-primary">
              Browse jobs
            </a>
          </div>
        </div>
      </Card>

      <Card>
        {" "}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">For Employers</h5>
            <p className="card-text">
              List your job to find the perfect developer for the role
            </p>
            <a href="#" className="btn btn-primary">
              Add Job
            </a>
          </div>
        </div>
      </Card><hr/>
    </div>
  );
}

export default Homecard;
