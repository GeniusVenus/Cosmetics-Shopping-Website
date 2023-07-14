import React from "react";
import "./style.scss";
import AdvertisementImage from "../../assets/image/AdvertisementImage";
import { motion } from "framer-motion";
const Advertisement = () => {
  const { firstPicture, vectorOne, arrow } = AdvertisementImage;
  return (
    <div className="advertisement-section">
      <div className="advertisement-layout">
        <motion.div
          className="first-section"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="section-image">{firstPicture}</div>
          <div className="for-fun"></div>
        </motion.div>
        <motion.div
          className="second-section"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Advertisement;
