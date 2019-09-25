import React from "react";
import { postConfig } from "../api/config";

const ListShowRow = props => {
  const { name, user_id } = props;

  const followList = () => {
    const obj = { user_id, list_id: props.id };
    const config = postConfig(obj);
    fetch("http://localhost:3000/followers", config)
      .then(r => r.json())
      .then(json => console.log(json));
  };

  return (
    <div className="mini-list-show-row">
      {name}
      <button onClick={followList}>follow</button>
      <button>maybe a show page</button>
    </div>
  );
};

export default ListShowRow;
