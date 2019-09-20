import React, { Component } from "react";
import { Link } from "react-router-dom";
import Player from "./Player";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <h1 className="logo">Pod People</h1>

        <Link to="/home">
          <h2 className="nav-link">Home</h2>
        </Link>
        <Link to="/browse">
          <h2 className="nav-link">Browse</h2>
        </Link>
        <Link to="/lists">
          <h2 className="nav-link">Lists</h2>
        </Link>
        <Player />
      </div>
    );
  }
}

export default NavBar;
