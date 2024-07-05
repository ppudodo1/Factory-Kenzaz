import React from "react";
import styles from "./SingleNews.module.scss";
const SingleNews = ({ image, date, title, imageWidth, imageHeight }) => {
  return (
    <a href="/single" style={{ textDecoration: "none" }}>
      <div
        className={styles["single-card"]}
        style={{
          width: `${imageWidth}px`,
        }}
      >
        <img
          src={image}
          alt="forest"
          style={{
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
          }}
        />
        <p>{date}</p>
        <p>{title}</p>
      </div>
    </a>
  );
};

export default SingleNews;
