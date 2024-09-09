import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#222732", color: "white" }}>
      {/* Footer Panels */}
      <Container className="py-4">
        <Row>
          <Col>
            <h5>Get to Know Us</h5>
            <ListGroup variant="flush">
              <ListGroup.Item
                as={Link}
                to="#"
                action
                className="bg-transparent border-0 text-white"
              >
                Career
              </ListGroup.Item>
              <ListGroup.Item
                as={Link}
                to="#"
                action
                className="bg-transparent border-0 text-white"
              >
                Blog
              </ListGroup.Item>
              <ListGroup.Item
                as={Link}
                to="#"
                action
                className="bg-transparent border-0 text-white"
              >
                About Us
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <h5>Customer Service</h5>
            <ListGroup variant="flush">
              <ListGroup.Item
                as={Link}
                to="#"
                action
                className="bg-transparent border-0 text-white"
              >
                Return and refund policy{" "}
              </ListGroup.Item>
              <ListGroup.Item
                as={Link}
                to="#"
                action
                className="bg-transparent border-0 text-white"
              >
                policy
              </ListGroup.Item>
              <ListGroup.Item
                as={Link}
                to="#"
                action
                className="bg-transparent border-0 text-white"
              >
                Shipping info
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <h5>Help</h5>
            <ListGroup variant="flush">
              <ListGroup.Item
                as={Link}
                to="#"
                action
                className="bg-transparent border-0 text-white"
              >
                Support center & FAQ
              </ListGroup.Item>
              <ListGroup.Item
                as={Link}
                to="#"
                action
                className="bg-transparent border-0 text-white"
              >
                Safety center
              </ListGroup.Item>
              <ListGroup.Item
                as={Link}
                to="#"
                action
                className="bg-transparent border-0 text-white"
              >
                Partner with Us
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <h5>Let Us Help You</h5>
            <ListGroup variant="flush">
              <ListGroup.Item
                as={Link}
                to="#"
                action
                className="bg-transparent border-0 text-white"
              >
                Your Account
              </ListGroup.Item>
              <ListGroup.Item
                as={Link}
                to="#"
                action
                className="bg-transparent border-0 text-white"
              >
                Your Orders
              </ListGroup.Item>
              <ListGroup.Item
                as={Link}
                to="#"
                action
                className="bg-transparent border-0 text-white"
              >
                Shipping Rates & Policies
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>

      {/* Footer Bottom */}
      <div className="text-center py-3" style={{ backgroundColor: "#0f1111" }}>
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col xs="auto">
              <div>
                <Link to="#" className="text-white mx-2">
                  Conditions of Use
                </Link>
                <Link to="#" className="text-white mx-2">
                  Privacy Notice
                </Link>
                <Link to="#" className="text-white mx-2">
                  Your Ads Privacy Choices
                </Link>
              </div>
              <div className="mt-2">© made by me ♥️♥️</div>
            </Col>
            <Col
              xs="auto"
              className="d-flex justify-content-end align-items-center"
            >
              <a href="https://facebook.com" className="text-white mx-2">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" className="text-white mx-2">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-white mx-2">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-white mx-2">
                <FaLinkedinIn size={24} />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
