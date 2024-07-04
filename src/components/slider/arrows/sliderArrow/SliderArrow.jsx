import React from "react";

const SliderArrow = ({ className, onClick, imgSrc, altText }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={imgSrc} alt={altText} />
    </div>
  );
};

export default SliderArrow;
