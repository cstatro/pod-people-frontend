import React from "react";
import bottomText from "../image/bottom_text.png";
import { connect } from "react-redux";
import { ListShowPageEpisodeRowActions } from "../redux/actions/dispatchActions/ListShowPageEpisodeRow";
import { cutOffOnListShowPage } from "../helpers/textCutOff";
const ListShowPageEpisodeRow = props => {
  const { title, run_time, image_url, viewModal } = props;

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
      <h4>{cutOffOnListShowPage(title)}</h4>
      <h3>{run_time}</h3>
      <button onClick={() => viewModal(props)}>View</button>
    </div>
  );
};

export default connect(
  null,
  ListShowPageEpisodeRowActions
)(ListShowPageEpisodeRow);
