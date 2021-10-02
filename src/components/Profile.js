import { Component } from "react";
import Container from "react-bootstrap/Container";

export default class Profile extends Component {
  render() {
    console.log(this.props.user)
    return (
      <Container>
        <h1>Profiles</h1>
        {/* <p>{this.props.user ? this.props.user.email : ''}</p> */}
        <p>{this.props.user.email}</p>
        <p>{this.props.user.username}</p>
      </Container>
    );
  }
}
