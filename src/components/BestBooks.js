import axios from "axios";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import CreateForm from "./CreateForm.js";

//let server = process.env.REACT_APP_API_URL;
export default class BestBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      emptyMessage: "",
      // showModal: true,
    };
  }

  // openModalHandler = () => {
  //   console.log("getting in");

  //   this.setState({
  //     showModal: true,
  //   });
  //   console.log(this.state.showModal);
  // };

  // closeModalHandler = () => {
  //   this.setState({
  //     showModal: false,
  //   });
  // };

  handleBookCreate = async (bookInfo) => {
    const bookResponse = await axios.post(
      `http://localhost:3009/books`,
      bookInfo
    );
    console.log(bookResponse);
    this.fetchBooks();
  };
  componentDidMount() {
    this.fetchBooks();
  }

  async fetchBooks() {
    try {
      const response = await axios.get(`http://localhost:3009/books`);
      const books = response.data;
      console.log(books);
      if (books.length > 0) {
        this.setState({ books: response.data });
      } else {
        this.setState({ emptyMessage: "There are no books in the library." });
      }
    } catch (error) {
      console.log("we broke");
    }
  }
  render() {
    return (
      <Container fluid>
        <p>BestBooks</p>
        <Carousel>
          {this.state.books.map((bookInfo, index) => (
            <Carousel.Item key={index}>
              <h1>{bookInfo.title}</h1>
              <h4>{bookInfo.description}</h4>
              <h4>{bookInfo.email}</h4>
              <h4>{bookInfo.status} </h4>
            </Carousel.Item>
          ))}
        </Carousel>
        <Button variant="secondary">Create Book</Button>
        {/* <Button onClick={this.state.createBook} /> */}
        {this.state.emptyMessage && <h1>{this.state.emptyMessage}</h1>}
        <CreateForm
        // createBook={this.handleBookCreate}
        // show={this.state.showModal}
        // close={this.closeModalHandler}
        />
      </Container>
    );
  }
}
