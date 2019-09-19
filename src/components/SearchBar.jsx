import React from "react";
const SearchBar = props => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log("you did it");
  };
  return (
    <div onSubmit={handleSubmit} className="searchbar">
      <form action="">
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
