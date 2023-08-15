import React from "react";
import "./style.scss";
import HeaderImage from "../../assets/image/HeaderImage";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <div className="first-commitment">
            {commits.map((value, index) => {
              return (
                <div key={index} className="commit">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p> {value} </p>
                </div>
              );
            })}
          </div>
          <div className="content">
            <div className="header-side-content">
              <div className="second-commitment">
                Getting the best and latest products has never been easier.
              </div>
              <div className="third-commitment">
                {" "}
                <span>The Eleventh </span> is a platform that helps you get the
                right products for all your need to beauty.{" "}
              </div>
              <button className="shop-collection-btn"> Shop collections</button>
            </div>
            <div className="header-side-image">
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
            </div>
          </div>
        </div>
        {fillOne}
      </div>

      <div className="advert-section">
        <div className="advert">
          <p className="first">
            Over <span>10k+</span> customers are glowing up with The Eleventh.{" "}
          </p>
          <p>
            “Thanks to The Eleventh, I can get the product from brands that I
            love, whenever I want.”
          </p>
          <p>- Anna</p>
        </div>
      </div>
    </>
  );
};

export default Header;
