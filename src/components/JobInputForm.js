import React from "react";
import "./JobInputForm.css";

function JobInputForm({
  newJob,
  handleInputChange,
  handleCompanyInputChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="id"
          value={newJob.id}
          onChange={handleInputChange}
          placeholder="Enter id"
          required
        />
      </label>{" "}
      <br />
      <label>
        <input
          type="text"
          name="title"
          value={newJob.title}
          onChange={handleInputChange}
          placeholder="Enter job title"
          required
        />
      </label>{" "}
      <br />
      <label>
        <input
          type="text"
          name="type"
          value={newJob.type}
          onChange={handleInputChange}
          placeholder="Enter job Type"
          required
        />
      </label>{" "}
      <br />
      <label>
        <textarea
          name="description"
          value={newJob.description}
          onChange={handleInputChange}
          placeholder="Description about the job"
          required
        />
      </label>{" "}
      <br />
      <label>
        <input
          type="text"
          name="location"
          value={newJob.location}
          onChange={handleInputChange}
          placeholder="Enter job Location"
          required
        />
      </label>{" "}
      <br />
      <label>
        <input
          type="text"
          name="salary"
          value={newJob.salary}
          onChange={handleInputChange}
          placeholder="Enter annual salary"
          required
        />
      </label>{" "}
      <br />
      <h5>Company Details:</h5>
      <label>
        <input
          type="text"
          name="name"
          value={newJob.company.name}
          onChange={handleCompanyInputChange}
          placeholder="Name of the Company"
          required
        />
      </label>{" "}
      <br />
      <label>
        <textarea
          name="description"
          value={newJob.company.description}
          onChange={handleCompanyInputChange}
          placeholder="Description about the Company"
          required
        />
      </label>{" "}
      <br />
      <label>
        <input
          type="email"
          name="contactEmail"
          value={newJob.company.contactEmail}
          onChange={handleCompanyInputChange}
          placeholder="Company's email"
          required
        />
      </label>{" "}
      <br />
      <label>
        <input
          type="tel"
          name="contactPhone"
          value={newJob.company.contactPhone}
          onChange={handleCompanyInputChange}
          placeholder="Company's Telephone"
          required
        />
      </label>{" "}
      <br />
      <button className="btn btn-primary" type="submit">
        Post Job
      </button>
    </form>
  );
}

export default JobInputForm;
