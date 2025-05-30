import React, { use } from "react";
import { Link } from "react-router";

const JobLists = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  // console.log(jobs);
  return (
    <div>
      <h1>Jobs created by you: {jobs.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Job title</th>
              <th>Deadline</th>
              <th>Apply Count</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* rows  */}
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.deadline}</td>
                <td>{job.application_count}</td>
                <td>
                  <Link to={`/applications/${job._id}`}>View Application</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobLists;
