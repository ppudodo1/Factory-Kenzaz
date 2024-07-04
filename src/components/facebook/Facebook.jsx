import React from "react";
import styles from "./Facebook.module.scss";
import image from "../../assets/logos/Layer34.png";
const Facebook = () => {
  return (
    <section className={styles["facebook-container"]}>
      <img src={image} alt="forest" />
    </section>
  );
};

export default Facebook;
