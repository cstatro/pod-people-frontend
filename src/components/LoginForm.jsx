import React, { Component } from "react";
import { postConfig } from "../api/config";
import { loginActions } from "../redux/actions/dispatchActions/loginActions";
import { connect } from "react-redux";
class LoginForm extends Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    const { setUser } = this.props;
    e.preventDefault();
    const config = postConfig({ ...this.state });
    fetch(`${process.env.REACT_APP_BACKEND}/login`, config)
      .then(r => r.json())
      .then(json => {
        localStorage.setItem("authToken", json.token);
        setUser(json);
      });
  };
  render() {
    return (
      <div className="login-area page">
        <div className="login-box">
          <form onSubmit={this.handleSubmit} className="login-form">
            <input
              onChange={this.handleChange}
              placeholder="Username"
              name="username"
              type="text"
            />
            <input
              onChange={this.handleChange}
              placeholder="Password"
              name="password"
              type="password"
            />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  loginActions
)(LoginForm);
