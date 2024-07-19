import React from "react";
import "./SliderArrow.scss";
const SliderArrow = ({ className, onClick, imgSrc, altText }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={imgSrc} alt={altText} className="arrow" />
    </div>
  );
};

export default SliderArrow;
