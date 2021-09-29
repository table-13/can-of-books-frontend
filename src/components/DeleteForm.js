import { Component } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class DeleteForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.deleteBook({
      title: event.target.formName.value,
      
      email: event.target.formEmail.value,
      
    });
  };
  render() {
    return (
      <>
        
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Enter a Book name</Form.Label>
                <Form.Control type="text" placeholder="Book name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Enter a Description</Form.Label>
                <Form.Control type="text" placeholder="Description" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Enter email</Form.Label>
                <Form.Control type="text" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formStatus">
                <Form.Check label="Checked in?" type="checkbox" />
              </Form.Group>
              <Button variant="primary" type="Submit">
                Submit
              </Button>
            </Form>
          
      </>
    );
  }
}

export default DeleteForm;
