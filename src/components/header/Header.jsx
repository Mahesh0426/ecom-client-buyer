import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Image,
  Dropdown,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUserAction } from "../../redux/user/UserAction";
import logo from "../../assets/logo.png";
import { BsCart4 } from "react-icons/bs";

const Header = (props) => {
  const { handleOnSearch, searchInput, setSearchInput } = props;

  const { carts } = useSelector((state) => state.cart);

  // Calculate total number of items
  const TotalItems = () => {
    return carts.reduce((total, item) => total + item.quantity, 0);
  };

  // get user detail from store
  const {
    user: { _id, firstName, lastName, role, email },
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  // handle logout
  const handleLogout = () => {
    dispatch(logoutUserAction(email));
  };

  return (
    <Navbar bg="light" expand="lg" className="fixed-top  custom-navbar mb-3  ">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="rounded bg-light p-2">
          <div>
            <Image
              src={logo}
              height={48}
              width={80}
              style={{ borderRadius: "4px" }}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/category">
              Category
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
          </Nav>
          <Form
            className="d-flex flex-grow-1 mx-lg-5 my-3 my-lg-0"
            onSubmit={handleOnSearch}
          >
            <div className="w-100 max-width-600 position-relative">
              <FormControl
                placeholder="Search products by name"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                style={{
                  borderRadius: "20px",
                  border: "1px solid #ccc",
                }}
              />
              <Button className="search-button" type="submit">
                <FaSearch />
              </Button>
            </div>
          </Form>

          <Nav className="ms-lg-auto ">
            <div className="d-flex justify-content-center align-items-center">
              {!_id && (
                <Link
                  to="/login"
                  className="btn btn-primary  text-white text-decoration-none mx-2 rounded-pill"
                >
                  Login
                </Link>
              )}

              {_id && (
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-autoclose-true"
                    className="bg-transparent border-0 my-1 d-flex align-items-center"
                  >
                    <div
                      className="rounded-circle fw-bold bg-warning text-white d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        fontSize: "18px",
                      }}
                    >
                      {firstName.charAt(0).toUpperCase()}
                      {lastName.charAt(0).toUpperCase()}
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    {role === "user" && (
                      <Dropdown.Item className="fw-bold">
                        <Link
                          to="/dashboard"
                          className="text-decoration-none text-dark"
                        >
                          My Dashboard
                        </Link>
                      </Dropdown.Item>
                    )}

                    {_id && (
                      <Dropdown.Item>
                        <Button
                          variant="outline-danger"
                          className="w-100"
                          onClick={handleLogout}
                        >
                          Logout
                        </Button>
                      </Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              )}

              <Link
                to="/cart"
                className=" text-decoration-none me-3 my-3 position-relative"
              >
                <BsCart4 size={24} />
                <span className="cart-badge">{TotalItems()}</span>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
