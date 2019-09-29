import React from "react";

const CurrentUserListRow = props => {
  const { name, buzzword_generate } = props.list;
  return (
    <div className="list-manager-row">
      <h2 className="list-manager-row-title">{name}</h2>
      <div className="buzzwords">
        {buzzword_generate.map(s => (
          <h5 className="buzzword">{s}</h5>
        ))}
      </div>
    </div>
  );
};

export default CurrentUserListRow;
