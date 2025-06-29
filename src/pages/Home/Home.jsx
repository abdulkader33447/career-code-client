import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {
  const jobsPromise = fetch(
    "https://career-code-server-mu.vercel.app/jobs"
  ).then((res) => res.json());
  return (
    <div>
      <Banner />
      <Suspense>
        <HotJobs jobsPromise={jobsPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
