// import { Component } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";

import LoginForm from "./LoginForm.js";

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && <Button onClick={loginWithRedirect}>Log in</Button>
  );
  // constructor(props) {
  //   super(props);
  //   this.state = { showForm: false };
  // }
  // loginClick = () => {
  //   this.setState({
  //     showForm: true,
  //   });
  // };
  // render() {
  //   /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
  //   if (this.state.showForm) {
  //     return <LoginForm onLogin={this.props.onLogin} />;
  //   } else {
  //     return <Button onClick={this.loginClick}>Login</Button>;
  //   }
  // }
}
export default LoginButton;
