import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import CheckoutForm from "../../components/payment/CheckoutForm";
import { useLocation } from "react-router-dom";
import { createPayment } from "../../axios/paymentAxios";

// Load Stripe
const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY);

const CheckoutPage = () => {
  const [clientSecret, setClientSecret] = useState("");
  const location = useLocation();

  // Extract the total amount from the route state |  default 0
  const totalAmount = location.state?.total || 0;

  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
  };

  // Create payment Intent as soon as we load this page
  useEffect(() => {
    createPayment(totalAmount)
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        console.log("Error creating payment intent:", error);
      });
  }, [totalAmount]);

  return (
    <Container>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <Stack className="justify-content-center align-items-center vh-100">
            <CheckoutForm totalAmount={totalAmount} />
          </Stack>
        </Elements>
      )}
    </Container>
  );
};

export default CheckoutPage;
