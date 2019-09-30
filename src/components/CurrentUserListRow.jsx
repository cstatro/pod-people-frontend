import React from "react";

const CurrentUserListRow = props => {
  const { name, buzzword_generate } = props.list;
  const { editMode } = props;
  return (
    <div className="list-manager-row">
      <h2 className="list-manager-row-title">{name}</h2>
      <div className="buzzwords">
        {buzzword_generate.map(s => (
          <h5 className="buzzword">{s}</h5>
        ))}
      </div>
      <div className="list-manager-row-buttons">
        <button>view</button>
        {editMode ? <button>delete</button> : null}
      </div>
    </div>
  );
};

export default CurrentUserListRow;
