import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaHistory,
  FaClipboardList,
  FaEdit,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateUserAction } from "../../redux/user/UserAction";
import useForm from "../../hooks/useForm";
import CustomInput from "../../components/CustomInput/CustomInput";

const DashBoard = () => {
  //state to handle modal
  const [show, setShow] = useState(false);

  //handle modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //get the user from store
  const { user } = useSelector((state) => state.user);

  const initialFormData = {
    _id: user?._id,
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    phone: user?.phone,
    address: user?.address,
  };

  // custom hook to handle formdata changes
  const { handleOnChange, formData } = useForm(initialFormData);

  const dispatch = useDispatch();

  // handle  on submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch updated user info to Redux
    dispatch(updateUserAction(formData));
    handleClose();
  };

  return (
    <Container className="mt-5 mb-5 ">
      <h1 className="mb-4  pt-5 text-center">My Profile</h1>
      <Row className="mt-5">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">
                <FaUser size={50} className="text-primary" />
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <FaUser className="me-2" />

                  {user.firstName}
                  <span className="me-2"></span>
                  {user.lastName}
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaEnvelope className="me-2" /> {user.email}
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaPhone className="me-2" /> {user.phone}
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaMapMarkerAlt className="me-2" /> {user.address}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>
                    <FaShoppingCart className="me-2" /> My Orders
                  </Card.Title>
                  <Card.Text>View and manage your order .</Card.Text>
                  <Link to="/cart">
                    <Button variant="primary">View Orders</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>
                    <FaHistory className="me-2" /> Order History
                  </Card.Title>
                  <Card.Text>
                    Check your ordered and purchased history.
                  </Card.Text>
                  <Link to="/history">
                    <Button variant="primary">View History</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <FaClipboardList className="me-2" /> Account Settings
                  </Card.Title>
                  <Card.Text>
                    Manage your account preferences and settings.
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    className="ms-2"
                    onClick={handleShow}
                  >
                    <FaEdit className="me-2" /> Edit Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Edit Details Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <CustomInput
              label="First Name"
              handleOnChange={handleOnChange}
              inputAttributes={{
                type: "text",
                name: "firstName",
                value: formData.firstName,
              }}
            />

            <CustomInput
              label="LastName"
              handleOnChange={handleOnChange}
              inputAttributes={{
                type: "text",
                name: "lastName",
                value: formData.lastName,
              }}
            />
            <CustomInput
              label="Email"
              handleOnChange={handleOnChange}
              inputAttributes={{
                type: "email",
                name: "email",
                value: formData.email,
              }}
            />
            <CustomInput
              label="Phone"
              handleOnChange={handleOnChange}
              inputAttributes={{
                type: "tel",
                name: "phone",
                value: formData.phone,
              }}
            />
            <CustomInput
              label="Full Address"
              handleOnChange={handleOnChange}
              inputAttributes={{
                type: "textarea",
                name: "address",
                value: formData.address,
              }}
            />

            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default DashBoard;
