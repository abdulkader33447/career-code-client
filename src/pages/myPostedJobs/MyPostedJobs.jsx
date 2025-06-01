import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import JobLists from "./JobLists";
import UseJobApi from "../../api/UseJobApi";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const {jobsCreatedByPromise} = UseJobApi()
  return (
    <div>
      <h1>my posted jobs</h1>
      <Suspense>
        <JobLists
          jobsCreatedByPromise={jobsCreatedByPromise(
            user?.email
          )}
        />
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
