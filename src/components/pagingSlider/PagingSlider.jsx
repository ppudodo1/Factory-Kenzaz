import React from 'react'
import styles from "./PagingSlider.module.scss";
import Slider from "react-slick";
import image1 from "../../assets/logos/Layer 37.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PagingSlider = () => {
    const settings = {
        customPaging:function(i){
            return(
                <a>
                    <img src={image1} alt="" />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
  return (
    <div className={styles["paging-slider-container"]}>
      <Slider {...settings}>
        <div className={styles["slider-item"]}>
            <img src={image1} />
        </div>
        <div className={styles["slider-item"]}>
            <img src={image1} />
        </div>
        <div className={styles["slider-item"]}>
          <img src={image1} />
        </div>
        <div className={styles["slider-item"]}>
            <img src={image1} />
        </div>
      </Slider>
    
    </div>
  )
}

export default PagingSlider
