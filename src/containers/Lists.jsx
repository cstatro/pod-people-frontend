import React, { Component } from "react";
import ListManager from "../components/ListManager";

class Lists extends Component {
  state = {};
  render() {
    return (
      <div className="lists page">
        <ListManager />
      </div>
    );
  }
}

export default Lists;
