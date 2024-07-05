import React from "react";
import styles from "./Comments.module.scss";
import Comment from "./comment/Comment";
import AddComment from "./addComment/AddComment";
let commentsArr = JSON.parse(localStorage.getItem("comments")) || [];

const Comments = () => {
  if (commentsArr.length == 0) {
    return (
      <div className={styles["comments-outer-container"]}>
        <h1>Comments</h1>
        <p>No comments yet</p>
        <AddComment></AddComment>
      </div>
    );
  }
  return (
    <div className={styles["comments-outer-container"]}>
      <h1>Comments</h1>
      <div className={styles["comments-inner-container"]}>
        {commentsArr.map((comment, index) => (
          <Comment
            userName={comment.user}
            date={comment.date}
            comment={comment.userComment}
            key={index}
            id={index}
          ></Comment>
        ))}
        <AddComment></AddComment>
      </div>
    </div>
  );
};

export default Comments;
