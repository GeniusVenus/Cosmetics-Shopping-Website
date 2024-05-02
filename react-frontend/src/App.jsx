import { Routes, Route } from "react-router-dom";
// Home Pages
import Home from "./pages/Home/Home";
import HomeLayout from "./pages/Home/Layout";
import AllProducts from "./pages/Home/AllProducts";
import ProductDetail from "./pages/Home/ProductDetail";
// Login pages
import Login from "./pages/LoginForm/Login";
import LoginLayout from "./pages/LoginForm/Layout";
import Register from "./pages/LoginForm/Register";
import ForgotPassword from "./pages/LoginForm/ForgotPassword";
import ResetPassword from "./pages/LoginForm/ResetPassword";
//Order pages
import OrderLayout from "./pages/Order/Layout";
import Cart from "./pages/Order/Cart";
import Checkout from "./pages/Order/Checkout";

// User pages
import UserLayout from "./pages/User/Layout";
import MyProfile from "./pages/User/MyProfile";
import Settings from "./pages/User/Settings";
// Customer pages
import MyFavorites from "./pages/User/Customer/MyFavorites";
import MyOrders from "./pages/User/Customer/MyOrders";
import SavedCoupons from "./pages/User/Customer/SavedCoupons";
// Admin pages
import Manage from "./pages/User/Admin/Manage";
import Orders from "./pages/User/Admin/Orders";
import Users from "./pages/User/Admin/Users";
import UserDetail from "./pages/User/Admin/UserDetail";
import OrderDetail from "./pages/User/Admin/OrderDetail";
// Error page
import NotFoundPage from "./pages/NotFoundPage";
// Utils
import Wrapper from "./utils/Wrapper";
import ProtectedRoute from "./utils/ProtectedRoute";

const USER = "ROLE_USER";
const ADMIN = "ROLE_ADMIN";

const HOME_ROUTES = [
  { path: "", element: <Home /> },
  { path: "products", element: <AllProducts /> },
  { path: "products/:id", element: <ProductDetail /> },
];
const LOGIN_ROUTES = [
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
];
const BASIC_ROUTES = [
  { path: "my-profile", element: <MyProfile /> },
  { path: "settings", element: <Settings /> },
];
const CUSTOMER_ROUTES = [
  {
    path: "my-orders",
    element: <MyOrders />,
  },
  {
    path: "my-coupons",
    element: <SavedCoupons />,
  },
  {
    path: "my-favorites",
    element: <MyFavorites />,
  },
];
const ADMIN_ROUTES = [
  {
    path: "manage",
    element: <Manage />,
  },
  {
    path: "orders",
    element: <Orders />,
  },
  {
    path: "users",
    element: <Users />,
  },
  {
    path: "users/:id",
    element: <UserDetail />,
  },
  {
    path: "orders/:id",
    element: <OrderDetail />,
  },
];
const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          {HOME_ROUTES.map((route, index) => {
            return (
              <Route
                key={`home_${index}`}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Route>
        <Route path="/" element={<LoginLayout />}>
          {LOGIN_ROUTES.map((route, index) => {
            if (route.path === "login")
              return (
                <Route path="/" element={<ProtectedRoute isLoggedIn={false} />}>
                  <Route
                    key={`login_${index}`}
                    path={route.path}
                    element={route.element}
                  />
                </Route>
              );
            return (
              <Route
                key={`login_${index}`}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Route>
        <Route path="/" element={<OrderLayout />}>
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        <Route element={<ProtectedRoute isLoggedIn={false} />}>
          <Route path="/" element={<UserLayout />}>
            {BASIC_ROUTES.map((route, index) => {
              return (
                <Route
                  key={`basic_${index}`}
                  path={route.path}
                  element={route.element}
                />
              );
            })}
            <Route
              element={<ProtectedRoute isLoggedIn={false} allowedRole={null} />}
            >
              {CUSTOMER_ROUTES.map((route, index) => {
                return (
                  <Route
                    key={`customer_${index}`}
                    path={route.path}
                    element={route.element}
                  />
                );
              })}
            </Route>
            <Route
              element={<ProtectedRoute isLoggedIn={false} allowedRole={null} />}
            >
              {ADMIN_ROUTES.map((route, index) => {
                return (
                  <Route
                    key={`admin_${index}`}
                    path={route.path}
                    element={route.element}
                  />
                );
              })}
            </Route>
          </Route>
        </Route>

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Wrapper>
  );
};
export default App;
