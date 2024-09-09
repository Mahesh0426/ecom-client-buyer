// import {
//   PaymentElement,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";
// import { useState } from "react";
// import {
//   Button,
//   Card,
//   Col,
//   Container,
//   Form,
//   Row,
//   Spinner,
// } from "react-bootstrap";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";

// const CheckoutForm = (props) => {
//   const { totalAmount } = props;
//   const [isLoading, setIsLoading] = useState(false);
//   const { user } = useSelector((state) => state.user);
//   const { address } = user;

//   // STRIPE HOOKS
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();

//     // check if the stripe config is valid
//     if (!stripe || !elements) {
//       return toast.error("Not ready for payment processing, please wait!");
//     }

//     setIsLoading(true);
//     // now make payment request
//     const result = await stripe.confirmPayment({
//       elements,
//       confirmParams: {
//         return_url: `${import.meta.env.VITE_URL}/payment-success`,
//       },
//     });

//     setIsLoading(false);

//     if (result?.error) {
//       // Show error to your customer (for example, payment details incomplete)
//       return toast.error(
//         result?.error?.message ||
//           "Could not process your payment, please try again."
//       );
//     }

//     // If the payment is sucessfull, we can take to payment successfull page
//     toast.success(
//       "Thank you for your payment! Your order has been successfully processed."
//     );
//   };

//   return (
//     <Container fluid>
//       <Row className="justify-content-center">
//         <Col md={6} lg={4}>
//           <h4>Payment Process</h4>
//           <Form onSubmit={(e) => handleOnSubmit(e)}>
//             <Card className="  mb-5 p-4 shadow-lg rounded">
//               {/* Test Cards
//             https://docs.stripe.com/testing?testing-method=card-numbers */}
//               <PaymentElement />
//               {/* Show billing address */}
//               <div className="mt-4">
//                 <strong>*Billing address</strong>
//                 <div>{address}</div>
//               </div>

//               <Button
//                 type="submit"
//                 variant="outline-primary"
//                 className="mt-4"
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <Spinner animation="border" role="status" />
//                 ) : (
//                   `Pay Now ($${totalAmount})`
//                 )}
//               </Button>
//             </Card>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default CheckoutForm;
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { format } from "date-fns";

// import { clearCartAction } from "../../redux/cart/cartSlice";

import { createOrderHistoryAction } from "../../redux/history/historyAction";
import { removeCartItem } from "../../redux/cart/cartSlice";

const CheckoutForm = (props) => {
  const { totalAmount } = props;
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);

  // Get user details from Redux store
  const { user } = useSelector((state) => state.user);
  const { address } = user;

  // Get carts  details from Redux store
  const { carts } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  //handle on submit
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // Check if Stripe and elements are properly initialized
    if (!stripe || !elements) {
      return toast.error("Not ready for payment processing, please wait!");
    }

    setIsLoading(true);

    try {
      // Confirm the payment
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${import.meta.env.VITE_URL}/payment-success`,
        },
        redirect: "if_required",
      });

      // Check if there was an error during payment
      if (result?.error) {
        setIsLoading(false);
        return toast.error(
          result?.error?.message ||
            "Could not process your payment, please try again."
        );
      }

      // Create an order object for each item in the cart
      const orderObj = carts.map((cart) => ({
        cart_id: cart?._id,
        product_name: cart?.product_name,
        price: cart?.price,
        quantity: cart?.quantity,
        thumbnail: cart?.thumbnail,
      }));

      // Get the current date using date-fns
      const currentDate = format(new Date(), "MMMM d, yyyy", "");
      console.log(currentDate);

      // For each item in the cart, dispatch the action to create  order history
      orderObj.forEach((item) => {
        const orderHistory = {
          user_id: user._id,
          user_name: `${user.firstName} ${user.lastName}`,
          totalAmount: totalAmount,
          date: currentDate,
          ...item,
        };
        dispatch(createOrderHistoryAction(orderHistory));
      });

      // Clear the cart after successful order
      console.log("Clearing cart...");
      dispatch(removeCartItem());

      toast.success(
        "Thank you for your payment! Your order has been successfully processed."
      );

      // Redirect to success page
      window.location.href = `${import.meta.env.VITE_URL}/payment-success`;
    } catch (error) {
      console.error("Error during checkout:", error);
      toast.error("Failed to process order history. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <h4>Payment Process</h4>
          <Form onSubmit={(e) => handleOnSubmit(e)}>
            <Card className="  mb-5 p-4 shadow-lg rounded">
              {/* Test Cards
            https://docs.stripe.com/testing?testing-method=card-numbers */}
              <PaymentElement />
              {/* Show billing address */}
              <div className="mt-4">
                <strong>*Billing address</strong>
                <div>{address}</div>
              </div>

              <Button
                type="submit"
                variant="outline-primary"
                className="mt-4"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Spinner animation="border" role="status" />
                ) : (
                  `Pay Now ($${totalAmount})`
                )}
              </Button>
            </Card>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutForm;
