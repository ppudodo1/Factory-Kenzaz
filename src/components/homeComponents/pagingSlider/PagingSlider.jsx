import React, { useState, useRef } from "react";
import styles from "./PagingSlider.module.scss";
import Slider from "react-slick";
import image1 from "../../../assets/logos/stock1.jpg";
import image2 from "../../../assets/logos/stock2.jpg";
import image3 from "../../../assets/logos/stock3.jpg";
import image4 from "../../../assets/logos/stock4.jpeg";
import image5 from "../../../assets/logos/stock5.jpg";
import image6 from "../../../assets/logos/stock6.jpg";
import image7 from "../../../assets/logos/stock7.jpg";
import image8 from "../../../assets/logos/stock8.jpg";
import search from "../../../assets/logos/search.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PagingSliderCustom.scss";
import leftArrow from "../../../assets/logos/leftArrow.png";
import rightArrow from "../../../assets/logos/rightArrow.png";
/*import LeftArrow from "../slider/arrows/leftArrow/LeftArrow";
import RightArrow from "../slider/arrows/rightArrow/RightArrow";*/
import SliderArrow from "../../generalComponents/slider/arrows/sliderArrow/SliderArrow";

const PagingSlider = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const largeImage = image8;
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(largeImage);
  const sliderRef = useRef(null);

  const settings = {
    customPaging: function (i) {
      const imageSrc = images[i];
      return (
        <div className={styles["image-holder"]}>
          <a>
            <img src={imageSrc} alt={`Thumbnail ${i}`} />
          </a>
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
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
    beforeChange: (oldIndex, newIndex) => {
      setSelectedImage(images[newIndex]);
    },
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowPopup(true);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSearchClick = () => {
    const currentSlideIndex = sliderRef.current.innerSlider.state.currentSlide;
    setSelectedImage(images[currentSlideIndex]);
    setShowPopup(true);
  };

  return (
    <div className={styles["paging-slider-container"]}>
      <img
        src={search}
        alt="Search Button"
        className={styles["search-button"]}
        onClick={handleSearchClick}
      />

      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles["slider-item"]}
            onClick={() => handleImageClick(image)}
          >
            <img src={image} alt="descriptive image" />
          </div>
        ))}
      </Slider>

      {showPopup && (
        <div className={styles["popup-container"]} onClick={togglePopup}>
          <div className={styles["popup"]}>
            <img src={selectedImage} alt="selectedImage" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PagingSlider;
