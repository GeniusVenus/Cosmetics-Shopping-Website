import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.scss";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const ProductPresent = (props) => {
  const images = [<img alt="first" src={props.image} />];
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    afterChange: (index) => {
      setCurrentIndex(index);
    },
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="product-present">
      <div className="slide-show">
        <div className="prev-btn">
          <div
            className="container"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </div>
        <div className="slide-container">
          <Slider ref={sliderRef} {...settings}>
            {images.map((image, index) => (
              <div key={index} className="product-image">
                <div className="product-image-layout">{image}</div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="next-btn">
          <div
            className="container"
            onClick={() => sliderRef.current.slickNext()}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
      <div className="image-list">
        {images.map((image, index) => (
          <div
            className={index === currentIndex ? "image active" : "image"}
            key={index}
            onClick={() => sliderRef.current.slickGoTo(index)}
          >
            {image}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPresent;
