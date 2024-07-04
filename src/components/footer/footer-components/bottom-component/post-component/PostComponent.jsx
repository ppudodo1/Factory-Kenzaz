import React from "react";
import styles from "./PostComponent.module.scss";
import image from "../../../../../assets/logos/Layer63.png";

const PostComponent = ({ check }) => {
  return (
    <article>
      {check === "footer" && (
        <section className={styles["post-outer-container"]}>
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
        <aside className={styles["post-outer-container"]}>
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
        </aside>
      )}
    </article>
  );
};

export default PostComponent;
