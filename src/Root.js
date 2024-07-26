import React from 'react';
import { Outlet, Route,Routes } from 'react-router-dom';
import { Container, Row, Col, Form } from 'react-bootstrap';
import "./components/CSS/Home.css";
import TopNav from './components/TopNav.js';
import Flights from "./Flights.js";
import Hotel from './hotel.js';
import WorldMap from './WorldMap.js';

const Home = ()=> { 
          return (
            <div>
              <TopNav />
              <Container fluid className="home-container">
                <Row>
                  <Col xxl={2} className="home-header">
                    <h1 className="home-logo-text">Welcome To Milestone !</h1>
                    <p className="home-placeholder">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
              <Container>
                <Flights/>
              </Container>
              <Outlet/>
            </div>
          );
        }

export default Home