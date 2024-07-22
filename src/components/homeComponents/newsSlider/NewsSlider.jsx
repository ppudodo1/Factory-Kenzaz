import React, { useEffect, useRef, useState } from "react";
import styles from "./NewsSlider.module.scss";
import Slider from "react-slick";

import leftArrow from "../../../assets/logos/Shape1.png";
import rightArrow from "../../../assets/logos/Shape2.png";
import SingleNews from "../../generalComponents/singleNews/SingleNews";
import { Link } from "react-router-dom";

const NewsSlider = ({
  slidesToShow,
  title,
  passedWidth,
  borderColor,
  arrowLeft,
  arrowRight,
  imageWidth,
  imageHeight,
  articles,
  articleIndex,
}) => {
  const [currentSlidesToShow, setCurrentSlidesToShow] = useState(slidesToShow);
  const [smallWindow, setSmallWindow] = useState(false);
  const [currentImageWidth, setCurrentImageWidth] = useState(imageWidth);
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: currentSlidesToShow,
    slidesToScroll: currentSlidesToShow,
  };

  const updateSlidesToShow = () => {
    if (window.innerWidth <= 600) {
      setCurrentSlidesToShow(1);
      setSmallWindow(true);
    } else {
      setCurrentSlidesToShow(slidesToShow);
      setSmallWindow(false);
    }

    if (window.innerWidth <= 400) {
      setCurrentImageWidth(200);
    } else {
      setCurrentImageWidth(imageWidth);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, [slidesToShow, imageWidth]);

  return (
    <section
      className={styles["slider-container"]}
      style={{
        width: `${passedWidth}%`,
        borderLeft: `13px solid ${borderColor}`,
      }}
    >
      <div className={styles["slider-controls"]}>
        <h1>{title}</h1>
        <div>
          <button onClick={previous}>
            <img src={arrowLeft} alt="leftArrow" />
          </button>
          <button onClick={next}>
            <img src={arrowRight} alt="rightArrow" />
          </button>
        </div>
      </div>

      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {articles && articles.length > 0 ? (
          articles.map((data, index) => (
            <SingleNews
              image={data.image}
              date={new Date(data.publishedAt).toDateString()}
              title={data.title}
              imageWidth={smallWindow ? currentImageWidth : imageWidth}
              imageHeight={imageHeight}
              articleId={articleIndex + index}
              key={index}
            />
          ))
        ) : (
          <p>No articles available</p>
        )}
      </Slider>
    </section>
  );
};

export default NewsSlider;
