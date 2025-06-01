import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Home/Shared/register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/jobApply/JobApply";
import MyApplications from "../pages/myApplications/MyApplications";
import AddJob from "../pages/addJob/AddJob";
import MyPostedJobs from "../pages/myPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/viewApplications/ViewApplications";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({ params }) =>
          fetch(`https://career-code-server-mu.vercel.app/jobs/${params.id}`),
        hydrateFallbackElement: (
          <span className="loading loading-ring loading-xl"></span>
        ),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/applications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplications />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://career-code-server-mu.vercel.app/applications/job/${params.job_id}`
          ),
        hydrateFallbackElement: <p>loading....</p>,
      },
    ],
  },
]);

export default Router;
