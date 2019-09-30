import React from "react";
import { connect } from "react-redux";
import { modalActions } from "../redux/actions/dispatchActions/ModalActions";
import { useEffect } from "react";
import EpisodeRssShow from "../components/SubModal/EpisodeRssShow";
import PodCastRssShow from "../components/SubModal/PodCastRssShow";
import EpisodeDataShow from "../components/SubModal/EpisodeDataShow";
import PodcastDataShow from "../components/SubModal/PodcastDataShow";
const Modal = props => {
  const { closeModal, refreshUser, user, objectType } = props;

  useEffect(() => {
    refreshUser(user.id);
  }, []);

  const handleClick = e => {
    e.stopPropagation();
  };

  const serveComponent = () => {
    switch (objectType) {
      case "episode":
        return (
          <EpisodeRssShow
            podcast={props.podcast}
            {...props.displayObj}
            user={user}
          />
        );
      case "podcast":
        return (
          <PodCastRssShow
            podcast={props.podcast}
            description={props.displayObj}
            user={user}
          />
        );
      case "episodeData":
        return <EpisodeDataShow lists={user.lists} {...props.displayObj} />;
      case "podcastData":
        return <PodcastDataShow lists={user.lists} {...props.displayObj} />;
      default:
        return <h1> There was a problem loading this</h1>;
    }
  };
  return (
    <div onClick={closeModal} className="modal-wrap">
      <div onClick={handleClick} className="modal">
        {serveComponent()}
      </div>
    </div>
  );
};

export default connect(
  null,
  modalActions
)(Modal);
