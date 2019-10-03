import React from "react";
import { connect } from "react-redux";
import { playButtonAction } from "../redux/actions/dispatchActions/PlayButtonAction";

const PlayButton = props => {
  const { link, playPodcast } = props;

  return (
    <>
      <button onClick={() => playPodcast(link)}>Play</button>
    </>
  );
};

export default connect(
  null,
  playButtonAction
)(PlayButton);
