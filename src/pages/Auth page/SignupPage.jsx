import { Container, Row, Col, Image, Stack, Badge } from "react-bootstrap";
import login from "../../assets/login image.avif";
import SignupForm from "../../components/signup/SignupForm";

const SignupPage = () => {
  return (
    <Container>
      <Row className="vh-100 mt-5">
        <Col className="d-flex">
          <Stack className="justify-content-center align-items-center">
            <Image src={login} height={500} width={500} roundedCircle />
            <Stack direction="horizontal" className="justify-content-center">
              <h3 className="mx-2">ECOMMMERCE</h3>
              <Badge bg="info">Users</Badge>
            </Stack>
            <pre>
              "Empower your shopping experience: where every click brings you
              closer to what you love."
            </pre>
          </Stack>
        </Col>

        <Col className="d-flex justify-content-center align-items-center">
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
