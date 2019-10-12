import React, { Component } from "react";
import SearchColumn from "../components/SearchColumn";
import ListSearch from "../components/BrowsePage/ListSearch";

class Browse extends Component {
  render() {
    return (
      <div className="browser page">
        <ListSearch />
        <SearchColumn />
      </div>
    );
  }
}

export default Browse;
