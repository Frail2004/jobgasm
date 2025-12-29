import React from "react";

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <input
      type="text"
      placeholder="Search jobs..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default SearchBar;
