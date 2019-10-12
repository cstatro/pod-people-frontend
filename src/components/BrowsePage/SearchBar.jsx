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
      <form className="search-form">
        <input
          type="text"
          className="search-text search-input"
          placeholder="Search For Podcast"
          autoComplete="off"
        />
        <button
          type="image"
          // src={search}
          name="submit"
          className="search-button"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
