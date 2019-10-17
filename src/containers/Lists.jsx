import React, { Component } from "react";
import HotLists from "../components/HotLists";
import ListsFollowed from "../components/ListsFollowed";
import ListManager from "../components/ListsPage/ListManager";

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
