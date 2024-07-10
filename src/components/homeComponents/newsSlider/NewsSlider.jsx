import React, { useRef } from "react";
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
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
  };

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
              imageWidth={imageWidth}
              imageHeight={imageHeight}
              articleId={articleIndex + index}
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