import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import OtherLoginForms from "../../components/OtherLoginForms";
import LoginFormHeader from "../../components/LoginFormHeader";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  // const navigate = useNavigate();
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
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Sign in succesfully"); 
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <LoginFormHeader type="login" />
        <OtherLoginForms type="login" />
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="forgot-password">
          <Link to="/forgot-password"> Forgot Password ?</Link>
        </div>
        <button onClick={handleSubmit}> Sign in</button>
      </form>
    </>
  );
};

export default Login;
