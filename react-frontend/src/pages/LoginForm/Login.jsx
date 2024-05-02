import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useSigninMutation } from "../../features/auth/authApiSlice";
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
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username or email address",
      errorMessage: "",
      label: "Enter your username or email address",
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "",
      label: "Enter your Password",
      required: true,
    },
  ];
  const validation = (input) => {
    if (input.required && values[input.name] === "") return false;
    if (input.pattern) {
      const pattern = new RegExp(input.pattern);
      if (!pattern.test(values[input.name])) return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    for (var i in inputs)
      if (!validation(inputs[i])) {
        toast.error("Fill in the form correctly");
        return;
      }
    const user = values.username;
    try {
      const userData = await login(values).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      setValues({
        username: "",
        password: "",
      });
      toast.success("Sign in successfully");
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
