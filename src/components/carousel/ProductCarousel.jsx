import Carousel from "react-bootstrap/Carousel";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";

const ProductCarousel = () => {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={700}
          src={product3}
          alt="Image"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          height={700}
          src={product2}
          alt="Image"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          height={700}
          src={product1}
          alt="Image"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          height={700}
          src={product4}
          alt="Image"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
