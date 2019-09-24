import React, { Component } from "react";
import LoginForm from "../components/LoginForm";

class Login extends Component {
  state = { createNew: false };
  render() {
    const { createNew } = this.state;
    return <>{createNew ? null : <LoginForm />}</>;
  }
}

export default Login;
