import React from "react";
import "./style.scss";
import HeaderImage from "../../assets/image/HeaderImage";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
const Header = () => {
  const {
    firstPicture,
    secondPicture,
    thirdPicture,
    fourthPicture,
    fifthPicture,
    vectorOne,
    vectorTwo,
    fillOne,
  } = HeaderImage;
  const commits = [
    "Easy payment",
    "24/7 Customer Support",
    "Return & Refund Policy",
  ];
  return (
    <>
      <div className="header">
        <div className="header-content">
          <motion.div
            className="first-commitment"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            {commits.map((value, index) => {
              return (
                <div key={index} className="commit">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p> {value} </p>
                </div>
              );
            })}
          </motion.div>
          <div className="content">
            <motion.div
              className="header-side-content"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.75, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <div className="second-commitment">
                Getting the best and latest products has never been easier.
              </div>
              <div className="third-commitment">
                {" "}
                <span>The Eleventh </span> is a platform that helps you get the
                right products for all your need to beauty.{" "}
              </div>
              <button className="shop-collection-btn"> Shop collections</button>
            </motion.div>
            <motion.div
              className="header-side-image"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.75, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <div className="first-side">
                {vectorOne}
                {firstPicture}
              </div>
              <div className="second-side">
                {vectorTwo}
                {secondPicture}
                <div className="list-img">
                  {thirdPicture}
                  {fourthPicture}
                  {fifthPicture}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {fillOne}
      </div>

      <div className="advert-section">
        <motion.div
          className="advert"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -40 }}
          transition={{ duration: 1, delay: 0.25, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <p className="first">
            Over <span>10k+</span> customers are glowing up with The Eleventh.{" "}
          </p>
          <p>
            “Thanks to The Eleventh, I can get the product from brands that I
            love, whenever I want.”
          </p>
          <p>- Anna</p>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
