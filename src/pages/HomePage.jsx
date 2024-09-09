// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductCarousel from "../components/carousel/ProductCarousel";
import AllProductList from "../components/product/AllProductList";
import CategoryPage from "./category/CategoryPage";
import { VscArrowUp } from "react-icons/vsc";
import SubscribeSection from "../components/suscribe/suscribe";
import FeaturesSection from "../components/suscribe/featureSection";

const HomePage = () => {
  //scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        <ProductCarousel className="mt-0" />
      </div>
      <h1 className="d-flex justify-content-center m-5">Popular Categories</h1>
      <div className=" slide-animation text-dark text-decoration-none  ">
        <CategoryPage />
      </div>

      <h4 className="d-flex justify-content-center mt-5">All Products</h4>
      <div>
        <AllProductList />
      </div>
      <div>
        <SubscribeSection />
      </div>
      <div>
        <FeaturesSection />
      </div>
      <div className="go-to-top" onClick={scrollToTop}>
        <Link to="/">
          <VscArrowUp />
        </Link>
      </div>
    </>
  );
};
export default HomePage;
