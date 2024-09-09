import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../redux/category/categoryAction";
import { useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";

const FilterSection = (props) => {
  const { handleOnCategorySelect } = props;
  const { categories } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  // Fetch when categories change in the store.
  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  return (
    <>
      <h5>Filter by Category</h5>
      <Col gap={4}>
        <Row className="my-2">
          <Col>
            <Button
              onClick={() => handleOnCategorySelect(null)}
              variant="link"
              className="text-decoration-none p-0 text-dark"
            >
              All
            </Button>
          </Col>
        </Row>

        {categories.map((category) => (
          <Row key={category._id} className="my-2">
            <Col>
              <Button
                onClick={() => handleOnCategorySelect(category.slug)}
                variant="link"
                className="text-decoration-none p-0 text-dark"
              >
                {category.title}
              </Button>
            </Col>
          </Row>
        ))}
      </Col>
    </>
  );
};

export default FilterSection;
