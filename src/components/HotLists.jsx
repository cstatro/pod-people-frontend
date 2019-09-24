import React from "react";
import { connect } from "react-redux";
import { HotListState } from "../redux/actions/mapStateToProps/HotListState";

const HotLists = props => {
  return (
    <div className="hot-lists">
      <h1>Hot Lists</h1>
    </div>
  );
};

export default connect(HotListState)(HotLists);
