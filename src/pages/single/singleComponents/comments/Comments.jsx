import React from "react";
import styles from "./Comments.module.scss";
import Comment from "./comment/Comment";
import AddComment from "./addComment/AddComment";
const Comments = () => {
  return (
    <div className={styles["comments-outer-container"]}>
      <h1>Comments</h1>
      <div className={styles["comments-inner-container"]}>
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>
        <AddComment></AddComment>
      </div>
    </div>
  );
};

export default Comments;
