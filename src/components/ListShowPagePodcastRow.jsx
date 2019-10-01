import React from "react";
import { connect } from "react-redux";
import { ListShowPagePodcastRowActions } from "../redux/actions/dispatchActions/ListShowPagePodcastRowActions";
const ListShowPagePodcastRow = props => {
  const { image_url, name, genre, openModal, editMode } = props;
  return (
    <div className="list-show-page-podcast">
      <img src={image_url} alt="" />
      <h3>{name}</h3>
      <h3>{genre}</h3>
      <div className="list-rows-buttons">
        <button
          className="list-show-row-button"
          onClick={() => openModal(props)}
        >
          view
        </button>
        {editMode ? (
          <button
            className="list-show-row-button"
            onClick={() => console.log("fuck")}
          >
            Remove
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default connect(
  null,
  ListShowPagePodcastRowActions
)(ListShowPagePodcastRow);
