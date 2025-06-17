import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToFixPage = () => navigate("/fix");

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
          color: "#333",
          textAlign: "center",
          padding: "80px 0",
        }}
      >
        <Container>
          <h1 className="display-4 fw-bold">Welcome to CodeFixer</h1>
          <p className="lead">Fix your code instantly with AI-powered help 💡</p>
          <Button variant="dark" size="lg" onClick={goToFixPage}>Get Started</Button>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Why CodeFixer?</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>✨ Instant Fixes</Card.Title>
                <Card.Text>Fix bugs and errors in seconds using smart AI tools.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>🌐 Multi-language</Card.Title>
                <Card.Text>Supports JavaScript, Python, C++, and more languages.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>⚡ Lightning Fast</Card.Title>
                <Card.Text>Instant results so you can code without stopping.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* How It Works Section */}
      <div
        style={{
          backgroundColor: "#fdf1fa",
          padding: "60px 0",
        }}
      >
        <Container>
          <h2 className="text-center mb-5">How It Works</h2>
          <Row className="text-center">
            <Col md={4}>
              <h4>📝 Paste Your Code</h4>
              <p>Insert the code snippet where you're facing issues.</p>
            </Col>
            <Col md={4}>
              <h4>🤖 Let AI Analyze</h4>
              <p>Our smart AI scans your code to detect problems instantly.</p>
            </Col>
            <Col md={4}>
              <h4>✅ Get Suggestions</h4>
              <p>Receive quick, accurate fixes and explanations.</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Testimonials Section */}
      <div
        style={{
          backgroundColor: "#fce6f8",
          padding: "60px 0",
        }}
      >
        <Container>
          <h2 className="text-center mb-5">What Developers Are Saying</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm text-center p-3">
                <Card.Img
                  variant="top"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  style={{ width: "80px", height: "80px", borderRadius: "50%", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title>Ravi Mehta</Card.Title>
                  <Card.Text>"CodeFixer saved me hours of debugging. Love the AI suggestions!"</Card.Text>
                  <div style={{ color: "#ffc107" }}>⭐⭐⭐⭐⭐</div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm text-center p-3">
                <Card.Img
                  variant="top"
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  style={{ width: "80px", height: "80px", borderRadius: "50%", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title>Priya Sharma</Card.Title>
                  <Card.Text>"Perfect for quick code fixes during live interviews. Game-changer!"</Card.Text>
                  <div style={{ color: "#ffc107" }}>⭐⭐⭐⭐⭐</div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm text-center p-3">
                <Card.Img
                  variant="top"
                  src="https://randomuser.me/api/portraits/men/85.jpg"
                  style={{ width: "80px", height: "80px", borderRadius: "50%", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title>Aryan Gupta</Card.Title>
                  <Card.Text>"It's like having a coding buddy 24/7. Super fast and accurate."</Card.Text>
                  <div style={{ color: "#ffc107" }}>⭐⭐⭐⭐</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Call to Action */}
      <div
        style={{
          backgroundColor: "#ffe4f0",
          textAlign: "center",
          padding: "60px 0",
        }}
      >
        <Container>
          <h4 className="mb-3">Start fixing smarter today 💻</h4>
          <Button variant="secondary" size="lg" onClick={goToFixPage}>Try CodeFixer Now</Button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
