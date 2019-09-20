import React from "react";
import EpisodeCard from "./EpisodeCard";

const EpisodeList = props => {
  const { items } = props;
  return (
    <div className="episode-list">
      {items.map(i => (
        <EpisodeCard {...i} />
      ))}
    </div>
  );
};

export default EpisodeList;
