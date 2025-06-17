// src/pages/About.tsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
          color: "#333",
          textAlign: "center",
          padding: "60px 0",
        }}
      >
        <Container>
          <h1 className="display-5 fw-bold">About CodeFixer</h1>
          <p className="lead">Helping developers fix code smarter, faster, and beautifully 💡</p>
        </Container>
      </div>

      {/* Info Section */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
              alt="AI assistant"
              style={{ width: '100%', maxWidth: '400px' }}
            />
          </Col>
          <Col md={6}>
            <h3>We’re here to make coding simpler</h3>
            <p>
              CodeFixer is your AI companion that helps you solve programming errors instantly.
              Whether you're a beginner or an expert, our tools speed up your workflow and reduce frustration.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Highlights Section */}
      <Container className="py-4">
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>👩‍💻 Who We Are</Card.Title>
                <Card.Text>A team of devs and AI enthusiasts passionate about simplifying code debugging.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>🛠️ What We Do</Card.Title>
                <Card.Text>We provide instant solutions, insights, and suggestions for your code issues.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>💖 Why Choose Us</Card.Title>
                <Card.Text>We blend simplicity, speed, and great UI — so coding stays joyful and frustration-free.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Closing Section */}
      <div
        style={{
          backgroundColor: "#ffe4f0",
          textAlign: "center",
          padding: "40px 0",
        }}
      >
        <Container>
          <blockquote className="blockquote">
            <p>“A good tool solves your problem. A great tool makes you love solving it.”</p>
            <footer className="blockquote-footer">The CodeFixer Team</footer>
          </blockquote>
        </Container>
      </div>
    </div>
  );
};

export default About;
