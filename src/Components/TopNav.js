import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./assets/CSS/Nav.css"
 const TopNav = () => {
          return (
            <Container fluid>
              <Navbar fixed="top" expand="lg" bg='dark' data-bs-theme="dark">
                <Navbar.Brand as={Link} to='/'>Milestone</Navbar.Brand>
                <Nav fill as="ul" id="nav-item-link"className="justify-content-end">
                    {/* remember to add the link */}
                  <Nav.Item as={Link} to="#">Your Trips</Nav.Item>
                  <Nav.Item as={Link} to="#">Explore</Nav.Item>
                </Nav>
              </Navbar>
            </Container>
          );
        }
 export default TopNav