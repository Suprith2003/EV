import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Home.css';
import Button from 'react-bootstrap/Button';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home"></Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/vehicle-details">Vehicle Details</Nav.Link>
            <Nav.Link as={Link} to="/charging-station">Charging Station</Nav.Link>
            
            {/* Login button */}
            <Link to="/login"> {/* Adjust the route to your login page */}
              <Button variant="outline-success">Login</Button>
            </Link>

          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;
