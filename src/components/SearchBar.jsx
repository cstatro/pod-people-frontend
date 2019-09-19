import React from "react";
const R = require("ramda");

const SearchBar = props => {
  const { setTerm } = props;
  const handleSubmit = e => {
    e.preventDefault();
    const searchVal = R.replace(/ /g, "+", e.target.firstChild.value);
    setTerm(searchVal);
  };

  return (
    <div onSubmit={handleSubmit} className="searchbar">
      <form>
        <input
          type="text"
          className="search-text"
          placeholder="Search For Podcast"
        />
        <input type="submit" value="" className="search-button" />
      </form>
    </div>
  );
};

export default SearchBar;
