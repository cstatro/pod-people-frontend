import React from "react";
import { connect } from "react-redux";
import { currentUserListState } from "../redux/actions/mapStateToProps/CurrentUserListState";
import { currentUserListActions } from "../redux/actions/dispatchActions/currentUserListsActions";
import { useEffect, useState } from "react";
import MiniListShowEdit from "./MiniListShowEdit";
import CurrentUserListRow from "./CurrentUserListRow";
const CurrentUserLists = props => {
  const { fetchUser, user } = props;
  const [editList, setEditList] = useState(null);

  useEffect(() => {
    fetchUser(user.id);
  }, []);

  return (
    <div className="current-user-lists">
      {!!user.lists && !!!editList
        ? user.lists.map(l => (
            <CurrentUserListRow setEditList={setEditList} list={l} />
          ))
        : // ? user.lists.map(l => <h2 onClick={() => setEditList(l)}>{l.name}</h2>)
          null}
      {!!editList ? <MiniListShowEdit {...editList} /> : null}
    </div>
  );
};

export default connect(
  currentUserListState,
  currentUserListActions
)(CurrentUserLists);
