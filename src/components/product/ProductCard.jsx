// /* eslint-disable react/prop-types */
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";
// import { FaCartPlus } from "react-icons/fa6";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// const ProductCard = (props) => {
//   const { product } = props;
//   const { name, price, thumbnail, _id } = product;

//   return (
//     <>
//       <Card
//         className="hover-effect"
//         style={{ width: "16rem", borderRadius: "10px", border: "none" }}
//       >
//         <Link to={`/singleProduct/${_id}`}>
//           <Card.Img
//             variant="top"
//             src={thumbnail}
//             style={{ height: "14rem", objectFit: "cover" }}
//           />
//         </Link>
//         <Card.Body>
//           <Card.Title className="text-center">{name}</Card.Title>
//           <div className="d-flex justify-content-between align-items-center">
//             <Card.Text className=" mb-0 text-orange">AU${price}</Card.Text>
//             <Button variant="outline-primary" size="sm">
//               <FaCartPlus />
//             </Button>
//           </div>
//           <div>
//             <FaStar className="text-warning" />
//             <FaStar className="text-warning" />
//             <FaStar className="text-warning" />
//             <FaStar className="text-warning" />
//             <FaStarHalfAlt className="text-warning" />
//           </div>
//         </Card.Body>
//       </Card>
//     </>
//   );
// };

// export default ProductCard;

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaCartPlus } from "react-icons/fa6";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const { product } = props;
  const { name, price, thumbnail, slug } = product;

  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate(`/singleProduct/${slug}`);
  };

  return (
    <>
      <Card
        className="hover-effect"
        style={{ width: "16rem", borderRadius: "10px" }}
      >
        <Card.Img
          variant="top"
          src={thumbnail}
          style={{ height: "13rem", objectFit: "cover" }}
          onClick={handleImageClick}
        />

        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Text className="mb-0 text-orange">AU${price}</Card.Text>
            <Button
              onClick={handleImageClick}
              variant="outline-primary"
              size="sm"
            >
              <FaCartPlus />
            </Button>
          </div>
          <div>
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStarHalfAlt className="text-warning" />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
