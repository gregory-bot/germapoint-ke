import React, { useState } from "react";
import { Search } from "lucide-react"; // Ensure Lucide React is installed

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="flex-1 px-8 max-w-xl mx-auto mt-16">
      <div className="relative">
        <input
          type="text"
          placeholder="search ..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;