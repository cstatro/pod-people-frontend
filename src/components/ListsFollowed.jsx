import React from "react";
import { listsFollowed } from "../redux/actions/mapStateToProps/listsFollowed";
import { connect } from "react-redux";
import ListShowRow from "./ListShowRow";

const ListsFollowed = props => {
  const { lists } = props;
  return (
    <div className="lists-followed">
      {lists.map(l => (
        <ListShowRow {...l} />
      ))}
    </div>
  );
};

export default connect(listsFollowed)(ListsFollowed);
