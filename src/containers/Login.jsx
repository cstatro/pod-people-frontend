import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import SignUp from "../components/SignUp";

class Login extends Component {
  state = { createNew: false };
  render() {
    const { createNew } = this.state;
    return <>{createNew ? <SignUp /> : <LoginForm />}</>;
  }
}

export default Login;
