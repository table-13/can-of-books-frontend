import axios from "axios";
import { Component } from "react";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import CreateForm from "./CreateForm.js";
import BookCarousel from "./BookCarousel.js";
import UpdateForm from "./UpdateForm"
import '../bestBooks.css';
// import DeleteForm from "./DeleteForm.js";

//let server = process.env.REACT_APP_API_URL;
export default class BestBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      emptyMessage: "",
      bookInfo: null,
      createModal: false,
      updateModal: false
    };
  }
  handleUpdateModal = () => {
    this.setState({
      updateModal: !this.state.updateModal
    });
  }
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

  componentDidMount() {
    this.fetchBooks();
  };

  getBookInfo = (bookInfo) => {
    this.setState({
      bookInfo,
    });
    console.log(bookInfo);
  }

  handleBookUpdate = async (bookInfo) => {
    console.log(bookInfo);
    console.log(this.state.bookInfo);
    const bookResponse = await axios.put(
      `http://localhost:3009/books/${this.state.bookInfo._id}`,
      bookInfo
    );
    console.log(bookResponse);
    this.fetchBooks();
  };

  componentDidMount() {
    this.fetchBooks();
  };

  handleBookDelete = async (id, email) => {
    console.log('getting in');
    console.log(id);
    const deleteBookURL = `http://localhost:3009/books/${id}/${email}`;
    console.log(deleteBookURL);
    await axios.delete(
      deleteBookURL
    );
    this.fetchBooks();
  };

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
        
        <BookCarousel books={this.state.books} deleteHandler={this.handleBookDelete} getBookInfo={this.getBookInfo} handleModal={this.handleUpdateModal}/>
        <Button onClick={this.openModalHandler} close={this.closeModalHandler}variant="secondary">Create Book</Button>
       
        {this.state.emptyMessage && <h1>{this.state.emptyMessage}</h1>}
        <CreateForm
        createBook={this.handleBookCreate}
        show={this.state.createModal}
        close={this.closeModalHandler}
        />
        <UpdateForm
        updateBook={this.handleBookUpdate}
        bookInfo = {this.state.bookInfo}
        updateModal={this.state.updateModal}
        handleModal={this.handleUpdateModal}
        />
        
      </Container>
    );
  }
}
