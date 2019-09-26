import React from "react";

const MiniListShowEdit = props => {
  const { episodes, podcasts } = props;
  return (
    <>
      <h2>Episodes</h2>
      <ul>
        {episodes.map(e => (
          <li>{e.title}</li>
        ))}
      </ul>
      <h2>Podcasts</h2>
      <ul>
        {podcasts.map(p => (
          <li>{p.name}</li>
        ))}
      </ul>
    </>
  );
};

export default MiniListShowEdit;
