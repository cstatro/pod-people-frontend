import React from "react";
import { useEffect, useState } from "react";
import CurrentUserListRow from "./CurrentUserListRow";

const ListSearch = () => {
  const [listArr, setLists] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/lists")
      .then(r => r.json())
      .then(json => setLists(json));
  }, []);
  useEffect(() => {
    if (filtered) {
      fetch("http://localhost:3000/search", {
        headers: {
          search
        }
      })
        .then(r => r.json())
        .then(json => setResult(json));
    }
  }, [filtered]);

  const handleChange = e => {
    if (e.target.value === "") {
      setFiltered(false);
    } else {
      setSearch(e.target.value.split(" "));
    }
  };

  return (
    <div className="list-search-box">
      <div className="list-search-top">
        <input onChange={handleChange} name="search" type="text" />
        <button>search</button>
      </div>
      <div className="list-results">
        {filtered
          ? result.map(l => <CurrentUserListRow list={l} />)
          : listArr.map(l => <CurrentUserListRow list={l} />)}
      </div>
    </div>
  );
};

export default ListSearch;
