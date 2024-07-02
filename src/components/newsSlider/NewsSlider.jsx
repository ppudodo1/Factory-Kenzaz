import React from 'react';
import styles from "./NewsSlider.module.scss";
import Slider from "react-slick";
import image from "../../assets/logos/Layer52.png"
import leftArrow from "../../assets/logos/Shape1.png"   
import rightArrow from "../../assets/logos/Shape2.png"   
import { useRef } from 'react';
const NewsSlider = () => {
    let sliderRef = useRef(null);
    const next = ()=>{
        sliderRef.slickNext();
    }
    const previous = ()=>{
        sliderRef.slickPrev();
    }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    
  };

  return (
    <div className={styles["slider-container"]}>
        <div className={styles["slider-controls"]}>
            <h1>News Carousel</h1>
            <div>
                <button onClick={previous}>
                    <img src={leftArrow} alt="" />
                </button>
                <button onClick={next}>
                    <img src={rightArrow} alt="" />
                </button>
            </div>
            
        </div>
        
        <Slider
        ref = {slider=>{
            sliderRef = slider;
        }}    
        {...settings}>
          <div className={styles["item-container"]}>
                <div className={styles["item"]}>
                <img src={image} alt="" />
                    <div className={styles["slider-txt-container"]}>
                        <p>August 26,2024</p>
                        <p>For Obama, MLK's shadow looms large ahead of speech</p>
                    </div>
                </div>
          </div>
          <div className={styles["item-container"]}>
            <div className={styles["item"]}>
                <img src={image} alt="" />
                    <div className={styles["slider-txt-container"]}>
                        <p>August 26,2024</p>
                        <p>NASA releases portrait of a planet waving at Saturn</p>
                    </div>
            </div>
          </div>
        </Slider>
      
    </div>
  );
}

export default NewsSlider;
