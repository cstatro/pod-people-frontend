import React, { Component } from "react";
import ListManager from "../components/ListManager";
import HotLists from "../components/HotLists";
import ListsFollowed from "../components/ListsFollowed";

class Lists extends Component {
  state = {};
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
