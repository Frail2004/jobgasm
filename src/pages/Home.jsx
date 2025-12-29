import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="max-w-4xl mx-auto mt-20 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
          Welcome to Job Portal
        </h1>

        <p className="mt-4 text-gray-600 text-lg sm:text-xl">
          Find your dream internship or full-time job!
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Button
            text="View Jobs"
            onClick={() => navigate("/jobs")}
            className="bg-blue-500 text-white hover:bg-blue-600"
          />
          <Button
            text="Contact Us"
            onClick={() => navigate("/contact")}
            className="bg-green-500 text-white hover:bg-green-600"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
