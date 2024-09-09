import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import CategoryCard from "../../components/category/categoryCard";
import { useEffect } from "react";
import { getCategoriesAction } from "../../redux/category/categoryAction";

const CategoryPage = () => {
  // Get the categories from the store
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  return (
    <Container fluid className="mt-4">
      <Row gap={4}>
        {categories.map((category) => (
          <Col key={category._id} className="my-2">
            <CategoryCard category={category} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryPage;
