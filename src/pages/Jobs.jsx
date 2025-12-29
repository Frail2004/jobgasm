import React, { useState } from "react";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";

const jobs = [
  { id: 1, title: "Frontend Intern", location: "Remote", type: "Internship", description: "Work with React and Tailwind" },
  { id: 2, title: "React Developer", location: "Bangalore", type: "Full-Time", description: "Build React applications" },
  { id: 3, title: "UI Engineer", location: "Remote", type: "Internship", description: "Design beautiful UI" },
  { id: 4, title: "Web Developer", location: "Delhi", type: "Full-Time", description: "Full-stack web dev" },
];

const Jobs = () => {
  const [searchText, setSearchText] = useState("");
  const [jobType, setJobType] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesType = jobType === "All" || job.type === jobType;
    return matchesSearch && matchesType;
  });

  return (
    <>
      <div className="max-w-4xl mx-auto mt-8 px-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="p-3 border rounded-xl w-full sm:w-48"
          >
            <option value="All">All Jobs</option>
            <option value="Internship">Internship</option>
            <option value="Full-Time">Full-Time</option>
          </select>
        </div>

        <div className="mt-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p className="text-center text-gray-500">No jobs found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Jobs;
