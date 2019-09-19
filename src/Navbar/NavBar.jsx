import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <h1 className="logo">Pod People</h1>
        <h2 className="nav-link">Home</h2>
        <h2 className="nav-link">Browse</h2>
        <h2 className="nav-link">Lists</h2>
      </div>
    );
  }
}

export default NavBar;
