import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getProductsAction } from "../../redux/product/productAction";
import ProductCard from "../../components/product/ProductCard";

const AllProductList = (props) => {
  const { search, selectedCategory, sortOption } = props;
  const { products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  // Filter products based on selected category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.parentCategory.toLowerCase() === selectedCategory.toLowerCase()
      : true;

    const matchesSearch = search
      ? product.name.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  // Sort products based on sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "Sort By price(lowest)") {
      return a.price - b.price;
    } else if (sortOption === "Sort By price(highest)") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <>
      <Container>
        <Row gap={4}>
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <Col key={product._id} className="my-2">
                <ProductCard product={product} />
              </Col>
            ))
          ) : (
            <h1>No products available</h1>
          )}
        </Row>
      </Container>
    </>
  );
};

export default AllProductList;
