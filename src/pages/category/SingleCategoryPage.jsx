import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../components/product/ProductCard";
import { useParams } from "react-router-dom";
import { getProductsAction } from "../../redux/product/productAction";

const SingleCategoryPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const { slug } = useParams();

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  // filter products based on Parentcategory
  const filteredProducts = products.filter((product) => {
    return product.parentCategory.toLowerCase() === slug.toLowerCase();
  });

  return (
    <Container fluid className="mt-5">
      <Row gap={4}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col key={product._id} className="my-2 mt-5">
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          <Col className="mt-5">
            <h1> Sorry!! Out of Stock</h1>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default SingleCategoryPage;
