import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials, selectCurrentUserId } from "../../features/auth/authSlice";
import { useSigninMutation } from "../../features/auth/authApiSlice";
import { getActiveCartByUserId, updateOrCreateCart } from "../../api/apiFunctions";
import LoginGreeting from "../../components/LoginGreeting";
import FormCard from "../../components/FormCard";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useSigninMutation();
  const userId = useSelector(selectCurrentUserId);
  let inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username or email address",
      errorMessage: "",
      label: "Enter your username or email address",
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "",
      label: "Enter your Password",
    },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = values.username;
    try {
      const userData = await login(values).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      setValues({
        username: "",
        password: "",
      });
      toast.success("Sign in successfully");
      const cart = await getActiveCartByUserId(userData.id);
      console.log('Current cart Id:', )
      if (!cart) {
        const payload = {
          userId: userData.id,
          productIds: [],
          isActive: true,
        };

        updateOrCreateCart(payload)
          .then((data) => {
            console.log('create New cart successfully login', userData.id);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      if (!err?.data?.status) toast.error("No Server Response");
      else if (err?.data?.status === 400)
        toast.error("Missing Username or Password");
      else if (err?.data?.status === 401) toast.error("Unauthorized");
      else toast.error("Login Failed");
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value.trim() });
  };
  return (
    <>
      {" "}
      <div className="container">
        <div className="first-container">
          <LoginGreeting type="login" text="Welcome back!" />
        </div>
        <div className="second-container">
          <FormCard
            type="login"
            inputs={inputs}
            values={values}
            onChange={onChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
