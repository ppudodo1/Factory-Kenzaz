import React from "react";
import styles from "./PostComponent.module.scss";
import image from "../../../../../assets/logos/Layer63.png";

const PostComponent = ({ check }) => {
  return (
    <a href="/single" style={{ textDecoration: "none" }}>
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
          <div className={styles["post-container"]}>
            <div className={styles["text-container"]}>
              <p className={styles["post-date-sidebar"]}>August 26, 2024</p>
              <p className={styles["post-short-sidebar"]}>
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
          </div>
        )}
      </article>
    </a>
  );
};

export default PostComponent;
