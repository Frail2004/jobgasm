import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const jobs = [
  { id: 1, title: "Frontend Intern", location: "Remote", type: "Internship", description: "Work with React and Tailwind" },
  { id: 2, title: "React Developer", location: "Bangalore", type: "Full-Time", description: "Build React applications" },
  { id: 3, title: "UI Engineer", location: "Remote", type: "Internship", description: "Design beautiful UI" },
  { id: 4, title: "Web Developer", location: "Delhi", type: "Full-Time", description: "Full-stack web dev" },
];

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) return <p className="text-center mt-10">Job not found</p>;

  return (
    <>
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
        <h1 className="text-3xl font-bold">{job.title}</h1>
        <p className="mt-2 text-gray-600">
          {job.location} - {job.type}
        </p>
        <p className="mt-4">{job.description}</p>

        <button
          onClick={() => navigate("/jobs")}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
        >
          Back to Jobs
        </button>
      </div>
    </>
  );
};

export default JobDetails;
