import axios from "axios";
import React from "react";
import useAuth from "./useAuth";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: "https://career-code-server-mu.vercel.app",
});

const UseAxiosSecure = () => {
  const { user, signOutUser } = useAuth();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  // response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        signOutUser()
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "sign out the user for 401 status code",
              showConfirmButton: false,
              timer: 3000,
            });
            // console.log("sign out the user for 401 status code");
          })
          .catch((err) => {
            console.log(err);
          });
        // console.log("logout the user for 401");
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default UseAxiosSecure;
