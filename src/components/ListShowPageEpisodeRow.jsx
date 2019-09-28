import React from "react";

const ListShowPageEpisodeRow = props => {
  const { title, run_time, artist_name } = props;
  return (
    <div className="list-show-page-episode-row">
      <h3>{artist_name}</h3>
      <h4>{title}</h4>
      <h3>{run_time}</h3>
      <button>what up</button>
    </div>
  );
};

export default ListShowPageEpisodeRow;
