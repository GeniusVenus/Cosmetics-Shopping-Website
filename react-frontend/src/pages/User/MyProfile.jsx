import React from "react";
import Profile from "../../components/InfoBox/Profile";
import DeliveryAddress from "../../components/InfoBox/DeliveryAddress";
import ChangePassword from "../../components/InfoBox/ChangePassword";
import "./style.scss";
const MyProfile = () => {
  // const [values, setValues] = useState({
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   username: "",
  //   password: "",
  //   confirmPassword: "",
  //   address: "",
  // });

  // const onChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value.trim() });
  // };
  return (
    <>
      <div className="my-profile-page">
        <Profile />
        <ChangePassword />
        <DeliveryAddress />
      </div>
    </>
  );
};

export default MyProfile;
