import React from "react";
import "./style.scss";
const Profile = () => {
  const inputs = [
    {
      name: "first_name",
      type: "text",
      placeholder: "",
      label: "First Name",
    },
    {
      name: "last_name",
      type: "text",
      placeholder: "",
      label: "Last Name",
    },
    { name: "email", type: "email", placeholder: "", label: "Email" },
    {
      name: "username",
      type: "text",
      placeholder: "",
      label: "Username",
    },
  ];
  return (
    <>
      <div className="profile-card">
        <div className="title"> Profile </div>
        <div className="profile-inputs">
          {inputs.map((input, index) => {
            const { name, type, placeholder, label } = input;
            return (
              <div className="info-input-container" key={index}>
                {" "}
                <label> {label} </label>
                <input type={type} placeholder={placeholder} name={name} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Profile;
