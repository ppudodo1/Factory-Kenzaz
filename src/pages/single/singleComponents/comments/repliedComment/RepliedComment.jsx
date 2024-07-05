import React from "react";
import styles from "./RepliedComment.module.scss";
import avatar from "../../../../../assets/logos/avatar.png";

const RepliedComment = ({ autor, comment }) => {
  return (
    <main className={styles["comment-container"]}>
      <div className={styles["avatar-image-container"]}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={styles["content-container"]}>
        <div className={styles["info-container"]}>
          <div className={styles["text-info-container"]}>
            <h1>{autor}</h1>
          </div>
        </div>
        <div className={styles["comment-text-container"]}>
          <p>{comment}</p>
        </div>
      </div>
    </main>
  );
};

export default RepliedComment;
