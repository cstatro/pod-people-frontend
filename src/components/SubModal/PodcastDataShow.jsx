import React from "react";
import { podcastShowPageActions } from "../../redux/actions/dispatchActions/podCastShowPageAction";
import { connect } from "react-redux";
import { postConfig } from "../../api/config";
import { useState } from "react";
import { podcastShowDataActions } from "../../redux/actions/dispatchActions/podcastShowDataActions";
const PodcastDataShow = props => {
  const { name, closeModal, lists } = props;

  const [list_id, setListId] = useState(null);

  const handleChange = e => {
    setListId(parseInt(e.target.value));
  };

  const handleButton = () => {
    const config = postConfig({ list_id, podcast_id: props.id });
    fetch("http://localhost:3000/podcast_list_joins", config).then(r => {
      closeModal();
    });
  };
  return (
    <div>
      <h2>{name}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minus
        iure! Nemo nam labore nesciunt modi unde aspernatur quisquam, dicta,
        impedit dolores eos inventore consequuntur aliquid iure, consectetur
        quod vero.
      </p>
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
