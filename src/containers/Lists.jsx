import React, { Component } from "react";
import ListsFollowed from "../components/ListsPage/ListsFollowed";
import ListManager from "../components/ListsPage/ListManager";
import HotLists from "../components/ListsPage/HotLists";

class Lists extends Component {
  render() {
    return (
      <div className="lists page">
        <ListManager />

        <div className="list-mini-dashboards">
          <HotLists />
          <ListsFollowed />
        </div>
      </div>
    );
  }
}

export default Lists;
