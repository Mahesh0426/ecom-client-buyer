import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { AiOutlineCheckCircle } from "react-icons/ai";

const SubscribeSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center m-5"
      style={{
        backgroundColor: "#e0f2fe",
        height: "400px",
      }}
    >
      <Row className="w-100 d-flex align-items-center justify-content-center text-center">
        <Col md={6}>
          <h1 className="fw-bold">Get Our Latest Offers News</h1>
          <p className="text-muted">Subscribe to our newsletter</p>
        </Col>
        <Col md={6}>
          <Form className="d-flex">
            <div className="w-100 max-width-600 position-relative">
              <Form.Control
                type="email"
                placeholder="Your email here"
                className="rounded-pill "
                style={{ minHeight: "50px" }}
              />
              <Button
                variant="primary"
                className="search-button"
                type="button"
                onClick={handleOnClick}
                style={{ minHeight: "50px" }}
              >
                Subscribe Now
              </Button>
            </div>
          </Form>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 d-flex justify-content-center align-items-center">
            <AiOutlineCheckCircle color="green" size={50} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for subscribing to us!</p> You will get the latest
          product updates via email.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SubscribeSection;
