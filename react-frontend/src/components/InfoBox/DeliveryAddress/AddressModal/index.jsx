import React, { useState } from "react";
import "./style.scss";

import SelectAddressLayer from "./SelectAddressLayer";
import AddAddressLayer from "./AddAddressLayer";

const AddressModal = (props) => {
  const {
    activeModal,
    setActiveModal,
    defaultAddress,
    addresses,
    changeAddressInfo,
    VNaddresses,
  } = props;
  const [layer, setLayer] = useState(0);
  const changeLayer = (value) => {
    setLayer(value);
  };
  // console.log(defaultAddress);
  return (
    <>
      <div className={activeModal ? "address-modal opened" : "address-modal"}>
        {layer === 0 ? (
          <SelectAddressLayer
            changeAddressInfo={changeAddressInfo}
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            defaultAddress={defaultAddress}
            addresses={addresses}
            changeLayer={changeLayer}
          />
        ) : (
          <AddAddressLayer
            VNaddresses={VNaddresses}
            addresses={addresses}
            changeAddressInfo={changeAddressInfo}
            changeLayer={changeLayer}
          />
        )}
      </div>
    </>
  );
};

export default AddressModal;
