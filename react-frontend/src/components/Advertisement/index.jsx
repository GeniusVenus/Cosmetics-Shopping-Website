import React from "react";
import "./style.scss";
import AdvertisementImage from "../../assets/image/AdvertisementImage";
const Advertisement = () => {
  const { firstPicture, vectorOne, arrow } = AdvertisementImage;
  return (
    <div className="advertisement-section">
      <div className="advertisement-layout">
        <div className="first-section">
          <div className="section-image">{firstPicture}</div>
          <div className="for-fun"></div>
        </div>
        <div className="second-section">
          <div className="for-fun"></div>
          <div className="section-content">
            {vectorOne}
            <div className="content-layout">
              <div className="first-content"> Shop The Earth</div>
              <div className="second-content"> Our Eco-Friendly Products</div>
              <div className="third-content">
                We understand the importance of protecting our planet. That's
                why we strive to offer products that are not only effective but
                also environmentally friendly. From packaging to ingredients,
                we're committed to making choices that are good for the earth.
              </div>
              <div className="shop-collection-btn">
                <p>Shop collections</p> {arrow}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
