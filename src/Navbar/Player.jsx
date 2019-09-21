import React from "react";
import AudioPlayer from "react-h5-audio-player";
import { connect } from "react-redux";
import { mapPlayerStateToProps } from "../redux/actions/mapStateToProps/playerState";

const Player = props => {
  const { currentTrack } = props;
  return <AudioPlayer src={currentTrack} />;
};

export default connect(mapPlayerStateToProps)(Player);
