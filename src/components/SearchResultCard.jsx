import React from "react";
import { Link } from "react-router-dom";

const SearchResultCard = props => {
  const { trackName, trackId, feedUrl, trackCount } = props;
  return (
    <Link to={{ pathname: `podcast/${trackId}`, rss: feedUrl }}>
      <div className="podcast-search-result">
        <img src={props.artworkUrl100} alt="" />
        <h4 className="podcast-search-result-title">{trackName}</h4>
        <h4 className="podcast-search-result-track-count">
          Episodes: {trackCount}
        </h4>
      </div>
    </Link>
  );
};

export default SearchResultCard;
