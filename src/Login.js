import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faHandshake, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission and response (for example purposes)
    if (username !== 'test@example.com' || password !== 'password123') {
      setErrorMessage('Invalid email or password');
      setSuccessMessage('');
    } else {
      setSuccessMessage('You have been successfully logged in');
      setErrorMessage('');
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="login-container">
      {/* Logo Section */}
      <div className="logo-section text-center mb-4">
        <FontAwesomeIcon icon={faHandshake} size="3x" />
        <div className="welcome-text mt-2">
          <h1>Welcome Back!</h1>
          <p>Please login to access your CRM dashboard</p>
        </div>
      </div>

      {/* Alerts */}
      {errorMessage && (
        <Alert variant="danger">
          <FontAwesomeIcon icon={faExclamationCircle} className="me-2" />
          {errorMessage}
        </Alert>
      )}
      {successMessage && (
        <Alert variant="success">
          <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
          {successMessage}
        </Alert>
      )}

      {/* Login Form */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Form.Label>Email address</Form.Label>
        </Form.Group>

        <Form.Group className="mb-4 position-relative">
          <Form.Control
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Form.Label>Password</Form.Label>
          <span
            className="input-group-text position-absolute"
            style={{ top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
          </span>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mb-3">
          Sign In <FontAwesomeIcon icon="arrow-right" className="ms-2" />
        </Button>

        <div className="links-section text-center">
          <div>
            <span>New to our platform?</span>
            <a href="/register" className="ms-2">Create an account</a>
          </div>
          <a href="/forgot-password" className="mt-2">Forgot your password?</a>
        </div>
      </Form>
    </div>
  );
}

export default Login;
