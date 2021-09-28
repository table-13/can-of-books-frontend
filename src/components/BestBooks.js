import axios from "axios";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

export default class BestBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[],
      emptyMessage: '',

    };

  }

  componentDidMount() {
    this.fetchBooks();
  }

async fetchBooks() {
  let apiURL = 'http://localhost:3009/books';

  try {
    const response = await axios.get (apiURL);
    const books = response.data;
    console.log(books);
    if(books.length > 0) {
    this.setState({ books: response.data});
  } else {
    this.setState({ emptyMessage: 'There are no books in the library.' });
  }} catch (error) {
    console.log('we broke');
  }
}



  render() {
    return (
      <Container fluid>

      
        <p>BestBooks</p>

        <Carousel>
         
         {this.state.books.map((bookInfo, index) => 

         
         <Carousel.Item key={index}> 
          <h1>{bookInfo.title}</h1>
          
            
          <h4>{bookInfo.description}</h4>
          <h4>{bookInfo.email}</h4>
          <h4>{bookInfo.status} </h4>
          
        </Carousel.Item>
        )}
        </Carousel>

        {this.state.emptyMessage && <h1>{this.state.emptyMessage}</h1> }

      </Container>
    );
  }
}
