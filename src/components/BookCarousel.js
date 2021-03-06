import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import '../bestBooks.css';
import Button from 'react-bootstrap/Button'
// import DeleteForm from "./DeleteForm.js";

//let server = process.env.REACT_APP_API_URL;
export default class BookCarousel extends Component {
  handleUpdate = (bookInfo) => {
    this.props.getBookInfo(bookInfo);
    this.props.handleModal();
  }

  render() {
    return (
        <Carousel>
          {this.props.books.map((bookInfo) => (
            <Carousel.Item key={bookInfo._id}>
              <h1>{bookInfo.title}</h1>
              <h4>{bookInfo.description}</h4>
              <h4>{bookInfo.email}</h4>
              <h4>{bookInfo.status} </h4>
              <Button onClick={() => this.props.deleteHandler(bookInfo._id, bookInfo.email)} className={'deleteButton'} type="submit" variant="danger">Delete</Button>
              <Button onClick={() => this.handleUpdate(bookInfo)} className={'updateButton'} type="submit" variant="danger">Update</Button>
            </Carousel.Item>
          ))}
        </Carousel>
    );
  }
}