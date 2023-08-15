import React from "react";
import "./style.scss";
import AdvertisementImage from "../../assets/image/AdvertisementImage";
const Reason = () => {
  const { shoppingCart, tapeMeasure, shopDesign, deliveryCar } =
    AdvertisementImage;
  const contents = [
    {
      icon: shoppingCart,
      label: "Shop for latest products",
      value:
        "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.",
    },
    {
      icon: tapeMeasure,
      label: "Chat with customer support",
      value:
        "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.",
    },
    {
      icon: shopDesign,
      label: "Request for new featured brand",
      value:
        "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.",
    },
    {
      icon: deliveryCar,
      label: "Get your orders delivered to you",
      value:
        "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.",
    },
  ];
  return (
    <>
      <div className="reason">
        <div className="question">Why Order from the Eleventh?</div>
        <div className="reason-content">
          <div className="for-fun-one"></div>
          <div className="reason-container">
            {contents.map((item, index) => {
              return (
                <div key={index} id="content" className={"content_" + index}>
                  <div id="icon" className={"icon_" + index}>
                    {" "}
                    {item.icon}{" "}
                  </div>
                  <div className="info">
                    <div className="label"> {item.label} </div>
                    <div className="value"> {item.value} </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="for-fun-two"></div>
        </div>
      </div>
    </>
  );
};

export default Reason;
