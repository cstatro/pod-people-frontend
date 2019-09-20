import React from "react";

const EpisodeCard = props => {
  const { itunes } = props;
  return (
    <div className="episode-card">
      <img src={itunes.image} alt="" />
    </div>
  );
};

export default EpisodeCard;
