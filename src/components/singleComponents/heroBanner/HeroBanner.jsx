import React from "react";
import styles from "./HeroBanner.module.scss";
import backgroundImage from "../../../assets/logos/Layer65.png";
const HeroBanner = ({ title, image }) => {
  if (!title) {
    return <div>Loading...</div>;
  }
  return (
    <section className={styles["hero-container"]}>
      <article className={styles["hero-item-container"]}>
        <img src={image} alt="heroImage" />
        <div className={styles["slider-txt-container"]}>
          <div className={styles["slider-par-container"]}>
            <p>August 26, 2024</p>
          </div>
          <div className={styles["slider-title-container"]}>
            <h1>{title}</h1>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HeroBanner;
