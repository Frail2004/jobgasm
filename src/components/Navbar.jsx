import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // to highlight active link
  const [open, setOpen] = useState(false);

  const linkClass = (path) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
      location.pathname === path
        ? "bg-white/10 text-white underline"
        : "text-white/90 hover:bg-white/10"
    }`;

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-lg font-extrabold tracking-tight">
              Jobgasm
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/jobs" className={linkClass("/jobs")}>
              Jobs
            </Link>
            <Link to="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
            <Link
              to="/jobs"
              className="ml-2 inline-flex items-center px-4 py-2 rounded-full bg-white text-indigo-700 font-semibold shadow-sm hover:shadow-md transition"
            >
              Browse Jobs
            </Link>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${open ? "block" : "hidden"} md:hidden px-4 pb-4`}>
        <div className="space-y-1">
          <Link to="/" className={linkClass("/") } onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/jobs" className={linkClass("/jobs")} onClick={() => setOpen(false)}>
            Jobs
          </Link>
          <Link to="/contact" className={linkClass("/contact")} onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link
            to="/jobs"
            className="mt-2 inline-flex w-full items-center justify-center px-4 py-2 rounded-full bg-white text-indigo-700 font-semibold shadow-sm hover:shadow-md transition"
            onClick={() => setOpen(false)}
          >
            Browse Jobs
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
