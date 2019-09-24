import React from "react";

const MiniListShowEdit = props => {
  const { episodes } = props;
  return (
    <>
      <h2>Episodes</h2>
      <ul>
        {episodes.map(e => (
          <li>{e.title}</li>
        ))}
      </ul>
    </>
  );
};

export default MiniListShowEdit;
