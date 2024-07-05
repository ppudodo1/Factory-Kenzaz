import React, { useRef } from "react";
import styles from "./NewsSlider.module.scss";
import Slider from "react-slick";
import image from "../../assets/logos/Layer52.png";
import leftArrow from "../../assets/logos/Shape1.png";
import rightArrow from "../../assets/logos/Shape2.png";
import SingleNews from "../singleNews/SingleNews";
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
      <header className={styles["slider-controls"]}>
        <h1>{title}</h1>
        <div>
          <button onClick={previous}>
            <img src={arrowLeft} alt="leftArrow" />
          </button>
          <button onClick={next}>
            <img src={arrowRight} alt="rightArrow" />
          </button>
        </div>
      </header>

      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <article className={styles["item-container"]}>
          <SingleNews
            image={image}
            date={"August 26, 2024"}
            title={"For Obama, MLK's shadow looms large ahead of speech"}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
          ></SingleNews>
        </article>
        <article className={styles["item-container"]}>
          <SingleNews
            image={image}
            date={"August 26, 2024"}
            title={"For Obama, MLK's shadow looms large ahead of speech"}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
          ></SingleNews>
        </article>
      </Slider>
    </section>
  );
};

export default NewsSlider;
