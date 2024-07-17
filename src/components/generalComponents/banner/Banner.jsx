import React from "react";
import styles from "./Banner.module.scss";
const Banner = ({ width, height, center, top, bottom }) => {
  return (
    <section
      className={styles["banner-container"]}
      style={{
        height: `${height}px`,
        width: `100%`,
        maxWidth: `${width}px`,
        margin: `0 ${center}`,
        marginTop: `${top}px`,
        marginBottom: `${bottom}px`,
      }}
    ></section>
  );
};

export default Banner;
