import React from "react";

const ShowDetails = props => {
  const { itunes, items, title, description } = props;
  console.log(itunes);
  console.log(itunes.image);
  return (
    <div className="podcast-show-card">
      <div className="podcast-show-pic">
        <img src={itunes.image} alt="" />
      </div>
      <div className="podcast-show-details">
        <div className="podcast-show-title">
          <h2>{title}</h2>
        </div>
        <div className="podcast-show-details-info">
          <div className="podcast-show-description">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
