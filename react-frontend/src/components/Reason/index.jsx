import React from "react";
import "./style.scss";
import AdvertisementImage from "../../assets/image/AdvertisementImage";
import { motion } from "framer-motion";
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
        <motion.div
          className="question"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Why Order from the Eleventh?
        </motion.div>
        <div className="reason-content">
          <div className="for-fun-one"></div>
          <motion.div
            className="reason-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            {contents.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  id="content"
                  className={"content_" + index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1 + 0.75,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                >
                  <div id="icon" className={"icon_" + index}>
                    {" "}
                    {item.icon}{" "}
                  </div>
                  <div className="info">
                    <div className="label"> {item.label} </div>
                    <div className="value"> {item.value} </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          <div className="for-fun-two"></div>
        </div>
      </div>
    </>
  );
};

export default Reason;
