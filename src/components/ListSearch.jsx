import React from "react";
import { useEffect, useState } from "react";
import CurrentUserListRow from "./CurrentUserListRow";

const ListSearch = () => {
  const [listArr, setLists] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/lists`)
      .then(r => r.json())
      .then(json => setLists(json));
  }, []);
  useEffect(() => {
    if (filtered) {
      fetch(`${process.env.REACT_APP_BACKEND}/search`, {
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
        <input
          placeholder="Search Lists"
          onChange={handleChange}
          name="search"
          type="text"
          className="search-list-input search-input"
          autoComplete="off"
        />
        <button className="search-button" onClick={() => setFiltered(true)}>
          Search
        </button>
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
