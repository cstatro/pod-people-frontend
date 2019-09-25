import React, { Component } from "react";
import { postConfig } from "../api/config";
import { connect } from "react-redux";
import { SignUpActions } from "../redux/actions/dispatchActions/SignUpActions";
import { withRouter } from "react-router-dom";

class SignUp extends Component {
  state = {};

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    const { fetchUser } = this.props;
    e.preventDefault();
    console.log({ ...this.state });
    const config = postConfig({ ...this.state });
    fetch("http://localhost:3000/users", config)
      .then(r => r.json())
      .then(json => {
        fetchUser(json.id);
        this.props.history.push("/home");
      });
  };
  render() {
    return (
      <div className="login-area page">
        <div className="login-box">
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              placeholder="name"
            />
            <input
              onChange={this.handleChange}
              type="text"
              name="username"
              placeholder="username"
            />
            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              id=""
              placeholder="password"
            />
            <input type="submit" value="Create New User" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  SignUpActions
)(withRouter(SignUp));
