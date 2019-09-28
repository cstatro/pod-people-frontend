import React from "react";
import { useEffect, useState } from "react";
import ListShowPageEpisodeRow from "../components/ListShowPageEpisodeRow";
const ListShowPage = props => {
  const [list, setList] = useState({
    name: null,
    description: null,
    podcasts: [],
    episodes: [],
    followers: []
  });
  const { podcasts, episodes } = list;

  useEffect(() => {
    fetch(`http://localhost:3000/lists/${props.paramId}`)
      .then(r => r.json())
      .then(json => setList(json));
  }, []);
  return (
    <div className="list-show page">
      <div className="list-show-div">
        <div className="list-show-title">
          <h1>{list.name}</h1>
        </div>
        <p>{list.description}</p>
        <div className="list-show-display-area">
          <div className="list-section-head">
            <h2>Podcasts</h2>
          </div>
          <div className="list-row-container"></div>
          <div className="list-section-head">
            <h2>Episodes</h2>
          </div>
          <div className="list-row-container">
            {episodes.map(e => (
              <ListShowPageEpisodeRow key={e.id} {...e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListShowPage;
