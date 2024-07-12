import React from "react";
import styles from "./Comments.module.scss";
import Comment from "./comment/Comment";
import AddComment from "./addComment/AddComment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
let commentsArr = JSON.parse(localStorage.getItem("comments")) || [];

const Comments = () => {
  const comments = useSelector((state) => state.comments.arrOfComments);
  const { articleId } = useParams();
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
        {commentsArr.map((comment, index) => {
          if (comment.articleId == articleId) {
            return (
              <Comment
                userName={comment.user}
                date={comment.date}
                comment={comment.userComment}
                key={index}
                id={index}
              ></Comment>
            );
          }
        })}
        <AddComment articleId={articleId}></AddComment>
      </div>
    </div>
  );
};

export default Comments;
