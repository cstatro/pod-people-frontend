import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Player from "./Player";
import { connect } from "react-redux";
import { navBarActions } from "../redux/actions/dispatchActions/NavBarActions";
import { navState } from "../redux/actions/mapStateToProps/navState";

class NavBar extends Component {
  componentDidUpdate() {
    const { pathname } = this.props.location;
    const { userId } = this.props;
    console.log("checking", userId, pathname);
    if (pathname != "/" && !!!userId) {
      this.props.history.push("/");
    }
  }
  handleLogOut = () => {
    localStorage.clear();
    this.props.logOut();
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
  navState,
  navBarActions
)(withRouter(NavBar));
