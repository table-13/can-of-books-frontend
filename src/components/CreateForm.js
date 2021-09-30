import { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class CreateForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.createBook({
      title: event.target.formName.value,
      description: event.target.formDescription.value,
      email: event.target.formEmail.value,
      status: event.target.formStatus.checked,
    });
  };
  render() {
    return (
      <>
        <Modal>
          <Modal.Header closeButton>
            <Modal.Title>Create a Book</Modal.Title>
          </Modal.Header>

          <Modal.Body>
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
          </Modal.Body>
          {/* <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer> */}
        </Modal>
      </>
    );
  }
}

export default CreateForm;
