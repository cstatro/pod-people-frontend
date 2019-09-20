import React from "react";

const EpisodeCard = props => {
  const { itunes, title, pubDate } = props;

  return (
    <div className="episode-card">
      <img src={itunes.image} alt="" />
      <h4>{title}</h4>
      <h4>{pubDate}</h4>
    </div>
  );
};

export default EpisodeCard;
