import React from "react";
import styles from "./SingleNews.module.scss";
import { Link } from "react-router-dom";
const SingleNews = ({
  image,
  date,
  title,
  imageWidth,
  imageHeight,
  articleId,
}) => {
  return (
    <Link to={`/single/${articleId}`} style={{ textDecoration: "none" }}>
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
    </Link>
  );
};

export default SingleNews;
