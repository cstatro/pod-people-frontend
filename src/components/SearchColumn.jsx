import React from "react";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
const SearchColumn = props => {
  const [searchTerm, setTerm] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://itunes.apple.com/search?term=${searchTerm}&entity=podcast`)
        .then(r => r.json())
        .then(data => setResults(data.results));
    }
  }, [searchTerm]);

  return (
    <div className="search-column">
      <SearchBar setTerm={setTerm} />
    </div>
  );
};
export default SearchColumn;
