import React from "react";
import styles from "./Comment.module.scss";
import avatar from "../../../../../assets/logos/avatar.png";
const Comment = () => {
  return (
    <main className={styles["comment-container"]}>
      <div className={styles["avatar-image-container"]}>
        <img src={avatar} alt="" />
      </div>
      <div className={styles["content-container"]}>
        <div className={styles["info-container"]}>
          <div className={styles["text-info-container"]}>
            <h1>Matt Adams</h1>
            <p>Jan 2nd, 2012 2:35 pm</p>
          </div>
          <button>Reply</button>
        </div>
        <div className={styles["comment-text-container"]}>
          <p>
            Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui,
            nec hac ultrices nulla non netus. Placerat vehicula donec non
            suscipit egestas, augue vel suspendisse. Et felis venenatis blandit
            sed est ultrices, adipiscing urna.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Comment;
