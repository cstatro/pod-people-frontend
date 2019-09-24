import React, { Component } from "react";
import ListManager from "../components/ListManager";
import HotLists from "../components/HotLists";

class Lists extends Component {
  state = {};
  render() {
    return (
      <div className="lists page">
        <ListManager />
        <HotLists />
      </div>
    );
  }
}

export default Lists;
