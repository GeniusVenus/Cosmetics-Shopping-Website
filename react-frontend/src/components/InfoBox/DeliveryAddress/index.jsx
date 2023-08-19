import React, { useState } from "react";
import "./style.scss";
// import DropdownWithSearch from "../../DropdownWithSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import useAxios from "../../../hooks/useAxios";
import axios from "axios";
import AddressModal from "./AddressModal";
const DeliveryAddress = (props) => {
  const [addresses, loading, error] = useAxios({
    axiosInstance: axios,
    url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",
    method: "GET",
    responseType: "application/json",
  });
  const { values, changeAddress, changeDefaultAddress } = props;
  const [active, setActive] = useState(false);
  console.log("Delivery");
  console.log(values);
  const { province, district, town, details } =
    values.customerInfo.address[values.customerInfo.defaultAddress];
  console.log(province + "-" + district + "-" + town + "-" + details);
  return (
    <>
      <div className="delivery-address-card">
        <div className="title"> Delivery Addresses</div>
        <div className="description">
          The default address is set on top, and will be automatically applied
          the next time you order. More information is available here.
        </div>
        <div className="default-address-container">
          <label>Default Address</label>
          <div
            className="default-address-btn"
            onClick={() => setActive(!active)}
          >
            {" "}
            <p>
              {values.defaultAddress !== -1
                ? province + " , " + district + " , " + town + " , " + details
                : "Select your address here"}{" "}
            </p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <span>
            Click the dropdown to choose from the list of your saved addresses.
          </span>
        </div>
        {!loading && !error && (
          <AddressModal
            addresses={addresses}
            active={active}
            setActive={setActive}
            listAddresses={values.address}
            changeAddress={changeAddress}
            changeDefaultAddress={changeDefaultAddress}
          />
        )}
      </div>
    </>
  );
};

export default DeliveryAddress;
