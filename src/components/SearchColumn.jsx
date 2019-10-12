import React from "react";
import SearchBar from "./BrowsePage/SearchBar";
import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
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
      <SearchResults results={results} />
    </div>
  );
};
export default SearchColumn;
