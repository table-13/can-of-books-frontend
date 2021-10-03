import axios from "axios";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import { withAuth0 } from "@auth0/auth0-react";

import Button from "react-bootstrap/Button";
import CreateForm from "./CreateForm.js";
import BookCarousel from "./BookCarousel.js";
import UpdateForm from "./UpdateForm";
import "../bestBooks.css";

let server = process.env.REACT_APP_API_URL;
class BestBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      emptyMessage: "",
      bookInfo: null,
      createModal: false,
      updateModal: false,
      user: null,
    };
  }

  async componentDidMount() {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: "get",
        baseURL: process.env.REACT_APP_SERVER,
        url: "/books",
      };

      const booksResponse = await axios(config);
      console.log(booksResponse);
      const { user } = withAuth0();
      this.setState({ books: booksResponse.data });
      this.setState({ user });
      console.log("USERAuth0:", this.props.auth0.user);
    }
  }
  handleUpdateModal = () => {
    this.setState({
      updateModal: !this.state.updateModal,
    });
  };
  openModalHandler = () => {
    console.log("getting in");
    this.setState({
      createModal: true,
    });
  };

  closeModalHandler = () => {
    this.setState({
      createModal: false,
    });
  };

  handleBookCreate = async (bookInfo) => {
    console.log(bookInfo);
    const bookResponse = await axios.post(
      `http://localhost:3009/books`,
      bookInfo
    );
    console.log(bookResponse);
    this.setState({
      createModal: false,
    });
    this.fetchBooks();
  };

  getBookInfo = (bookInfo) => {
    this.setState({
      bookInfo,
    });
    console.log(bookInfo);
  };

  handleBookUpdate = async (bookInfo) => {
    await axios.put(`${server}/books/${this.state.bookInfo._id}`, bookInfo);
    this.fetchBooks();
  };

  handleBookDelete = async (id, email) => {
    console.log(email);
    const deleteBookURL = `${server}/books/${id}/${email}`;
    console.log(deleteBookURL);
    if (email === this.props.auth0.user.email) {
      await axios.delete(deleteBookURL);
      this.fetchBooks();
    } else {
      alert("this book does not belong to you!");
    }
  };

  async fetchBooks() {
    try {
      const response = await axios.get(`${server}/books`);
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
        <BookCarousel
          books={this.state.books}
          deleteHandler={this.handleBookDelete}
          getBookInfo={this.getBookInfo}
          handleModal={this.handleUpdateModal}
        />
        <Button
          onClick={this.openModalHandler}
          // close={this.closeModalHandler}
          variant="secondary"
        >
          Create Book
        </Button>

        {this.state.emptyMessage && <h1>{this.state.emptyMessage}</h1>}
        <CreateForm
          createBook={this.handleBookCreate}
          show={this.state.createModal}
          close={this.closeModalHandler}
          user={this.props.user}
        />
        <UpdateForm
          updateBook={this.handleBookUpdate}
          bookInfo={this.state.bookInfo}
          updateModal={this.state.updateModal}
          handleModal={this.handleUpdateModal}
          user={this.props.user}
        />
      </Container>
    );
  }
}
export default withAuth0(BestBooks);
