import React, { useEffect, useState } from "react";
import Joblisting from "./Joblisting";
import JobInputForm from "./JobInputForm";

function Joblistings() {
  const [jobs, setJobs] = useState([]);
  const recentJobs = jobs.slice(0, 3);
  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  const [newJob, setNewJob] = useState({
    id: "",
    title: "",
    type: "",
    description: "",
    location: "",
    salary: "",
    company: {
      name: "",
      description: "",
      contactEmail: "",
      contactPhone: "",
    },
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  const handleCompanyInputChange = (event) => {
    const { name, value } = event.target;
    setNewJob((prevJob) => ({
      ...prevJob,
      company: { ...prevJob.company, [name]: value },
    }));
  };
  const addJob = async (newJob) => {
    try {
      const response = await fetch("http://localhost:3000/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      });
      const data = await response.json();
      setJobs([...jobs, data]);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addJob(newJob);
    setNewJob({
      id: "",
      title: "",
      type: "",
      description: "",
      location: "",
      salary: "",
      company: {
        name: "",
        description: "",
        contactEmail: "",
        contactPhone: "",
      },
    });
  };

  return (
    <div className="jobs-container">
      <JobInputForm
        newJob={newJob}
        handleInputChange={handleInputChange}
        handleCompanyInputChange={handleCompanyInputChange}
        handleSubmit={handleSubmit}
      />
      <div className="container-fluid">
        {/* recentJobs */}
        <div className="row">
          {recentJobs.map((job) => (
            <Joblisting key={job.id} job={job} />
          ))}
        </div>
      </div>{" "}
    </div>
  );
}

export default Joblistings;
