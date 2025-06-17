// src/components/Navbar.tsx
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const AppNavbar: React.FC = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#e5d4ef", // soft lavender
        borderBottom: "1px solid #ddd",
      }}
    >
      <Container>
        <Navbar.Brand href="/" style={{ fontWeight: "bold", color: "#4b007d" }}>
          CodeFixer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" style={{ color: "#4b007d" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: "#4b007d" }}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
