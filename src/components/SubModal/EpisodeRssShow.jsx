import React from "react";
import { useState, useEffect } from "react";
import { postConfig } from "../../api/config";
import { connect } from "react-redux";
import { modalActions } from "../../redux/actions/dispatchActions/ModalActions";
import PlayButton from "../PlayButton";

const EpisodeRssShow = props => {
  const {
    closeModal,
    title,
    itunes,
    user,
    enclosure,
    podcast,
    description
  } = props;
  const [list_id, setList] = useState(null);
  const handleChange = e => {
    setList(parseInt(e.target.value));
  };
  const handleButton = () => {
    // const config = postConfig({ list_id, user_id: user.id });
    const podcastConfig = postConfig({ ...props.podcast, description });
    fetch("http://localhost:3000/podcasts", podcastConfig)
      .then(r => r.json())
      .then(json => {
        const episode = {
          podcast_id: json.id,
          title: title,
          image_url: itunes.image,
          audio_link: enclosure.url,
          run_time: itunes.duration,
          description: itunes.summary
        };
        const episodeConfig = postConfig(episode);
        fetch("http://localhost:3000/episodes", episodeConfig)
          .then(r => r.json())
          .then(json => {
            console.log("Whats going on", json);
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

  return (
    <>
      <h2>{title}</h2>
      <img className="episode-image" src={podcast.image_url} alt="" />
      <p>{itunes.summary}</p>
      {!!user.lists ? (
        <>
          <select name="list_id" onChange={handleChange}>
            <option value={null}>Please Choose A List</option>{" "}
            {user.lists.map(l => (
              <option value={l.id}>{l.name}</option>
            ))}
          </select>
          <button onClick={handleButton}>+</button>
          <PlayButton link={enclosure.url} />
        </>
      ) : null}
    </>
  );
};

export default connect(
  null,
  modalActions
)(EpisodeRssShow);
