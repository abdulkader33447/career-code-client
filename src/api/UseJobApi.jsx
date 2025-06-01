import React from 'react';
import UseAxiosSecure from '../hooks/UseAxiosSecure';

const UseJobApi = () => {
const axiosSecure = UseAxiosSecure()

const jobsCreatedByPromise = email =>{
  return axiosSecure.get(`/jobs/applications?email=${email}`).then(res => res.data)
}

  return {
    jobsCreatedByPromise
  }
};

export default UseJobApi;