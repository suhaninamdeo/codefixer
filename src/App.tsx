import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import FixCode from "./pages/FixCode";

const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar */}
      <Navbar
        expand="lg"
        style={{
          background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
        }}
        variant="light"
        className="shadow-sm"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ fontWeight: "bold", color: "#333" }}>
            CodeFixer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" style={{ color: "#333" }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ color: "#333" }}>About</Nav.Link>
              <Nav.Link as={Link} to="/fix" style={{ color: "#333" }}>Fix Code</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fix" element={<FixCode />} />
      </Routes>
    </Router>
  );
};

export default App;
