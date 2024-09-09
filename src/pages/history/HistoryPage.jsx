import React, { useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrderHistoryAction } from "../../redux/history/historyAction";
import { format } from "date-fns";

const HistoryPage = () => {
  const dispatch = useDispatch();
  const { history } = useSelector((state) => state.history || []);

  useEffect(() => {
    dispatch(getOrderHistoryAction());
  }, [dispatch]);

  return (
    <Container fluid className="mt-5">
      <Row className="mb-2">
        <Col>
          <h2 className="mt-5 text-center">Purchase History</h2>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          {history.length > 0 ? (
            <div>
              {history.map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center justify-content-between mb-4 p-3 border"
                >
                  <div className="d-flex align-items-center">
                    {/* Product Image */}
                    <Image
                      src={item.thumbnail}
                      rounded
                      className="me-3"
                      style={{ width: "100px", height: "100px" }}
                    />
                    <div>
                      {/* Product Name, Price, Quantity */}
                      <div>
                        <strong>{item.product_name}</strong>
                      </div>
                      <div>Price: ${item.price}</div>
                      <div>Qty: {item.quantity}</div>
                      <div>
                        {format(new Date(history[0].date), "MMMM d, yyyy", "")}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-end">
                    {/* Total Price for this product */}
                    <div className="mb-2">
                      <strong>Total</strong>: ${item.price * item.quantity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center ">
              <p>You have not purchased anything yet.</p>
              <p>Your history is empty.</p>
              <Link to="/">
                <Button variant="primary">Continue Shopping</Button>
              </Link>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HistoryPage;
