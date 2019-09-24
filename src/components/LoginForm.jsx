import React, { Component } from "react";
import { postConfig } from "../api/config";

class LoginForm extends Component {
  state = {};

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log({ ...this.state });
    const config = postConfig({ ...this.state });
    fetch("http://localhost:3000/login", config)
      .then(r => r.json())
      .then(json => console.log(json));
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
export default LoginForm;
