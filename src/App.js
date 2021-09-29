import React from "react";
import Main from "./components/Main.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Profile from "./components/Profile";

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
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              <Main path="Main" />
            </Route>
            <Route path="/Profile">
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Profile path="Profile" />
            </Route>
          </Switch>
          <Footer text="Authors: Anthony, Brian, Harvey" />
        </Router>
      </>
    );
  }
}
export default App;
