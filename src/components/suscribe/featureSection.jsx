import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTruck, FaLock, FaUndo, FaHeadset } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <Container className="text-center m-5 ">
      <Row>
        <Col>
          <FaTruck size={50} className="mb-3" />
          <h5>Fast & Free Delivery</h5>
          <p>
            Enjoy lightning-fast delivery on all your orders with no extra
            charge.
          </p>
        </Col>
        <Col>
          <FaLock size={50} className="mb-3" />
          <h5>Secure Payment</h5>
          <p>
            Shop with peace of mind knowing that your transactions are protected
            by our advanced security measures.{" "}
          </p>
        </Col>
        <Col>
          <FaUndo size={50} className="mb-3" />
          <h5>Money Back Guarantee</h5>
          <p>
            We stand behind the quality of our products with a risk-free money
            back guarantee.
          </p>
        </Col>
        <Col>
          <FaHeadset size={50} className="mb-3" />
          <h5>Online Support</h5>
          <p>
            Get the help you need anytime with our dedicated online support.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturesSection;
