import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./InfiniteSlider.module.scss";
import sliderImage from "../../assets/logos/Layer48.png";
import leftArrow from "../../assets/logos/leftArrow.png";
import rightArrow from "../../assets/logos/rightArrow.png";
import LeftArrow from "./arrows/leftArrow/LeftArrow";
import RightArrow from "./arrows/rightArrow/RightArrow";
import SliderArrow from "./arrows/sliderArrow/SliderArrow";
import { Link } from "react-router-dom";
const InfiniteSlider = ({ articles }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <SliderArrow imgSrc={leftArrow} altText="Previous"></SliderArrow>
    ),
    nextArrow: (
      <SliderArrow imgSrc={rightArrow} altText="Previous"></SliderArrow>
    ),
  };
  if (articles.length == 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className={styles["slider-container"]}>
      <Slider {...settings}>
        {articles.map((article, index) => (
          <article className={styles["slider-item-container"]}>
            <img src={article.image} alt="forest" />
            <div className={styles["slider-txt-container"]}>
              <div className={styles["slider-par-container"]}>
                <p>August 26, 2024</p>
                <p>22 comments</p>
              </div>
              <div className={styles["slider-title-container"]}>
                <h1>{article.title}</h1>
                <Link to={`/single/${index}`}>
                  <button>Read article</button>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
};

export default InfiniteSlider;
