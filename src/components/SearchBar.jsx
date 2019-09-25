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
        {/* <h3>Search Form</h3> */}
        <input
          type="text"
          className="search-text"
          placeholder="Search For Podcast"
        />
        {/* <input type="submit" value="" className="search-button" /> */}
        <input
          type="image"
          src={search}
          name="submit"
          className="search-logo"
        />
      </form>
    </div>
  );
};

export default SearchBar;
