import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  // console.log(jobId);
  const { user } = useAuth();
  // console.log(user);

  const handleApplyForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedIn, github, resume);

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted",
            showConfirmButton: false,
            timer: 3000,
          });
        }
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2 className="text-2xl">
        apply for this job:<Link to={`/jobs/${jobId}`}>details</Link>
      </h2>
      <form onSubmit={handleApplyForm}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn link</label>
          <input
            name="linkedIn"
            type="url"
            className="input"
            placeholder="LinkedIn profile link"
          />

          <label className="label">Github link</label>
          <input
            name="github"
            type="url"
            className="input"
            placeholder="Github link"
          />

          <label className="label">Resume link</label>
          <input
            name="resume"
            type="url"
            className="input"
            placeholder="Resume link"
          />

          <input className="btn" type="submit" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
