import React from "react";
import styles from "./Comment.module.scss";
import avatar from "../../../../../assets/logos/avatar.png";

const Comment = ({ userName, date, comment }) => {
  return (
    <main className={styles["comment-container"]}>
      <div className={styles["avatar-image-container"]}>
        <img src={avatar} alt="" />
      </div>
      <div className={styles["content-container"]}>
        <div className={styles["info-container"]}>
          <div className={styles["text-info-container"]}>
            <h1>{userName}</h1>
            <p>{date}</p>
          </div>
          <button>Reply</button>
        </div>
        <div className={styles["comment-text-container"]}>
          <p>{comment}</p>
        </div>
      </div>
    </main>
  );
};

export default Comment;
