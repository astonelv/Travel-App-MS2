import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import TopNav from './Components/TopNav';

import "./Components/assets/CSS/Home.css"
const Home = ()=> { 
          return (
            <div>
              <TopNav />
              <Container fluid className="home-container">
                <Row>
                  <Col xxl={2} id="home-header">
                    <h1 id="home-logo-text">Welcome To Milestone !</h1>
                    <p id="home-placeholder">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </Col>
                </Row>
                <Form>
                  <Form.Group className="mb-3" controlId="floatingInputCustom">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group controlId="floatingPasswordCustom">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form>
              </Container>
            </div>
          );
        }

export default Home