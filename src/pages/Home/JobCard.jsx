import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    title,
    location,
    requirements,
    company,
    description,
    company_logo,
    salaryRange,
    _id,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex gap-2">
        <figure>
          <img className="size-17" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h2 className="text-xl">{company}</h2>
          <p className="flex items-center gap-1">
            <FaMapMarkerAlt />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {requirements.map((skill, index) => (
            <div className="badge badge-outline" key={index}>
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
