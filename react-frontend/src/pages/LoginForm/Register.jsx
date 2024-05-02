import React, { useState } from "react";
import LoginGreeting from "../../components/LoginGreeting";
import "./style.scss";
import FormCard from "../../components/FormCard";
import { useSignupMutation } from "../../features/auth/authApiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [signup] = useSignupMutation();
  const navigate = useNavigate();
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Enter your username",
      pattern: `^[A-Za-z0-9]{3,16}$`,
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter email",
      errorMessage: "Invalid email",
      label: "Enter your email address",
      pattern:
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Enter your Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password doesn't match!",
      label: "Confirm your Password",
      pattern: values.password,
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
    try {
      await signup({
        username: values.username,
        email: values.email,
        password: values.password,
      }).unwrap();
      setValues({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      toast.success("Sign up successfully");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      if (!err?.data?.status) toast.error("No Server Response");
      else toast.error(err?.data?.message);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="container">
      <div className="first-container">
        <LoginGreeting type="register" text="Hi there!" />
      </div>
      <div className="second-container">
        <FormCard
          type="register"
          inputs={inputs}
          values={values}
          onChange={onChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Register;
