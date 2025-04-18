import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const LoginPage = () => {
  return (
    <div className="min-vh-100 bg-light" style={{ overflow: "hidden" }}>
      <Container fluid className="p-0 m-0">
        <Row className="g-0 min-vh-100">
          {/* Left Section */}
          <Col
            xs={12}
            md={5}
            lg={5}
            className="d-flex flex-column justify-content-center px-5 py-4 bg-white"
          >
            <div style={{ maxWidth: "400px", width: "100%" }}>
              <h1 className="fw-bold mb-2">Welcome Back!</h1>
              <p className="mb-4 fs-5">Sign in to your account</p>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" required />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Log In
                </Button>

                <div className="text-end">
                  <a href="/forgot-password" className="text-decoration-none text-primary">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center mt-4 text-md-start">
                  Don’t have an account?{" "}
                  <a href="/signup" className="text-primary text-decoration-none">
                    Create one
                  </a>
                </div>
              </Form>
            </div>
          </Col>

          {/* Right Section */}
          <Col
            xs={12}
            md={7}
            lg={7}
            className="d-none d-md-block p-0"
            style={{ position: "relative", height: "100vh", overflow: "hidden", borderRadius: "10px 0 0 10px" }}
          >
            <img
              src="/images/library.jpg"
              alt="Illustration"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
