import React from "react";
import { listsFollowed } from "../redux/actions/mapStateToProps/listsFollowed";
import { connect } from "react-redux";
import ListShowRow from "./ListShowRow";

const ListsFollowed = props => {
  const { followed_lists: lists } = props.user;
  console.log(lists);
  return (
    <div className="lists-followed">
      {lists.map(l => (
        <ListShowRow showFollow={false} {...l} />
      ))}
    </div>
  );
};

export default connect(listsFollowed)(ListsFollowed);
