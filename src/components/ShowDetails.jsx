import React from "react";
import { connect } from "react-redux";
import { podcastDetailsActions } from "../redux/actions/dispatchActions/podCastDetailsActions";

const ShowDetails = props => {
  const { itunes, title, description, openModal } = props;

  return (
    <div className="podcast-show-card">
      <div className="podcast-show-pic">
        <img src={itunes.image} alt="" />
      </div>
      <div className="podcast-show-details">
        <div className="podcast-show-title">
          <h2>{title}</h2>
        </div>
        <div className="podcast-show-details-info">
          <div className="podcast-show-description">{description}</div>
          <button onClick={() => openModal(description)}>Add To List</button>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  podcastDetailsActions
)(ShowDetails);
