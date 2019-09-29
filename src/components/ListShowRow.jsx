import React from "react";
import { postConfig } from "../api/config";
import { connect } from "react-redux";
import { listShowRowActions } from "../redux/actions/dispatchActions/ListShowRowActions";
import { Link } from "react-router-dom";

const ListShowRow = props => {
  const { name, fetchUser, showFollow } = props;

  const followList = () => {
    const obj = { user_id: props.loggedInId, list_id: props.id };
    const config = postConfig(obj);
    fetch("http://localhost:3000/followers", config)
      .then(r => r.json())
      .then(json => fetchUser(props.loggedInId));
  };

  return (
    <div className="mini-list-show-row">
      {name}
      {showFollow ? (
        <button className="mini-dash-button" onClick={followList}>
          follow
        </button>
      ) : null}
      <Link className="link-button" to={`/list/${props.id}`}>
        <button className="mini-dash-button">View</button>
      </Link>
    </div>
  );
};

ListShowRow.defaultProps = { showFollow: true };

export default connect(
  null,
  listShowRowActions
)(ListShowRow);
