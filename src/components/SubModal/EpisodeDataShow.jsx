import React from "react";
import { useState } from "react";
import { postConfig } from "../../api/config";
import { connect } from "react-redux";
import { EpisodeShowDataActions } from "../../redux/actions/dispatchActions/EpisodeShowDataActions";
import PlayButton from "../PlayButton";
const EpisodeDataShow = props => {
  const { title, lists, closeModal, audio_link, description } = props;

  const [list_id, setListId] = useState(null);

  const handleChange = e => {
    setListId(parseInt(e.target.value));
  };

  const handleButton = () => {
    const config = postConfig({ list_id, episode_id: props.id });
    fetch("http://localhost:3000/episode_list_joins", config).then(r => {
      closeModal();
    });
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <select name="list_id" onChange={handleChange}>
        <option value={null}>Please Choose A List</option>{" "}
        {lists ? lists.map(l => <option value={l.id}>{l.name}</option>) : null}
      </select>
      <button onClick={handleButton}>+</button>
      <PlayButton link={audio_link} />
    </div>
  );
};

export default connect(
  null,
  EpisodeShowDataActions
)(EpisodeDataShow);
