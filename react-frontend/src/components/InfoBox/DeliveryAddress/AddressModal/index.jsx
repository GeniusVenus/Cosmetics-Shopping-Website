import React, { useState } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DropdownWithSearch from "../../../DropdownWithSearch";
import { toast } from "react-toastify";
import Address from "./Address";
const AddressModal = (props) => {
  const {
    addresses,
    active,
    setActive,
    listAddresses,
    changeAddress,
    changeDefaultAddress,
  } = props;
  const [listAddress, setListAddress] = useState(listAddresses);
  const [change, setChange] = useState(0);
  const [values, setValues] = useState({
    id: "",
    province: "",
    district: "",
    town: "",
    detail: "",
  });

  const onChange = (name, value) => {
    if (name === "province")
      setValues({ ...values, [name]: value, district: "", town: "" });
    else if (name === "district")
      setValues({ ...values, [name]: value, town: "" });
    else setValues({ ...values, [name]: value });
  };
  const handleManageAddress = (addressId) => {
    if (!values.province) {
      toast.error("Need to choose province!");
      return;
    }
    if (!values.district) {
      toast.error("Need to choose district!");
      return;
    }
    if (!values.town) {
      toast.error("Need to choose town!");
      return;
    }
    if (!values.detail) {
      toast.error("Need to write down detail address!");
      return;
    }
    if (change === 1) {
      setValues({ ...values, id: addressId });
      setListAddress([...listAddress, { ...values }]);
    } else if (change === 2) {
      const newArray = [...listAddress];
      const index = newArray.findIndex((p) => p.id === addressId);
      newArray[index].province = values.province;
      newArray[index].district = values.district;
      newArray[index].town = values.town;
      newArray[index].detail = values.detail;
      setListAddress(newArray);
    }
    setChange(0);
    setValues({ ...values, province: "", district: "", town: "", detail: "" });
  };
  const handleDeleteAddress = (addressId) => {
    const newArray = listAddress.filter((p) => p.id !== addressId);
    setListAddress(newArray);
  };
  const handleSaveAddress = () => {
    // let addressList = [];
    // for (var i in listAddress) {
    //   var address =
    //     listAddress[i].province +
    //     " , " +
    //     listAddress[i].district +
    //     " , " +
    //     listAddress[i].town +
    //     " , " +
    //     listAddress[i].detail;
    //   addressList.push(address);
    // }
    changeAddress(listAddress);
  };
  return (
    <>
      <div className={active ? "address-modal opened" : "address-modal"}>
        {!change ? (
          <div className="address-container">
            <div className="address-header">
              <p> Your addresses </p>
              <button className="add-address-btn" onClick={() => setChange(1)}>
                {" "}
                Add new address
              </button>
            </div>
            <div className="list-addresses">
              {listAddress.map((address, index) => (
                <Address
                  {...address}
                  setChange={setChange}
                  setValues={setValues}
                  handleDeleteAddress={handleDeleteAddress}
                  changeDefaultAddress={changeDefaultAddress}
                  key={index}
                />
              ))}
            </div>
            <div className="address-footer">
              <button className="back-btn" onClick={() => setActive(!active)}>
                {" "}
                Back{" "}
              </button>
              <button
                className="save-btn"
                onClick={() => {
                  handleSaveAddress();
                  setActive(!active);
                }}
              >
                {" "}
                Save{" "}
              </button>
            </div>
          </div>
        ) : (
          <div className="add-address-container">
            <div className="add-address-header">
              <FontAwesomeIcon
                icon={faArrowLeft}
                onClick={() => setChange(0)}
              />
              <p>
                {" "}
                {change === 1 ? "Add new address" : "Update your address"}{" "}
              </p>
            </div>{" "}
            <div className="add-address-content">
              <div className="generated-address">
                Generated Address : {values.province ? values.province : ""}
                {values.district ? " , " + values.district : ""}
                {values.town ? " , " + values.town : ""}
                {values.detail ? " , " + values.detail : ""}
              </div>
              <div className="select-section">
                <div className="select-province">
                  <DropdownWithSearch
                    options={addresses}
                    tag="Select province"
                    name="province"
                    value={values.province}
                    onChange={onChange}
                  />
                </div>
                <div className="select-district">
                  <DropdownWithSearch
                    options={
                      values.province !== ""
                        ? addresses.find((p) => p.Name === values.province)
                            .Districts
                        : []
                    }
                    tag="Select district"
                    name="district"
                    onChange={onChange}
                    value={values.district}
                  />
                </div>
                <div className="select-town">
                  <DropdownWithSearch
                    options={
                      values.province !== "" && values.district !== ""
                        ? addresses
                            .find((p) => p.Name === values.province)
                            .Districts.find((p) => p.Name === values.district)
                            .Wards
                        : []
                    }
                    tag="Select town"
                    name="town"
                    value={values.town}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="detail-address">
                <input
                  type="text"
                  name="detail-address"
                  placeholder="Detail address"
                  onChange={(e) => onChange("detail", e.target.value)}
                  value={values.detail}
                />
              </div>
            </div>
            <div className="add-address-footer">
              <button
                className="finish-btn"
                onClick={() => {
                  if (change === 1) handleManageAddress(listAddress.length + 1);
                  else if (change === 2) handleManageAddress(values.id);
                }}
              >
                {" "}
                Finish{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddressModal;
