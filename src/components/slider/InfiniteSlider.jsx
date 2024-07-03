import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./InfiniteSlider.module.scss";
import sliderImage from "../../assets/logos/Layer48.png";
import LeftArrow from "./arrows/leftArrow/LeftArrow";
import RightArrow from "./arrows/rightArrow/RightArrow";
const InfiniteSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <LeftArrow></LeftArrow>,
    nextArrow: <RightArrow></RightArrow>,
  };
  return (
    <div className={styles["slider-container"]}>
      <Slider {...settings}>
        <div className={styles["slider-item-container"]}>
          <img src={sliderImage} alt="" />
          <div className={styles["slider-txt-container"]}>
            <div className={styles["slider-par-container"]}>
              <p>August 26, 2024</p>
              <p>22 comments</p>
            </div>
            <div className={styles["slider-title-container"]}>
              <h1>'Margot' breathlessly reimagines Anne Frank's sister</h1>
              <button>Read article</button>
            </div>
          </div>
        </div>
        <div className={styles["slider-item-container"]}>
          <img src={sliderImage} alt="" />
          <div className={styles["slider-txt-container"]}>
            <div className={styles["slider-par-container"]}>
              <p>August 26, 2024</p>
              <p>22 comments</p>
            </div>
            <div className={styles["slider-title-container"]}>
              <h1>'Margot' breathlessly reimagines Anne Frank's sister</h1>
              <button>Read article</button>
            </div>
          </div>
        </div>
        <div className={styles["slider-item-container"]}>
          <img src={sliderImage} alt="" />
          <div className={styles["slider-txt-container"]}>
            <div className={styles["slider-par-container"]}>
              <p>August 26, 2024</p>
              <p>22 comments</p>
            </div>
            <div className={styles["slider-title-container"]}>
              <h1>'Margot' breathlessly reimagines Anne Frank's sister</h1>
              <button>Read article</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default InfiniteSlider;
