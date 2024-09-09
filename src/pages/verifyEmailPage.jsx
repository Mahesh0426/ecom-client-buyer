import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { verifyUser } from "../axios/userAxios";
import { useEffect, useState } from "react";
import { Container, Spinner, Stack } from "react-bootstrap";
import { toast } from "react-toastify";

const VerifyEmailPage = () => {
  const [emailVerifying, setEmailVerifying] = useState(true);
  const [emailVerified, setEmailVerified] = useState(false);

  // grab the url params
  const [params] = useSearchParams();
  const userEmail = params.get("e");
  const token = params.get("id");

  const navigate = useNavigate();

  // function to verify email
  const verifyEmail = async () => {
    try {
      const result = await verifyUser({ userEmail, token });
      console.log(result);

      // Ensure the state updates are made after the API call
      setEmailVerifying(false);

      if (result?.status === "error") {
        setEmailVerified(false);
        toast.error(result.message);
        navigate("/signup");
      }

      //if success
      setEmailVerified(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userEmail && token) {
      verifyEmail();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEmail, token]);

  return (
    <Container>
      {emailVerifying && (
        <Stack
          gap={4}
          className="vh-100 justify-content-center align-items-center"
        >
          <Spinner animation="border" variant="primary" role="status" />
          <p>Verifying email, Please wait ....</p>
        </Stack>
      )}

      {emailVerified && (
        <Stack
          gap={2}
          className="vh-100 justify-content-center align-items-center"
        >
          <div className="my-4">
            <lord-icon
              src="https://cdn.lordicon.com/twsqddew.json"
              trigger="in"
              delay="100"
              state="in-reveal"
              style={{ width: "250px", height: "250px" }}
            ></lord-icon>
          </div>
          <p>Email successfully verified, You can login now.</p>
          <Link to="/login" className="btn btn-lg btn-outline-primary">
            Login Now
          </Link>
        </Stack>
      )}
    </Container>
  );
};

export default VerifyEmailPage;
