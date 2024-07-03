import React from "react";
import styles from "./Facebook.module.scss";
import image from "../../assets/logos/Layer34.png";
const Facebook = () => {
  return (
    <div className={styles["facebook-container"]}>
      <img src={image} alt="" />
    </div>
  );
};

export default Facebook;
