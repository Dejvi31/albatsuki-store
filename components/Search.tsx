"use client";
import { useState } from "react";

const Search = ({
  setSearchTerm,
}: {
  setSearchTerm: (term: string) => void;
}) => {
  const [input, setInput] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchTerm(input);
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-1 mx-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a product..."
        className="w-full px-4 py-2 border rounded-md"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
