import React from "react";
import "./style.scss";
const Address = (props) => {
  const {
    id,
    province,
    district,
    town,
    detail,
    setChange,
    setValues,
    handleDeleteAddress,
  } = props;
  return (
    <div className="address-info">
      <div className="address">
        Address : {province ? province : ""}
        {district ? " , " + district : ""}
        {town ? " , " + town : ""}
        {detail ? " , " + detail : ""}
        <div className="check-default-address">Default</div>
      </div>
      <div className="address-management">
        <div className="address-change">
          <div
            className="update-address-btn"
            onClick={() => {
              setChange(2);
              setValues({
                id: id,
                province: province,
                district: district,
                town: town,
                detail: detail,
              });
            }}
          >
            Update
          </div>
          <div
            className="delete-address-btn"
            onClick={() => handleDeleteAddress(id)}
          >
            Delete
          </div>
        </div>
        <div className="set-default-btn"> Set default</div>
      </div>
    </div>
  );
};

export default Address;
