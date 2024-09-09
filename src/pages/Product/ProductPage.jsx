import { useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  Row,
  Stack,
  DropdownButton,
} from "react-bootstrap";
import FilterSection from "../../components/filter & sorts/FilterSection";
import AllProductList from "../../components/product/AllProductList";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState(" Sort By price(lowest)");

  // Function to handle category selection
  const handleOnCategorySelect = (categorySlug) => {
    setSelectedCategory(categorySlug);
  };

  // Function to handle sorting selection
  const handleOnSort = (sortType) => {
    setSortOption(sortType);
  };

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col xs={12} className="d-flex justify-content-end mb-4 mt-5 ">
          <DropdownButton
            variant="transparent border"
            className=" text-dark fw-bold "
            id="dropdown-basic-button"
            title={sortOption}
          >
            <Dropdown.Item
              onClick={() => handleOnSort("Sort By price(lowest)")}
            >
              Price (Lowest to Highest)
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleOnSort("Sort By price(highest)")}
            >
              Price (Highest to Lowest)
            </Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row className="position-relative">
        <Col
          xs={3}
          style={{
            position: "sticky",
            top: "20px",
            height: "calc(100vh - 40px)",
            overflowY: "auto",
          }}
        >
          <Stack>
            <FilterSection handleOnCategorySelect={handleOnCategorySelect} />
          </Stack>
        </Col>
        <Col xs={9} className="scroll">
          <AllProductList
            selectedCategory={selectedCategory}
            sortOption={sortOption}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
