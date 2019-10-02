import React from "react";
import { connect } from "react-redux";
import { ListShowPagePodcastRowActions } from "../redux/actions/dispatchActions/ListShowPagePodcastRowActions";
import { deleteConfig } from "../api/config";
const ListShowPagePodcastRow = props => {
  const {
    image_url,
    name,
    genre,
    openModal,
    editMode,
    id,
    list_id,
    list,
    setList
  } = props;

  const handleDelete = () => {
    fetch(
      `http://localhost:3000/podcast_list_joins/${list_id}/${id}`,
      deleteConfig()
    ).then(r => {
      const podcasts = list.podcasts
        .map(p => (p.id === id ? null : p))
        .filter(p => !!p !== false);
      const newList = { ...list, podcasts };
      setList(newList);
    });
  };

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
          <button className="list-show-row-button" onClick={handleDelete}>
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
