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
const ProductPresent = () => {
  const images = [
    <img
      alt="first"
      src="https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80"
    />,
    <img
      alt="second"
      src="https://images.unsplash.com/photo-1585945037805-5fd82c2e60b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=546&q=80"
    />,
    <img
      alt="third"
      src="https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
    />,
    <img
      alt="fourth"
      src="
    https://images.unsplash.com/photo-1615354650206-e119239827d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=925&q=80"
    />,
    <img
      alt="fifth"
      src="
    https://images.unsplash.com/photo-1585832622886-272fb3a927e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    />,
  ];
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
