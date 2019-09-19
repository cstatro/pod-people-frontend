import React from "react";
import SearchBar from "./SearchBar";
import { useState } from "react";
const SearchColumn = props => {
  const [searchTerm, setTerm] = useState(null);

  return (
    <div className="search-column">
      <SearchBar setTerm={setTerm} />
    </div>
  );
};
export default SearchColumn;
