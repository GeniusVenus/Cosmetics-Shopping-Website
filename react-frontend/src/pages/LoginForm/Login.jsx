import { useState } from "react";
import useNavigate from "react-router-dom";
import FormInput from "../../components/FormInput";
import OtherLoginForms from "../../components/OtherLoginForms";
import LoginFormHeader from "../../components/LoginFormHeader";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import LoginGreeting from "../../components/LoginGreeting";
import FormCard from "../../components/FormCard";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
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
      navigate("/home");
    } catch (err) {
      if (!err.originalStatus) toast.error("No Server Response");
      else if (err.originalStatus === 400)
        toast.error("Missing Username or Password");
      else if (err.originalStatus === 401) toast.error("Unauthorized");
      else toast.error("Login Failed");
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      {" "}
      <div className="container">
        <div className="first-container">
          <LoginGreeting type="login" text="Welcome back!" />
        </div>
        <div className="second-container">
          <FormCard />
        </div>
      </div>
    </>
  );
};

export default Login;
