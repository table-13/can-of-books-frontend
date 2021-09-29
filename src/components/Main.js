import { Component } from "react";
import BestBooks from "./BestBooks";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }
  render() {
    return (
      <>
        <BestBooks />
      </>
    );
  }
}
