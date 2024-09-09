import { Container, Row, Col, Button, Badge, Form } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductAction } from "../../redux/product/productAction";
import ProductImage from "../../components/product/ProductImages";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { createCartAction } from "../../redux/cart/cartAction";

const SingleProductPage = () => {
  // Get the slug from the URL
  const { slug } = useParams();

  // Get the user from Redux store
  const { user } = useSelector((state) => state.user);
  const isAuthenticated = user._id;

  // Get the product from Redux store
  const { product } = useSelector((state) => state.product);
  const { name, price, description, quantity, images, sku } = product;

  const dispatch = useDispatch();

  // Fetch product details when component loads
  useEffect(() => {
    if (slug) {
      dispatch(getProductAction(slug));
    }
  }, [slug, dispatch]);

  //  state to handle quantity change
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  //  function to create cart object
  const createCartObj = () => ({
    product_id: product?._id,
    user_id: user?._id,
    user_name: `${user?.firstName} ${user?.lastName}`,
    product_name: product?.name,
    quantity: selectedQuantity || 1,
    price: product?.price,
    thumbnail: product?.thumbnail,
  });

  const handleOnClick = () => {
    const cartObj = createCartObj();

    dispatch(createCartAction(cartObj));
  };

  return (
    <Container className="d-flex align-items-center mt-5 ">
      <Row className="mt-5">
        <Col md={7}>
          <ProductImage images={images} />
        </Col>

        <Col md={5} className="mt-4">
          <h3>{name}</h3>
          <div className="mb-3">
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStarHalfAlt className="text-warning" />
          </div>

          <h4 className="text-orange">AU${price}</h4>
          <p>{description}</p>
          <p>
            SKU:
            <Badge bg="info" className="ml-1">
              {sku}
            </Badge>
          </p>
          <Form.Group className="d-flex align-items-center">
            <Form.Label className="mb-0 me-2">Qty:</Form.Label>
            <Form.Select
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(e.target.value)}
              className="w-auto"
            >
              {[...Array(quantity).keys()].map((qty) => (
                <option key={qty + 1} value={qty + 1}>
                  {qty + 1}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          {!isAuthenticated && (
            <Link to="/login">
              <Button className="btn-primary btn m-2 px-5">Add to Cart</Button>
            </Link>
          )}
          {isAuthenticated && (
            <Button
              onClick={handleOnClick}
              className="btn-primary btn  m-2 px-5"
            >
              Add to Cart
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProductPage;
