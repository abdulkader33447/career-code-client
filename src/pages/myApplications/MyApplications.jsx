import React, { Suspense } from "react";
import ApplicationsStats from "./ApplicationsStats";
import ApplicationsList from "./ApplicationsList";
import useAuth from "../../hooks/useAuth";
import UseApplicationApi from "../../api/UseApplicationApi";

const MyApplications = () => {
  const { user } = useAuth();
  const { myApplicationsPromise } = UseApplicationApi();

  // console.log("token in the context", user.accessToken);

  return (
    <div>
      <ApplicationsStats />
      <Suspense fallback={"loading...."}>
        <ApplicationsList
          myApplicationsPromise={myApplicationsPromise(
            user.email
          )}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
