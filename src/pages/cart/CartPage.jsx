import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Form,
  Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartItemsAction,
  updateCartItemAction,
  deleteCartItemAction,
} from "../../redux/cart/cartAction";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();

  const { carts } = useSelector((state) => state.cart || []);

  // Fetch cart items  when component mounts
  useEffect(() => {
    dispatch(getCartItemsAction());
  }, [dispatch]);

  // Handle quantity change
  const handleOnQuantityChange = (e, index) => {
    const updatedQuantity = e.target.value;
    // Dispatch to update the cart item with the updated quantity
    dispatch(
      updateCartItemAction({ ...carts[index], quantity: updatedQuantity })
    );
  };

  // Handle delete item
  const handleOnDelete = (cartId) => {
    dispatch(deleteCartItemAction(cartId));
  };

  // Calculate total price of all cart items
  const TotalPrice = () => {
    return carts.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate total number of items
  const TotalItems = () => {
    return carts.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Container fluid className="mt-5">
      <Row className="mb-2">
        <Col>
          <h2 className="mt-5">Shopping Cart</h2>
          <div>
            <Alert
              variant="success"
              className="d-flex justify-content-between align-items-center p-1 "
              style={{ width: "66%" }}
            >
              <span>Free shipping special for you</span>
              <span className="text-end">Exclusive Offer</span>
            </Alert>
          </div>
        </Col>
      </Row>
      <Row>
        {/* Left Side: Cart Items */}
        <Col md={8}>
          {carts.length > 0 ? (
            carts.map((item, index) => (
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
                    {/* Item Name, Price, Quantity */}
                    <div>
                      <strong>{item.product_name}</strong>
                    </div>
                    <div>Price: ${item.price}</div>
                    <div>
                      Qty:
                      <Form.Select
                        value={item.quantity}
                        onChange={(e) => handleOnQuantityChange(e, index)}
                        className="d-inline ms-2"
                        style={{ width: "66px" }}
                      >
                        {[...Array(10).keys()].map((qty) => (
                          <option key={qty + 1} value={qty + 1}>
                            {qty + 1}
                          </option>
                        ))}
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-end">
                  {/* Total Price for this item */}
                  <div className="mb-2">
                    <strong>Total</strong>: ${item.price * item.quantity}
                  </div>
                  {/* Delete Icon */}
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleOnDelete(item._id)}
                  >
                    <RiDeleteBin6Line />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <p>Your cart is empty.</p>
              <Link to="/">
                <Button variant="primary">Continue Shopping</Button>
              </Link>
            </div>
          )}
        </Col>

        {/* Right Side: Order Summary */}
        {carts.length > 0 && (
          <Col md={4}>
            <div className="border p-3">
              <h5>Order Summary</h5>
              <div className="d-flex justify-content-between">
                <div>Total Items</div>
                <div>{TotalItems()}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Shipping</div>
                <div>$0.00</div>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <div>Total Price</div>
                <div>${TotalPrice()}</div>
              </div>

              <Link to="/paymentPage" state={{ total: TotalPrice() }}>
                <Button variant="primary" className="w-100 mb-3">
                  Checkout( ${TotalPrice()})
                </Button>
              </Link>

              <Link to="/">
                <Button variant="secondary" className="w-100">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CartPage;
