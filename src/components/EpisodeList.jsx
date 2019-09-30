import React from "react";
import EpisodeCard from "./EpisodeCard";

const EpisodeList = props => {
  const { items, description } = props;
  return (
    <div className="episode-list">
      {items.map(i => (
        <EpisodeCard description={description} {...i} />
      ))}
    </div>
  );
};

export default EpisodeList;
