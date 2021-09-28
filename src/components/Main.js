import { Component } from "react";
// import BestBooks from ".BestBooks.js";
import Container from "react-bootstrap/Container";
import axios from "axios";
import BestBooks from "./BestBooks";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }
  render() {
    return (
      <Container fluid>
        <p>Main</p>
        <BestBooks />
      </Container>
    );
  }
}
