
import { Component } from "react";
// import BestBooks from ".BestBooks.js";
import BestBooks from "./BestBooks";
// import Profile from "./Profile";
import Login from "./Login";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      user: null,
    };
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      
      <>
      <Router>
        <nav>
          <h1>Can of Books</h1>
          {/* <Link to="/BestBooks">Home</Link>
          <Link to="/Profile">Profile</Link> */}
        </nav>
        <Switch>
        <Route exact path="/Profile">
          {
            this.state.user ? (
              <BestBooks user={this.state.user}/>
            ) : (
              <Login onLogin={this.loginHandler} />
            )
          }
          </Route>
          {/* <Route path="/BestBooks">
          <BestBooks />
          </Route> */}
          
        </Switch>
      </Router>

      
     
    </>
        
        
    );
  }
}
