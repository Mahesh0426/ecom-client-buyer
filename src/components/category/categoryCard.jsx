import { Col, Container, Image, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  const { category } = props;

  const { slug, title, thumbnail } = category;
  return (
    <Container>
      <Row className="d-flex flex-column align-items-center justify-content-center">
        <Col xs={6} md={4} className="mt-5 p-0">
          <Link to={`/singleCategory/${slug}`}>
            <Image
              src={thumbnail}
              roundedCircle
              style={{ width: "150px", height: "150px" }}
            />
          </Link>

          <p className="m-3">{title}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryCard;
