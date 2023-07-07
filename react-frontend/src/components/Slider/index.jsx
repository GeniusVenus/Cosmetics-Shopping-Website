import React from "react";
import "./style.scss";
import { useState } from "react";
const Slider = () => {
  const slides = [
    {
      url: "https://static.thcdn.com/images/xlarge/webp/widgets/257-en/39/original-HP_Hero_Banner_%28Desktop%29-104939.jpg",
      title: "test1",
    },
    {
      url: "https://static.thcdn.com/images/xlarge/webp/widgets/257-en/19/original-Glow_Recipie_Plum_Plump_Gloss_Balm_%28Desktop%29_-020319.jpg",
      title: "test2",
    },
    {
      url: "https://static.thcdn.com/images/xlarge/webp/widgets/257-en/50/original-GLOBAL_PRIMARY_BANNER_%28Desktop%29-014950.jpg",
      title: "test3",
    },
    {
      url: "https://static.thcdn.com/images/xlarge/webp/widgets/257-en/20/original-Hero_%28Desktop%29-103120.jpg",
      title: "test4",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const nextIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  };
  const goToNext = () => {
    const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };
  return (
    <>
      <div className="slide-show">
        <div className="arrow left" onClick={goToPrevious}>
          Left
        </div>
        <div className="slider">
          {slides.map((slide, index) => (
            <>
              <div
                className="slider-content"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                key={index}
              >
                <img src={slide.url} alt={slide.title} />
              </div>
            </>
          ))}
        </div>
        <div className="arrow right" onClick={goToNext}>
          Right{" "}
        </div>
      </div>
    </>
  );
};

export default Slider;
