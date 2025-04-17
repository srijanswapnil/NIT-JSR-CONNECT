import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const SignupPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!form.email.endsWith('@nitjsr.ac.in')) {
      setError('Only @nitjsr.ac.in email is allowed');
      return;
    }

    // TODO: Connect to backend
    console.log('Signing up with:', form);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light py-5">
      <Container fluid>
        <Row className="min-vh-100">
          {/* Left Side: Features */}
          <Col
            xs={12}
            md={6}
            className="position-relative custom-bg px-4 py-5  text-white text-center text-md-start"
          >
            <div className=" p-4 ">
              <h2 className="mb-3">🚀 Save on development time</h2>
              <p>Add authentication and user management to your app with just a few lines of code.</p>
              <h4 className="mt-4">✨ Increase engagement</h4>
              <p>Intuitive UIs designed to reduce user friction.</p>
              <h4 className="mt-4">🛡️ Protect your users</h4>
              <p>Two-step verification & automatic security updates.</p>
              <h4 className="mt-4">🎨 Match your brand</h4>
              <p>Theme our components or use our easy APIs.</p>
            </div>
          </Col>
          {/* Right Side: Sign Up Form */}
          <Col xs={12} md={6} className="d-flex align-items-center justify-content-center bg-light text-dark py-5 px-4">
            <div className="w-100 border border-secondary rounded-4 p-4 shadow-sm bg-white" style={{ maxWidth: '400px' }}>
              <h3 className="mb-4 text-center">Create a New Account</h3>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Use your @nitjsr.ac.in email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <Form.Text className="text-muted">
                    Only NITJSR email addresses are allowed.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Sign Up
                </Button>
              </Form>

              <div className="mt-3 text-center">
                Already have an account?{' '}
                <a href="/login" className="text-primary">Log In</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignupPage;
