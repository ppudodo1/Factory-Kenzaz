import React from "react";
import styles from "./PostComponent.module.scss";
import image from "../../../../../assets/logos/Layer63.png";
const PostComponent = ({ check }) => {
  return (
    <div>
      {check == "footer" && (
        <div className={styles["post-outer-container"]}>
          <div className={styles["text-container"]}>
            <p className={styles["post-date"]}>August 26,2024</p>
            <p className={styles["post-short"]}>
              Palestenians call of peace talks after clash
            </p>
          </div>
          <div className={styles["image-container"]}>
            <img src={image} alt="" className={styles["post-image"]} />
          </div>
        </div>
      )}
      {check == "sidebar" && (
        <div className={styles["post-outer-container"]}>
          <div className={styles["text-container"]}>
            <p className={styles["post-date-sidebar"]}>August 26,2024</p>
            <p className={styles["post-short-sidebar"]}>
              Palestenians call of peace talks after clash
            </p>
          </div>
          <div className={styles["image-container"]}>
            <img src={image} alt="" className={styles["post-image"]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostComponent;
