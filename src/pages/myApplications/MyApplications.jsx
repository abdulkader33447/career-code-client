import React, { Suspense } from "react";
import ApplicationsStats from "./ApplicationsStats";
import ApplicationsList from "./ApplicationsList";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";



const MyApplications = () => {
  const { user } = useAuth();

  return (
    <div>
      <ApplicationsStats />
      <Suspense fallback={"loading...."}>
        <ApplicationsList myApplicationsPromise={myApplicationsPromise(user.email)}/>
      </Suspense>
    </div>
  );
};

export default MyApplications;
