import React from "react";
import { postConfig } from "../api/config";

const FollowButton = props => {
  const handleFollow = () => {
    const config = postConfig({ ...props });
    fetch(`${process.env.REACT_APP_BACKEND}/followers`, config);
  };
  return (
    <button
      onClick={handleFollow}
      className="list-page-details-button details-follow"
    >
      Follow
    </button>
  );
};

export default FollowButton;
