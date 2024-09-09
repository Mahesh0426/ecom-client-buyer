import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { autoLoginAction } from "../../redux/user/UserAction";
import { useDispatch } from "react-redux";

const PaymentSuccessPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLoginAction());
  }, [dispatch]);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center  ">
        <Col md={8} className="text-center">
          <h1 className="mb-4 mt-5">Payment Successful!</h1>
          <p>Your order has been successfully processed.</p>
          <p>Thank you for shopping with us!</p>
          <Link to="/">
            <Button variant="outline-primary">Continue Shopping</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
export default PaymentSuccessPage;
