import { ToastContainer, Bounce } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/Auth page/SignupPage";
import VerifyEmailPage from "./pages/verifyEmailPage";
import LoginPage from "./pages/Auth page/LoginPage";
import UserLayout from "./components/userLayout/UserLayout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/cart/CartPage";
import SingleProductPage from "./pages/Product/SingleProductPage";
import CategoryPage from "./pages/category/CategoryPage";
import SingleCategoryPage from "./pages/category/SingleCategoryPage";
import ProductPage from "./pages/Product/ProductPage";
import UserPrivateRoute from "./components/userPrivate/UserPrivateRoute";
import CheckoutPage from "./pages/payment/CheckoutPage";
import PaymentSuccessPage from "./pages/payment/paymentSuccessPage";
import ForgetPasswordPage from "./pages/forget Password/ForgetPasswordPage";
import SearchPage from "./pages/serach/SearchPage";
import DashBoard from "./pages/profile/Dashboard";
import ChangePasswordPage from "./pages/forget Password/ChangePassword";

import HistoryPage from "./pages/history/HistoryPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/change-Password" element={<ChangePasswordPage />} />

        <Route path="/" element={<UserLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* public Route */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="singleCategory/:slug" element={<SingleCategoryPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="singleProduct/:slug" element={<SingleProductPage />} />
          {/* Private Route */}
          <Route
            path="cart"
            element={
              <UserPrivateRoute>
                <CartPage />
              </UserPrivateRoute>
            }
          />

          <Route
            path="/paymentPage"
            element={
              <UserPrivateRoute>
                <CheckoutPage />
              </UserPrivateRoute>
            }
          />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
