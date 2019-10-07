import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import SignUp from "../components/SignUp";
import { withToken } from "../api/config";
import { connect } from "react-redux";
import { loginActions } from "../redux/actions/dispatchActions/loginActions";

class Login extends Component {
  state = { createNew: false };
  componentDidMount() {
    const { fetchUser } = this.props;
    if (!!localStorage.authToken) {
      fetch(`${process.env.REACT_APP_BACKEND}/authenticate`, withToken)
        .then(r => r.json())
        .then(json => fetchUser(json.id));
    }
  }
  render() {
    const { createNew } = this.state;

    return (
      <>
        {createNew ? (
          <SignUp />
        ) : (
          <>
            <LoginForm />
            <button onClick={() => this.setState({ createNew: true })}>
              Signup
            </button>
          </>
        )}
      </>
    );
  }
}

export default connect(
  null,
  loginActions
)(Login);
