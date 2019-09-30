import React from "react";
import { postConfig } from "../../api/config";
import { useState } from "react";
const PodCastRssShow = props => {
  const { name, image_url } = props.podcast;
  const { user, description } = props;
  const [list_id, setListId] = useState(null);

  const handleChange = e => {
    setListId(parseInt(e.target.value));
  };
  const handleButton = () => {
    const podcastConfig = postConfig({ ...props.podcast, description });
    fetch("http://localhost:3000/podcasts", podcastConfig)
      .then(r => r.json())
      .then(json => {
        const listJoinConfig = postConfig({ podcast_id: json.id, list_id });
        fetch("http://localhost:3000/podcast_list_joins", listJoinConfig)
          .then(r => r.json())
          .then(j => console.log(j));
      });
  };
  return (
    <>
      <h2>{name}</h2>
      <img className="modal-image" src={image_url} alt="" />
      <p>{props.description}</p>
      {!!user.lists ? (
        <>
          <select name="list_id" onChange={handleChange}>
            <option value={null}>Please Choose A List</option>{" "}
            {user.lists.map(l => (
              <option value={l.id}>{l.name}</option>
            ))}
          </select>
          <button onClick={handleButton}>+</button>
        </>
      ) : null}
    </>
  );
};

export default PodCastRssShow;
