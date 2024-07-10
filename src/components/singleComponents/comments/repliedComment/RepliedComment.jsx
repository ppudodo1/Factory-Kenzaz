import React from "react";
import styles from "./RepliedComment.module.scss";
import avatar from "../../../../assets/logos/avatar.png";

const RepliedComment = ({ autor, comment }) => {
  return (
    <div className={styles["replied-comment-container"]}>
      <div className={styles["replied-avatar-image-container"]}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={styles["replied-content-container"]}>
        <div className={styles["replied-info-container"]}>
          <div className={styles["text-info-container"]}>
            <h1>{autor}</h1>
          </div>
        </div>
        <div className={styles["comment-text-container"]}>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default RepliedComment;
