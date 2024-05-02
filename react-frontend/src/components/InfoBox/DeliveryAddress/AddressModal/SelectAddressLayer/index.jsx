import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const Address = (props) => {
  const {
    province,
    district,
    town,
    detail,
    isDefaultAddress,
    handleDeleteAddress,
    handleSelectAddress,
  } = props;
  return (
    <div className="address-info">
      <input
        type="radio"
        onChange={() =>
          handleSelectAddress({ province, district, town, detail })
        }
        checked={isDefaultAddress}
      />
      <div className="address">
        {province ? province : ""}
        {district ? " , " + district : ""}
        {town ? " , " + town : ""}
        {detail ? " , " + detail : ""}
      </div>
      {!isDefaultAddress && (
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() =>
            handleDeleteAddress({ province, district, town, detail })
          }
        />
      )}
    </div>
  );
};
const SelectAddressLayer = (props) => {
  const {
    changeAddressInfo,
    defaultAddress,
    activeModal,
    setActiveModal,
    addresses,
    changeLayer,
  } = props;
  const handleDeleteAddress = ({ province, district, town, detail }) => {
    const defaultAddressInfo = addresses[defaultAddress];
    const newAddresses = addresses.filter(
      (p) =>
        p.province !== province ||
        p.district !== district ||
        p.town !== town ||
        p.detail !== detail
    );
    const newDefaultAddress = newAddresses.findIndex(
      (p) =>
        p.province === defaultAddressInfo.province &&
        p.district === defaultAddressInfo.district &&
        p.town === defaultAddressInfo.town &&
        p.detail === defaultAddressInfo.detail
    );
    console.log(newDefaultAddress);
    console.log();
    changeAddressInfo(newAddresses, newDefaultAddress);
  };
  const handleSelectAddress = ({ province, district, town, detail }) => {
    changeAddressInfo(
      null,
      addresses.findIndex(
        (p) =>
          p.province === province &&
          p.district === district &&
          p.town === town &&
          p.detail === detail
      )
    );
  };
  return (
    <div className="address-container">
      <div className="address-header">
        <p> Your addresses </p>
        <button className="add-address-btn" onClick={() => changeLayer(1)}>
          {" "}
          Add new address
        </button>
      </div>
      <div className="list-addresses">
        {addresses.map((address, index) => (
          <Address
            {...address}
            isDefaultAddress={defaultAddress === index}
            handleDeleteAddress={handleDeleteAddress}
            handleSelectAddress={handleSelectAddress}
            key={`address_${index}`}
          />
        ))}
      </div>
      <div className="address-footer">
        <button
          className="back-btn"
          onClick={() => setActiveModal(!activeModal)}
        >
          {" "}
          Back{" "}
        </button>
      </div>
    </div>
  );
};

export default SelectAddressLayer;
