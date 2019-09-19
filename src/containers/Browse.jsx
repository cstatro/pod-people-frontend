import React, { Component } from "react";
import SearchColumn from "../components/SearchColumn";

class Browse extends Component {
  state = {};
  render() {
    return (
      <div className="browser page">
        <h1>Browsing page</h1>
        <SearchColumn />
      </div>
    );
  }
}

export default Browse;
