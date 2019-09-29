import React from "react";
import { useEffect, useState } from "react";
import CurrentUserListRow from "./CurrentUserListRow";

const ListSearch = props => {
  const [listArr, setLists] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/lists")
      .then(r => r.json())
      .then(json => setLists(json));
  }, []);
  return (
    <div className="list-search-box">
      <input name="search" type="text" />
      <div className="list-results">
        {listArr.map(l => (
          <CurrentUserListRow list={l} />
        ))}
      </div>
    </div>
  );
};

export default ListSearch;
