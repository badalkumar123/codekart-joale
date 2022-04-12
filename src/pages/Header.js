import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  AppsOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

export default function Header() {
  return (
    <header>
      <Navbar className="top" variant="light">
        <Container>
          <Navbar.Brand className="joala" href="#home">
            Joale
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="ele" href="#home">
              Home
            </Nav.Link>

            <Nav.Link className="ele" href="#page">
              Pages
            </Nav.Link>

            <Nav.Link className="ele" href="#portfolio">
              Portfolio
            </Nav.Link>

            <Nav.Link className="ele" href="#blog">
              Blog
            </Nav.Link>

            <Nav.Link className="ele" href="#shop">
              Shop
            </Nav.Link>

            <Nav.Link className="ele" href="#elements">
              Elements
            </Nav.Link>

            <Nav.Link className="cart" href="#cart">
              <ShoppingCartOutlined />
            </Nav.Link>
            <Nav.Link className="search" href="#search">
              <SearchOutlined />
            </Nav.Link>
            <Nav.Link className="apps" href="#apps">
              <AppsOutlined />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
