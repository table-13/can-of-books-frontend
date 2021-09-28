
import { Component } from "react";
// import BestBooks from ".BestBooks.js";


import BestBooks from "./BestBooks";
import Profile from "./Profile";


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
    };
  }
  render() {
    return (
      
      <>
      <Router>
        <nav>
          <h1>Can of Books</h1>
          <Link to="/BestBooks">Home</Link>
          <Link to="/Profile">Profile</Link>
        </nav>
        <Switch>
          <Route path="/BestBooks">
          <BestBooks />
        
            

          </Route>
          <Route path="/Profile">
           <Profile />
          </Route>
        </Switch>
      </Router>

      
     
    </>
        
        
    );
  }
}
