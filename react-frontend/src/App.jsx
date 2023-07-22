import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import HomeLayout from "./pages/Home/Layout";
import Login from "./pages/LoginForm/Login";
import LoginLayout from "./pages/LoginForm/Layout";
import Register from "./pages/LoginForm/Register";
import ForgotPassword from "./pages/LoginForm/ForgotPassword";
import ResetPassword from "./pages/LoginForm/ResetPassword";

import CheckoutLayout from "./pages/Checkout/Layout";
import Checkout from "./pages/Checkout/Checkout";
import CheckoutSuccess from "./pages/Checkout/CheckoutSuccess";
import CartLayout from "./pages/Cart/Layout"
import Cart from "./pages/Cart/Cart";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/" element={<LoginLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
      <Route path="/checkout" element={<CheckoutLayout />}>
        <Route index element={<Checkout />} />
        <Route path="/checkout/success" element={<CheckoutSuccess/>} />
      </Route>
      <Route path="/cart" element={<CartLayout />}>
        <Route index element={<Cart />} />
      </Route>
      

    </Routes>
  );
};
export default App;
