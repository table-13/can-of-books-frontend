import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Header.css";
import LogoutButton from './LogoutButton'

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Can of Books</Navbar.Brand>

        <NavItem>
          <Link to="/" className="nav-link">
            Home
          </Link>
          {this.props.user &&
          <Link to="/Profile" className="nav-link">
            Profile
          </Link>
          }
        </NavItem>
        {this.props.user &&
          <LogoutButton onLogout={this.props.onLogout}/>
        }
      </Navbar>
    );
  }
}

export default Header;
