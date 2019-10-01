import React from "react";
import { connect } from "react-redux";
import { currentUserListState } from "../redux/actions/mapStateToProps/CurrentUserListState";
import { currentUserListActions } from "../redux/actions/dispatchActions/currentUserListsActions";
import { useEffect, useState } from "react";
// import MiniListShowEdit from "./MiniListShowEdit"; may need to deprecate this component
import CurrentUserListRow from "./CurrentUserListRow";
const CurrentUserLists = props => {
  const { fetchUser, user, editMode, removeList } = props;
  // const [editList, setEditList] = useState(null);

  useEffect(() => {
    fetchUser(user.id);
  }, []);

  return (
    <div className="current-user-lists">
      {!!user.lists
        ? user.lists.map(l => (
            <CurrentUserListRow
              user={user}
              removeList={removeList}
              editMode={editMode}
              list={l}
            />
          ))
        : null}
    </div>
  );
};

export default connect(
  currentUserListState,
  currentUserListActions
)(CurrentUserLists);
