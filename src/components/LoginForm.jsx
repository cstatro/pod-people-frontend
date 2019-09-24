import React from "react";

const LoginForm = props => {
  return (
    <div className="login-area page">
      <div className="login-box">
        <form className="login-form">
          <input placeholder="Username" type="text" />
          <input placeholder="Password" type="password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
