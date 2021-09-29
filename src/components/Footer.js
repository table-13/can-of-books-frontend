import { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>{this.props.text}</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
