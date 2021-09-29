import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import '../bestBooks.css';
// import DeleteForm from "./DeleteForm.js";

//let server = process.env.REACT_APP_API_URL;
export default class BookCarousel extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     books: [],
  //     emptyMessage: "",
  //   }
  
  render() {
    return (
        <Carousel>
          {this.props.books.map((bookInfo) => (
            <Carousel.Item key={bookInfo._id}>
              <h1>{bookInfo.title}</h1>
              <h4>{bookInfo.description}</h4>
              <h4>{bookInfo.email}</h4>
              <h4>{bookInfo.status} </h4>
              <button onClick={this.props.bookHandler} className={'deleteButton'} type="submit" variant="danger">Delete</button>
            </Carousel.Item>
          ))}
        </Carousel>
    );
  }
}