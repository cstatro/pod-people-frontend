import React, { Component } from "react";
import ListManager from "../components/ListManager";

class Lists extends Component {
  state = {};
  render() {
    return (
      <div className="lists page">
        <h1>Lists Page</h1>
        <ListManager />
      </div>
    );
  }
}

export default Lists;
