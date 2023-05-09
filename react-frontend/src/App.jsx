import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Layout from "./Layout";
import Login from "./views/LoginForm/Login";
import LoginLayout from "./views/LoginForm/Layout";
import Register from "./views/LoginForm/Register";
import ForgotPassword from "./views/LoginForm/ForgotPassword";
import ResetPassword from "./views/LoginForm/ResetPassword";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="login" element={<LoginLayout />}>
        <Route index element={<Login />} />
      </Route>

      <Route path="register" element={<LoginLayout />}>
        <Route index element={<Register />} />
      </Route>

      <Route path="forgot-password" element={<LoginLayout />}>
        <Route index element={<ForgotPassword />} />
      </Route>

      <Route path="reset-password" element={<LoginLayout />}>
        <Route index element={<ResetPassword />} />
      </Route>
    </Routes>
  );
};
export default App;
