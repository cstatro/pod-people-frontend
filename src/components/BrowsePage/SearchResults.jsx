import React from "react";
import SearchResultCard from "./SearchResultCard";
const SearchResults = props => {
  const { results } = props;
  return (
    <div className="search-results">
      {results.map(r => (
        <SearchResultCard key={r.trackId} {...r} />
      ))}
    </div>
  );
};

export default SearchResults;
