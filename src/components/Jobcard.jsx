import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border rounded-2xl p-6 mb-6 shadow-sm hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>

      <div className="flex gap-3 mt-3">
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
          {job.location}
        </span>
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
          {job.type}
        </span>
      </div>

      <p className="mt-2 text-gray-500 text-sm">
        {job.description?.slice(0, 50)}...
      </p>

      <div className="flex gap-4 mt-5">
        <Button text="View Details" onClick={() => navigate(`/jobs/${job.id}`)} />
        <Button
          text="Apply"
          className="bg-green-500 text-white border-none hover:bg-green-600"
        />
      </div>
    </div>
  );
};

export default JobCard;
