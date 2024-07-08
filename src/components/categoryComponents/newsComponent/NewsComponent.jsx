import React from "react";
import styles from "./NewsComponent.module.scss";
import image from "../../../assets/logos/Layer59.png";
import { Link } from "react-router-dom";
const NewsComponent = ({ article, articleId }) => {
  if (!article) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles["news-container"]}>
      <h1>{article.title}</h1>
      <div className={styles["info-container"]}>
        <p>{new Date(article.publishedAt).toDateString()}</p>
        <p>Author: Matej Sudar</p>
        <p>12 comments</p>
      </div>
      <div className={styles["article-container"]}>
        <div className={styles["article-image-container"]}>
          <img src={article.image} alt="forest" />
        </div>
        <div className={styles["article-text-container"]}>
          <p>{article.content}</p>
          <Link to={`/single/${articleId}`}>
            <button>Read article</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
