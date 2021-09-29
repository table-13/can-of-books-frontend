
import { Component } from "react";
// import BestBooks from ".BestBooks.js";
import BestBooks from "./BestBooks";
import Profile from "./Profile";
import Login from "./Login";

export default class Main extends Component {

  render() {
    return (
      <>
          {
            this.props.user ? (
              <BestBooks />
            ) : (
              <Login onLogin={this.loginHandler} />
            )
          }
          {/* <Route path="/BestBooks">
          <BestBooks />
          </Route> */}
    </>
    );
  }
}
