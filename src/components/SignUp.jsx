import React, { Component } from "react";
import { postConfig } from "../api/config";
import { connect } from "react-redux";
import { SignUpActions } from "../redux/actions/dispatchActions/SignUpActions";
import { withRouter } from "react-router-dom";
import { loginFormState } from "../redux/actions/mapStateToProps/LoginState";

class SignUp extends Component {
  componentDidUpdate() {
    const { id } = this.props.user;
    if (!!id) {
      this.props.history.push("/home");
      console.log(id);
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { fetchUser } = this.props;
    e.preventDefault();
    const config = postConfig({ ...this.state });
    fetch(`${process.env.REACT_APP_BACKEND}/users`, config)
      .then(r => r.json())
      .then(json => {
        localStorage.setItem("authToken", json.token);
      })
      .then(() => {
        fetch(`${process.env.REACT_APP_BACKEND}/authenticate`, {
          headers: { auth: localStorage.authToken }
        })
          .then(r => r.json())
          .then(json => fetchUser(json.id));
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
  loginFormState,
  SignUpActions
)(withRouter(SignUp));
