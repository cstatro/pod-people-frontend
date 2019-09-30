import React from "react";
import { connect } from "react-redux";
import { ListShowPagePodcastRowActions } from "../redux/actions/dispatchActions/ListShowPagePodcastRowActions";
const ListShowPagePodcastRow = props => {
  const { image_url, name, genre, openModal } = props;
  return (
    <div className="list-show-page-podcast">
      <img src={image_url} alt="" />
      <h3>{name}</h3>
      <h3>{genre}</h3>
      <button onClick={() => openModal(props)}>view</button>
    </div>
  );
};

export default connect(
  null,
  ListShowPagePodcastRowActions
)(ListShowPagePodcastRow);
