import React from "react";
import AdvertisementImage from "../../assets/image/AdvertisementImage";
import "./style.scss";
const SignUpBox = () => {
  const { arrow } = AdvertisementImage;
  return (
    <div className="sign-up-box">
      <div className="sign-up-layout">
        <div className="some-word">
          Sign up now so your selected item are saved to your personal cart.
        </div>
        <div className="box-content">
          <input type="text" placeholder="Enter your email" />
          <div className="sign-up-btn">
            <p>Sign Up Now</p> {arrow}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpBox;
