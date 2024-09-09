import { Badge, Col, Container, Image, Row, Stack } from "react-bootstrap";
import login from "../../assets/login image.avif";
import LoginForm from "../../components/Login/LoginForm";

const LoginPage = () => {
  return (
    <Container>
      <Row className="vh-100 mt-3">
        <Col className="d-flex">
          <Stack className="justify-content-center align-items-center">
            <Image src={login} height={500} width={500} roundedCircle />
            <Stack direction="horizontal" className="justify-content-center">
              <h3 className="mx-2">ECOMMERCE</h3>
              <Badge bg="info">User</Badge>
            </Stack>
            <pre>
              "Empower your shopping experience: where every click brings you
              closer to what you love."
            </pre>
          </Stack>
        </Col>

        <Col className="d-flex justify-content-center align-items-center">
          {/* loginform here  */}
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
