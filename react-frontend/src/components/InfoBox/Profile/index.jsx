import React from "react";
import "./style.scss";

const Profile = (props) => {
  const { values, onChange } = props;
  const inputs = [
    {
      name: "firstname",
      type: "text",
      placeholder: "",
      label: "First Name",
      value: values.firstname,
    },
    {
      name: "lastname",
      type: "text",
      placeholder: "",
      label: "Last Name",
      value: values.lastname,
    },
    {
      name: "email",
      type: "email",
      placeholder: "",
      label: "Email",
      value: values.email,
    },
    {
      name: "username",
      type: "text",
      placeholder: "",
      label: "Username",
      value: values.username,
    },
  ];
  return (
    <>
      <div className="profile-card">
        <div className="title"> Profile </div>
        <div className="profile-inputs">
          {inputs.map((input, index) => {
            const { name, type, placeholder, label, value } = input;
            return (
              <div className="info-input-container" key={index}>
                {" "}
                <label> {label} </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  value={value}
                  onChange={onChange}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Profile;
