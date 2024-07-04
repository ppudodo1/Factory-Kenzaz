import React from "react";
import styles from "./SingleNews.module.scss";
const SingleNews = ({ image, date, title, imageWidth, imageHeight }) => {
  return (
    <div
      className={styles["small-card"]}
      style={{
        width: `${imageWidth}px`,
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          width: `${imageWidth}px`,
          height: `${imageHeight}px`,
        }}
      />
      <p>{date}</p>
      <p>{title}</p>
    </div>
  );
};

export default SingleNews;
