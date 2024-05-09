import React, { useEffect, useState } from "react";
import JobInputForm from "./JobInputForm";

function Addjob() {
  const [jobs, setJobs] = useState([]);
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
    if (window.confirm("Are you sure you want post this job ?")) {
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
      alert("Job Posted successfully !");
    }
  };

  return (
    <div>
      <JobInputForm
        newJob={newJob}
        handleInputChange={handleInputChange}
        handleCompanyInputChange={handleCompanyInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Addjob;
