import React from "react";
import bottomText from "../image/bottom_text.png";
const ListShowPageEpisodeRow = props => {
  const { title, run_time, image_url } = props;
  return (
    <div className="list-show-page-episode-row">
      {!!image_url ? (
        <img className="list-episode-image-row" src={image_url} alt="hello" />
      ) : (
        <img
          className="list-episode-image-row"
          src={bottomText}
          alt="bottom text"
        />
      )}
      <h4>{title}</h4>
      <h3>{run_time}</h3>
      <button>what up</button>
    </div>
  );
};

export default ListShowPageEpisodeRow;
