import React from "react";
const ListShowPagePodcastRow = props => {
  const { image_url, name } = props;
  return (
    <div className="list-show-page-podcast">
      <img src={image_url} alt="" />
      <h3>{name}</h3>
      <h3>test</h3>
      <h3>test</h3>
    </div>
  );
};

export default ListShowPagePodcastRow;
