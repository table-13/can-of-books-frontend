import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import Main from "./components/Main.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import "./App.css";

function App() {
  return (
    <Container fluid>
      <Header title="Can of Books" />
      <Main />
      <Footer text="Authors: Anthony, Brian, Harvey" />
    </Container>
  );
}

export default App;
