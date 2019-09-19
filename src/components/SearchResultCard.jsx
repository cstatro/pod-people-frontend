import React from "react";

const SearchResultCard = props => {
  const { artistName, trackName } = props;
  return (
    <div>
      <h3>{artistName}</h3>
      <h3>{trackName}</h3>
    </div>
  );
};

export default SearchResultCard;
