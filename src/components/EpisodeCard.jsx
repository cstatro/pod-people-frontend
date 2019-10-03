import React from "react";
import { connect } from "react-redux";
import { mapPlayerDispatchAction } from "../redux/actions/dispatchActions/EpisodeShowCardActions";

const EpisodeCard = props => {
  const {
    itunes,
    title,
    pubDate,
    setCurrentTrack,
    enclosure,
    openModal
  } = props;

  return (
    <div className="episode-card">
      <img src={itunes.image} alt="" />
      <h4>{title}</h4>
      <h4>{pubDate}</h4>
      <button
        className="episode-card-button play"
        onClick={() => setCurrentTrack(enclosure.url)}
      >
        click to play
      </button>
      <button
        className="episode-card-button add"
        onClick={() => openModal(props)}
      >
        Add To List
      </button>
    </div>
  );
};

export default connect(
  null,
  mapPlayerDispatchAction
)(EpisodeCard);
