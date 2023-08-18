import React from "react";
import "./style.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const ProductPresent = (props) => {
  const images = [<img alt="first" src={props.image} />];
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="product-present">
      <div className="slide-show">
        <div className="slide-container">
          <div className="slide">
            <div className="prev-btn" onClick={goToPrevious}>
              <div className="container">
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
            </div>
            {images[currentIndex]}
            <div className="next-btn" onClick={goToNext}>
              <div className="container">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
          </div>
          <div className="image-list">
            {images.map((image, index) => (
              <div
                className={index === currentIndex ? "image active" : "image"}
                key={index}
                onClick={() => goToSlide(index)}
              >
                {image}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPresent;
