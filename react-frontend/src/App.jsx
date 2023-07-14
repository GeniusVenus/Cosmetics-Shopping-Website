import { Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Home from "./pages/Home/Home";
import HomeLayout from "./pages/Home/Layout";
import Login from "./pages/LoginForm/Login";
import LoginLayout from "./pages/LoginForm/Layout";
import Register from "./pages/LoginForm/Register";
import ForgotPassword from "./pages/LoginForm/ForgotPassword";
import ResetPassword from "./pages/LoginForm/ResetPassword";
import AllProducts from "./pages/Home/AllProducts";
import ProductDetail from "./pages/Home/ProductDetail";
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="products/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/" element={<LoginLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
    </Wrapper>
  );
};
export default App;
