import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const ProductImage = (prop) => {
  const { images = [] } = prop;
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <>
      <Container>
        <Row>
          <Col xs={2} md={2}>
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                rounded
                fluid
                onClick={() => setSelectedImage(image)}
                style={{ cursor: "pointer", marginBottom: "10px" }}
              />
            ))}
          </Col>
          <Col xs={10} md={8}>
            <div
              style={{
                padding: "20px",
                textAlign: "center",
              }}
            >
              {selectedImage && <Image src={selectedImage} fluid />}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductImage;
