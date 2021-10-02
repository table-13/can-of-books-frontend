import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Profile from "./components/Profile";
import BestBooks from "./components/BestBooks";
// import Login from "./components/Login";
import LoginButton from "./components/LoginButton";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  loginHandler = (user) => {
    this.setState({
      user,
    });
  };

  logoutHandler = () => {
    this.setState({
      user: null,
    });
  };
  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              <LoginButton />
              {this.props.auth0.isAuthenticated && (
                <BestBooks user={this.state.user} />
              )}
            </Route>
            <Route path="/Profile">
              <Profile path="Profile" text="some text" />
            </Route>
          </Switch>
          <Footer text="Authors: Anthony, Brian, Harvey" />
        </Router>
      </>
    );
  }
}
export default withAuth0(App);
