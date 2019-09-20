import React from "react";

const ShowDetails = props => {
  const { itunes, items } = props;
  console.log(itunes);
  console.log(itunes.image);
  return (
    <div className="podcast-show-card">
      <div className="podcast-show-pic">
        <img src={itunes.image} alt="" />
      </div>

      <div className="podcast-show-details"></div>
    </div>
  );
};

export default ShowDetails;
