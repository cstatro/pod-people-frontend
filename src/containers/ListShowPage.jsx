import React from "react";
import { useEffect, useState } from "react";
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
        <h2>yo</h2>
      </div>
    </div>
  );
};

export default ListShowPage;
