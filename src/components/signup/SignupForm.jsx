import useForm from "../../hooks/useForm";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { signupFormFields } from "./SignInFormFields";
import CustomInput from "../CustomInput/CustomInput";
import { toast } from "react-toastify";
import { createUser } from "../../axios/userAxios";
import useLoading from "../../hooks/useLoading";
import { Link } from "react-router-dom";

const formValidation = (formData) => {
  const { password, confirmPassword } = formData;

  return password === confirmPassword;
};
const initialFormData = {
  firstName: "",
  lastName: "",
  phone: "",
  address: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignupForm = () => {
  const { formData, handleOnChange, setFormData } = useForm(initialFormData);
  const { firstName, lastName, email, address, phone, password } = formData;
  const { isLoading, startLoading, stopLoading } = useLoading();

  //handle on submit
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const isValidPassword = formValidation(formData);

    if (!isValidPassword) {
      return toast.error("Password and confirm password dose not match!!");
    }
    // start loading
    startLoading();
    // call api via axios to create user
    const result = await createUser({
      firstName,
      lastName,
      email,
      address,
      phone,
      password,
    });

    // stop loading
    stopLoading();

    if (result?.status === "error") {
      return toast.error(result.message || "Cannot create user!");
    }
    setFormData(initialFormData);
    toast.success(result.message || " Email verification link sent.");
  };

  return (
    <Container className="p-8  border shadow-lg rounded-4 m-3 ">
      <Form onSubmit={(e) => handleOnSubmit(e)}>
        <h2 className="text-center m-4">Create account </h2>

        <Row>
          {signupFormFields.map((field, index) => (
            <Col key={index} xs={index === 0 || index === 1 ? 6 : 12}>
              <CustomInput
                label={field.label}
                handleOnChange={handleOnChange}
                inputAttributes={{
                  type: field.type,
                  name: field.name,
                  value: formData[field.name],
                  placeholder: field.placeholder,
                  required: true,
                }}
              />
            </Col>
          ))}
        </Row>

        <Button
          variant="primary"
          className="btn-lg w-100"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <Spinner animation="border" role="status" /> : "Signup"}
        </Button>

        <p className="pt-2">
          Already have account?
          <Link to="/login">Login</Link>
        </p>
      </Form>
    </Container>
  );
};

export default SignupForm;
