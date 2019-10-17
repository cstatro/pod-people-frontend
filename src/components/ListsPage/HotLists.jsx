import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { HotListState } from "../../redux/actions/mapStateToProps/HotListState";
import ListShowRow from "./ListShowRow";

const HotLists = props => {
  const { user } = props;
  const [hotLists, setHotLists] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/lists`)
      .then(r => r.json())
      .then(lists => setHotLists(lists));
  }, []);

  return (
    <div className="hot-lists">
      <h2 className="dash-label">Hot Lists</h2>
      <div className="hot-list-content">
        {hotLists
          .filter(l => l.user_id != user.id)
          .map(l => (
            <ListShowRow loggedInId={user.id} {...l} />
          ))}
      </div>
    </div>
  );
};

export default connect(HotListState)(HotLists);
