import React, { useState, useMemo } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DropdownWithSearch from "../DropdownWithSearch";
import "./style.scss";
const AddAddressLayer = (props) => {
  const { addresses, changeLayer, changeAddressInfo, VNaddresses } = props;
  const [values, setValues] = useState({
    province: "",
    district: "",
    town: "",
    detail: "",
  });
  const list_province = VNaddresses;
  const list_district = useMemo(
    () =>
      values.province !== ""
        ? list_province.filter((p) => p.Name === values.province)[0].Districts
        : [],
    [list_province, values.province]
  );
  const list_town = useMemo(
    () =>
      values.district !== ""
        ? list_district.filter((d) => d.Name === values.district)[0].Wards
        : [],
    [list_district, values.district]
  );
  const select_options = [
    {
      options: list_province,
      tag: "Select province",
      name: "province",
      value: values.province,
    },
    {
      options: list_district,
      tag: "Select district",
      name: "district",
      value: values.district,
    },
    {
      options: list_town,
      tag: "Select town",
      name: "town",
      value: values.town,
    },
  ];
  const handleAddAddress = () => {
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
    if (addresses.find((p) => p === values)) {
      toast.warning("Address already existed");
      return;
    }
    let newAddresses = [...addresses, values];
    console.log(newAddresses.length);
    if (newAddresses.length === 1) changeAddressInfo(newAddresses, 0);
    else changeAddressInfo(newAddresses, null);
    toast.success("Add new address successfully");
    changeLayer(0);
  };
  const onChange = (name, value) => {
    if (name === "province")
      setValues({
        ...values,
        [name]: value,
        district: "",
        town: "",
        detail: "",
      });
    if (name === "district")
      setValues({ ...values, [name]: value, town: "", detail: "" });
    if (name === "town") setValues({ ...values, [name]: value, detail: "" });
    if (name === "detail") setValues({ ...values, [name]: value });
  };
  return (
    <div className="add-address-container">
      <div className="add-address-header">
        <FontAwesomeIcon icon={faArrowLeft} onClick={() => changeLayer(0)} />
        <p> Add new address </p>
      </div>{" "}
      <div className="add-address-content">
        <div className="generated-address">
          Generated Address : {values.province ? values.province : ""}
          {values.district ? " , " + values.district : ""}
          {values.town ? " , " + values.town : ""}
          {values.detail ? " , " + values.detail : ""}
        </div>
        <div className="select-section">
          {select_options.map((o, index) => {
            return (
              <div key={"select_" + index} className="select-option">
                {" "}
                <DropdownWithSearch
                  options={o.options}
                  tag={o.tag}
                  name={o.name}
                  value={o.value}
                  onChange={onChange}
                />
              </div>
            );
          })}
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
        <button className="finish-btn" onClick={handleAddAddress}>
          {" "}
          Finish{" "}
        </button>
      </div>
    </div>
  );
};

export default AddAddressLayer;
