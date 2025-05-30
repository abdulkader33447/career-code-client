import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import JobLists from "./JobLists";
import { jobsCreatedByPromise } from "../../api/jobsApis";

const MyPostedJobs = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>my posted jobs</h1>
      <Suspense>
        <JobLists jobsCreatedByPromise={jobsCreatedByPromise(user?.email)} />
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
