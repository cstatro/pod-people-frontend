import React from "react";
import bottomText from "../image/bottom_text.png";
import { connect } from "react-redux";
import { ListShowPageEpisodeRowActions } from "../redux/actions/dispatchActions/ListShowPageEpisodeRow";
import { cutOffOnListShowPage } from "../helpers/textCutOff";
import { deleteConfig } from "../api/config";
const ListShowPageEpisodeRow = props => {
  const {
    title,
    run_time,
    image_url,
    viewModal,
    list_id,
    editMode,
    id,
    list,
    setList
  } = props;

  const handleDelete = () => {
    fetch(
      `http://localhost:3000/episode_list_joins/${list_id}/${id}`,
      deleteConfig()
    ).then(r => {
      const episodes = list.episodes
        .map(e => (e.id === id ? null : e))
        .filter(e => !!e);
      const newList = { ...list, episodes };
      setList(newList);
    });
  };

  return (
    <div className="list-show-page-episode-row">
      {!!image_url ? (
        <img className="list-episode-image-row" src={image_url} alt="hello" />
      ) : (
        <img
          className="list-episode-image-row"
          src={bottomText}
          alt="bottom text"
        />
      )}
      <h4>{cutOffOnListShowPage(title)}</h4>
      <h3>{run_time}</h3>
      <div>
        <button onClick={() => viewModal(props)}>View</button>
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
  ListShowPageEpisodeRowActions
)(ListShowPageEpisodeRow);
