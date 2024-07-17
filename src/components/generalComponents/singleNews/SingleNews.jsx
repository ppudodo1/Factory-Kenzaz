import React from "react";
import styles from "./SingleNews.module.scss";
import { Link } from "react-router-dom";
import getCurDate from "../../../app/gettingDate";
const SingleNews = ({
  image,
  date,
  title,
  imageWidth,
  imageHeight,
  articleId,
}) => {
  console.log("Image Width: ", imageWidth);
  return (
    <Link
      to={`/single/${articleId}`}
      style={{ textDecoration: "none" }}
      className={styles["single-card-link"]}
    >
      <div
        className={styles["single-card"]}
        style={{
          width: `${imageWidth}px`,
        }}
      >
        <img
          src={image}
          alt="article-image"
          style={{
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
          }}
        />
        <p>{getCurDate()}</p>
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default SingleNews;
