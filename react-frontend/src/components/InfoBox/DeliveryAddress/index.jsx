import React, { useState } from "react";
import "./style.scss";
import axios from "axios";
import useAxios from "../../../hooks/useAxios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import AddressModal from "./AddressModal";
const DeliveryAddress = (props) => {
  const { defaultAddress, addresses, changeAddressInfo } = props;
  const [activeModal, setActiveModal] = useState(false);
  const [VNaddresses, loading, error] = useAxios({
    axiosInstance: axios,
    url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",
    method: "GET",
    responseType: "application/json",
  });
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
            onClick={() => setActiveModal(!activeModal)}
          >
            {" "}
            <p>
              {/* {defaultAddress !== -1
                ? province + " , " + district + " , " + town + " , " + details
                : "Select your address here"}{" "} */}
              Select your address here
            </p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <span>
            Click the dropdown to choose from the list of your saved addresses.
          </span>
        </div>
        {activeModal && (
          <AddressModal
            VNaddresses={loading || error ? [] : VNaddresses}
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            addresses={addresses}
            defaultAddress={defaultAddress}
            changeAddressInfo={changeAddressInfo}
          />
        )}
      </div>
    </>
  );
};

export default DeliveryAddress;
