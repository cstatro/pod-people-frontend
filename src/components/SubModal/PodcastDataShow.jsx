import React from "react";
import { podcastShowPageActions } from "../../redux/actions/dispatchActions/podCastShowPageAction";
import { connect } from "react-redux";
import { postConfig } from "../../api/config";
import { useState } from "react";
import { podcastShowDataActions } from "../../redux/actions/dispatchActions/podcastShowDataActions";
const PodcastDataShow = props => {
  const { name, closeModal, lists, description } = props;

  const [list_id, setListId] = useState(null);

  const handleChange = e => {
    setListId(parseInt(e.target.value));
  };

  const handleButton = () => {
    const config = postConfig({ list_id, podcast_id: props.id });
    fetch(`${process.env.REACT_APP_BACKEND}/podcast_list_joins`, config).then(
      r => {
        closeModal();
      }
    );
  };
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <select name="list_id" onChange={handleChange}>
        <option value={null}>Please Choose A List</option>{" "}
        {lists ? lists.map(l => <option value={l.id}>{l.name}</option>) : null}
      </select>
      <button onClick={handleButton}>+</button>
    </div>
  );
};

export default connect(
  null,
  podcastShowDataActions
)(PodcastDataShow);
