import React, { Suspense } from "react";
import ApplicationsStats from "./ApplicationsStats";
import ApplicationsList from "./ApplicationsList";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";

const MyApplications = () => {
  const { user } = useAuth();

  console.log("token firebase token", user.accessToken);

  // ---firebase token
  // user.accessToken is firebase token

  return (
    <div>
      <ApplicationsStats />
      <Suspense fallback={"loading...."}>
        <ApplicationsList
          myApplicationsPromise={myApplicationsPromise(user.email,user.accessToken)}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
