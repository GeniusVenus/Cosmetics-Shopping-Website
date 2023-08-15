import React from "react";
import "./style.scss";
const DeliveryAddress = () => {
  return (
    <>
      <div className="delivery-address-card">
        <div className="title"> Delivery Addresses</div>
        <div className="description">
          The default address is set on top, and will be automatically applied
          the next time you order. More information is available here.
        </div>
        <div className="default-address-input">
          <label>Default Address</label>
          <input type="text" placeholder="" name="address" />
          <span>
            Click the dropdown to choose from the list of your saved addresses.{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default DeliveryAddress;
