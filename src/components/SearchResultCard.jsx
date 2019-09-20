import React from "react";
import { Link } from "react-router-dom";

const SearchResultCard = props => {
  const { artistName, trackName, trackId, feedUrl } = props;
  return (
    <Link to={{ pathname: `podcast/${trackId}`, rss: feedUrl }}>
      <div>
        <h3>{artistName}</h3>
        <h3>{trackName}</h3>
      </div>
    </Link>
  );
};

export default SearchResultCard;
