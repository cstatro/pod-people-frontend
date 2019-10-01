import React from "react";
import { Link } from "react-router-dom";
import { deleteConfig } from "../api/config";

const CurrentUserListRow = props => {
  const { name, buzzword_generate, id } = props.list;
  const { editMode, removeList, user } = props;

  const handleDelete = () => {
    fetch(`http://localhost:3000/lists/${id}`, deleteConfig());
    removeList(id, user);
  };

  return (
    <div className="list-manager-row">
      <h2 className="list-manager-row-title">{name}</h2>
      <div className="buzzwords">
        {buzzword_generate.map(s => (
          <h5 className="buzzword">{s}</h5>
        ))}
      </div>
      <div className="list-manager-row-buttons">
        <Link className="mini-button-link" to={`/list/${id}`}>
          <button className="mini-dash-button mini-view">view</button>
        </Link>
        {editMode ? (
          <button
            onClick={handleDelete}
            className="mini-dash-button mini-delete"
          >
            delete
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CurrentUserListRow;
