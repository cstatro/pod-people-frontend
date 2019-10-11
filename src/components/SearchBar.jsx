import React from "react";
import search from "../image/search.png";
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
        {/* <input type="submit" value="" className="search-button" /> */}
        {/* <input
          type="image"
          src={search}
          name="submit"
          className="search-logo"
        /> */}
        <button
          type="image"
          src={search}
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
