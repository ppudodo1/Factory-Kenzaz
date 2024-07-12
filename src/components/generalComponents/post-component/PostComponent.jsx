import React from "react";
import styles from "./PostComponent.module.scss";
import image from "../../../assets/logos/Layer63.png";
import { Link } from "react-router-dom";
const PostComponent = ({ check, title, date, imageData, articleId }) => {
  return (
    <Link to={`/single/${articleId}`} style={{ textDecoration: "none" }}>
      <article>
        {check === "footer" && (
          <section className={styles["post-container"]}>
            <div className={styles["text-container"]}>
              <p className={styles["post-date"]}>August 26, 2024</p>
              <p className={styles["post-short"]}>
                Palestinians call off peace talks after clash
              </p>
            </div>
            <figure className={styles["image-container"]}>
              <img
                src={image}
                alt="post-image"
                className={styles["post-image"]}
              />
            </figure>
          </section>
        )}
        {check === "sidebar" && (
          <div className={`${styles["post-container"]} ${styles["hovering"]}`}>
            <div className={styles["text-container"]}>
              <p className={styles["post-date-sidebar"]}>
                {new Date(date).toDateString()}
              </p>
              <p className={styles["post-short-sidebar"]}>{title}</p>
            </div>
            <figure className={styles["image-container"]}>
              <img
                src={imageData}
                alt="post-image"
                className={styles["post-image"]}
              />
            </figure>
          </div>
        )}
      </article>
    </Link>
  );
};

export default PostComponent;
