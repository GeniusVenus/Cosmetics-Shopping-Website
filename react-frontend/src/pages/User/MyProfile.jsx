import React from "react";
import Profile from "../../components/InfoBox/Profile";
import DeliveryAddress from "../../components/InfoBox/DeliveryAddress";
import "./style.scss";
const MyProfile = () => {
  return (
    <>
      <div className="my-profile-page">
        <Profile />
        <DeliveryAddress />
      </div>
    </>
  );
};

export default MyProfile;
