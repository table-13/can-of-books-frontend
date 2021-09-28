import { Component } from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

class CreateForm extends Component {
  handleSubmit= (event) => {
    event.preventDefault();
    this.props.createBook({
      title: event.target.formName.value,
      description: event.target.formDescription.value,
      email: event.target.formEmail.value,
      status: event.target.formStatus.value
    })
    
  }
  render() {
    

    return (
      <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Create a Book</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>
              Enter a Book name
            </Form.Label>
            <Form.Control type="text" placeholder="Book name"/>
          </Form.Group>
          <Form.Group controlId="formDescription" >
            <Form.Label>
              Enter a Description
            </Form.Label>
            <Form.Control type="text" placeholder="Description"/>
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>
              Enter email
            </Form.Label>
            <Form.Control type="text" placeholder="Email"/>
          </Form.Group>
          <Form.Group controlId="formStatus">
            <Form.Label>
              Checked in?
            </Form.Label>
            <Form.Check controlId="formStatus" type="checkbox"/>
            </Form.Group>
            <Button variant="secondary" type="Submit">
              Create
            </Button >
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer> */}
      </Modal.Dialog>
    </>

    );
  }
};

export default CreateForm;