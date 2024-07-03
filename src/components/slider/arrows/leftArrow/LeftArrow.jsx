import React from "react";
import leftArrow from "../../../../assets/logos/leftArrow.png";
import "./LeftArrow.scss";
const LeftArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={leftArrow} alt="Previous" />
    </div>
  );
};

export default LeftArrow;
