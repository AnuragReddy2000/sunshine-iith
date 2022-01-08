import { Link } from "gatsby";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <header>
      <Navbar expand="md">
        <Navbar.Brand href="/">Sunshine Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav as="ul" className="ms-auto">
            <Nav.Item as="li">
              <Link to="/" className="nav-link" activeClassName="active">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/teams" className="nav-link" activeClassName="active">
                Teams
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
