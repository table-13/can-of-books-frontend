import { Component } from "react";
import Container from "react-bootstrap/Container";

export default class BestBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid>
        <p>BestBooks</p>
      </Container>
    );
  }
}
