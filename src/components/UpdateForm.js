import { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class UpdateForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.updateBook({
      title: event.target.formName.value,
      description: event.target.formDescription.value,
      email: event.target.formEmail.value,
      status: event.target.formStatus.checked,
    });
  };
  render() {
    return (
      <>
        <Modal show={this.props.updateModal} onHide={this.props.handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update Book</Modal.Title>
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
                <Form.Control type="text" placeholder="Email: " />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formStatus">
                <Form.Check label="Checked in?" type="checkbox" />
              </Form.Group>
              <Button variant="primary" type="Submit" onClick={this.props.handleModal}>
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default UpdateForm;