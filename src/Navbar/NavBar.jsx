import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Player from "./Player";
import { connect } from "react-redux";
import { navBarActions } from "../redux/actions/dispatchActions/NavBarActions";

class NavBar extends Component {
  handleLogOut = async () => {
    localStorage.clear();
    this.props.logOut();
    // this.props.history.push("/");
  };
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
        <h2 onClick={this.handleLogOut} className="nav-link">
          Logout
        </h2>
        <Player />
      </div>
    );
  }
}

export default connect(
  null,
  navBarActions
)(withRouter(NavBar));
