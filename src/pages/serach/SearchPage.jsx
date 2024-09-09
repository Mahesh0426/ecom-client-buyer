import React from "react";
import { useSelector } from "react-redux";
import AllProductList from "../../components/product/AllProductList";
import { Container } from "react-bootstrap";

const SearchPage = () => {
  const { search } = useSelector((state) => state.product);

  return (
    <Container style={{ marginTop: "6rem" }}>
      <h3 className=" mb-2">Search Results</h3>

      <AllProductList search={search} />
    </Container>
  );
};

export default SearchPage;
