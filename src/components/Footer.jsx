import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-800 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white">Jobgasm</h3>
            <p className="mt-2 text-sm text-gray-300">Helping you discover better careers.</p>
          </div>

          <div className="flex justify-between md:justify-center">
            <div>
              <h4 className="font-medium text-sm text-white">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">
                <li>
                  <Link to="/" className="hover:underline">About</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <h4 className="font-medium text-sm text-white">Resources</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:underline">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-sm">
            <h4 className="font-medium text-sm text-white">Stay connected</h4>
            <p className="mt-3 text-gray-300">Subscribe for job updates and career tips.</p>
            <form className="mt-4 flex max-w-md">
              <input
                aria-label="Email address"
                type="email"
                placeholder="you@company.com"
                className="w-full px-3 py-2 rounded-l-md bg-white/10 placeholder-gray-300 text-white focus:outline-none"
              />
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-r-md text-white font-medium">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Jobgasm. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
