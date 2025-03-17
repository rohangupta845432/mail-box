import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
function SignUp() {
  return (
    <Container fluid>
      <div className="login-div">
        <Form>
          <h2>SignUp</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p>
            If you have account please <Link to="/login">Login</Link>
          </p>
        </Form>
      </div>
    </Container>
  );
}

export default SignUp;
