import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";

function ReadmoreDetails() {
  const [jobs, setJobs] = useState([]);
  const {id} = useParams()
  const selectedCard= jobs.find(job => job.id === parseInt(id))
 
 

  console.log(selectedCard)

  useEffect(() => {
    fetch(`http://localhost:3000/jobs${id}`)
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div>
          {jobs
          .filter((selectedCard)=>selectedCard.id === id)
          .map((selectedCard)=>(

      
        <div key={selectedCard.id} className="job-details">
          <h2>{selectedCard.title}</h2>
          <p>{selectedCard.description}</p>
          <p>Type: {selectedCard.type}</p>
          <p>Location: {selectedCard.location}</p>
          <p>Salary: {selectedCard.salary} / Year</p>
          <p>Company: {selectedCard.company.name}</p>
          <p>Contact Email: {selectedCard.company.contactEmail}</p>
          <p>Contact Phone: {selectedCard.company.contactPhone}</p>
        </div>
      ))}
    </div>
  );
}

export default ReadmoreDetails;
