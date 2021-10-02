import React from "react";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Profile from "./components/Profile";
import BestBooks from "./components/BestBooks";
import Login from "./components/Login";
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
              {this.state.user ? (
                <BestBooks user={this.state.user} />
              ) : (
                <Login onLogin={this.loginHandler} />
              )}
            </Route>
            <Route path="/Profile">
              {this.state.user ? (
              <Profile
                path="Profile"
                text="some text"
                user={this.state.user}
              />
              ) : (
                <Login onLogin={this.loginHandler} />
              )}
            </Route>
          </Switch>
          <Footer text="Authors: Anthony, Brian, Harvey" />
        </Router>
      </>
    );
  }
}
export default App;
