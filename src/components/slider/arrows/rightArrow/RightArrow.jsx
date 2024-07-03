import React from "react";
import rightArrow from "../../../../assets/logos/rightArrow.png";
import "./RightArrow.scss";
const RightArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={rightArrow} alt="Previous" />
    </div>
  );
};

export default RightArrow;
