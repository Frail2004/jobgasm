import React from "react";

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = ({ text, onClick, className = "", size = "md" }) => {
  return (
    <button
      onClick={onClick}
      className={
        `inline-flex items-center justify-center rounded-2xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300 ${sizes[size]} ${className}`
      }
    >
      {text}
    </button>
  );
};

export default Button;
