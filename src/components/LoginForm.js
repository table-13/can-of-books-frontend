import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
class LoginForm extends Component {
  submitHandler = (event) => {
    event.preventDefault();
    const userInfo = {
      email: event.target.formBasicEmail.value,
      username: event.target.formBasicUsername.value
    }
  }
  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
</Form>
    );
  }
};

export default LoginForm;