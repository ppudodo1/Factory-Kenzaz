import React from "react";
import styles from "./Comments.module.scss";
import Comment from "./comment/Comment";
import AddComment from "./addComment/AddComment";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Comments = () => {
  const comments = useSelector((state) => state.comments.arrOfComments);
  const userLoggedIn = useSelector((state) => state.user.user);
  console.log("Check if logged in: ", userLoggedIn);
  const { articleId } = useParams();

  if (comments.length === 0) {
    return (
      <div className={styles["comments-outer-container"]}>
        <h1>Comments</h1>
        <p>No comments yet</p>
        {userLoggedIn && Object.keys(userLoggedIn).length > 0 ? (
          <AddComment articleId={articleId} />
        ) : (
          <div className={styles["logged-out-comment"]}>
            <p>Log in or sign up to post a comment</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles["comments-outer-container"]}>
      <h1>Comments</h1>
      <div className={styles["comments-inner-container"]}>
        {comments.map((comment) => {
          if (comment.articleId == articleId) {
            return (
              <Comment
                userName={comment.user}
                date={comment.date}
                comment={comment.userComment}
                key={comment.id}
                id={comment.id}
              />
            );
          }
        })}
        {userLoggedIn && Object.keys(userLoggedIn).length > 0 ? (
          <AddComment articleId={articleId} />
        ) : (
          <div className={styles["logged-out-comment"]}>
            <p>Log in or sign up to post a comment</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
