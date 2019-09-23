import React from "react";
import { connect } from "react-redux";
import { modalActions } from "../redux/actions/dispatchActions/ModalActions";
import { useEffect, useState } from "react";
import { postConfig } from "../api/config";
const Modal = props => {
  const { closeModal, title, itunes, refreshUser, user, enclosure } = props;

  useEffect(() => {
    refreshUser(1);
  }, []);
  const [list_id, setList] = useState(null);

  const handleClick = e => {
    e.stopPropagation();
  };
  const handleButton = () => {
    // const config = postConfig({ list_id, user_id: user.id });
    const podcastConfig = postConfig(props.podcast);
    fetch("http://localhost:3000/podcasts", podcastConfig)
      .then(r => r.json())
      .then(json => {
        const episode = {
          podcast_id: json.id,
          title: title,
          image_url: itunes.image_url,
          audio_link: enclosure.url,
          run_time: itunes.duration
        };
        const episodeConfig = postConfig(episode);
        fetch("http://localhost:3000/episodes", episodeConfig)
          .then(r => r.json())
          .then(json => {
            console.log(json);
            const episodeJoin = { list_id, episode_id: json.id };
            const episodeJoinConfig = postConfig(episodeJoin);
            fetch(
              "http://localhost:3000/episode_list_joins",
              episodeJoinConfig
            );
          });
      });
    closeModal();
  };
  const handleChange = e => {
    setList(parseInt(e.target.value));
    console.log(e.target.value);
  };

  return (
    <div onClick={closeModal} className="modal-wrap">
      <div onClick={handleClick} className="modal">
        <h2>{title}</h2>
        <p>{itunes.summary}</p>
        {!!user.lists ? (
          <>
            <select name="list_id" onChange={handleChange}>
              {user.lists.map(l => (
                <option value={l.id}>{l.name}</option>
              ))}
            </select>
            <button onClick={handleButton}>+</button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default connect(
  null,
  modalActions
)(Modal);
