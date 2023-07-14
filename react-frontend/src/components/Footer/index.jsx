import React from "react";
import "./style.scss";
import NavBarImage from "../../assets/image/NavBarImage";
import FooterImage from "../../assets/image/FooterImage";
const Footer = () => {
  const { logo } = NavBarImage;
  const { instagramIcon, facebookIcon, youtubeIcon } = FooterImage;
  const links = [
    "Explore",
    "Privacy Policy",
    "Product",
    "Legal",
    "Sell your Product",
    "Terms of Service",
    "Pricing",
    "Help Center",
    "Reviews",
    "Social Media",
  ];
  return (
    <div className="footer">
      <div className="footer-layout">
        <div className="footer-copyright">
          <div className="footer-logo">
            {logo}
            <div className="brand"> The Eleventh</div>
          </div>
          <p>
            The Eleventh. Quality products for your beauty. Anywhere you go.
            Whenever you want.
          </p>
          <span>© 2023 The Eleventh. All rights reserved.</span>
        </div>
        <div className="footer-others">
          <div className="links">
            {links.map((link, index) => {
              return (
                <div className="link" key={index}>
                  {" "}
                  {link}{" "}
                </div>
              );
            })}
          </div>
          <div className="sci-list">
            <div className="blank"></div>
            <div className="list">
              <div className="sci"> {instagramIcon} </div>
              <div className="sci"> {facebookIcon} </div>
              <div className="sci">{youtubeIcon} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
