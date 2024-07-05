import React, { useState } from "react";
import styles from "./Reply.module.scss";
const Reply = ({ id }) => {
  let [username, setUsername] = useState("");
  let [userComment, setUserComment] = useState("");
  const getCommentById = () => {
    let replyComment = {
      name: username,
      comment: userComment,
    };
    let commentsArr = JSON.parse(localStorage.getItem("comments")) || [];
    commentsArr[id].replyComments.push(replyComment);
    localStorage.setItem("comments", JSON.stringify(commentsArr));
    window.location.reload();
  };
  return (
    <main className={styles["add-comment-container"]}>
      <h1>Add your Reply</h1>
      <div className={styles["comment-input"]}>
        <input
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          name="comment"
          id=""
          placeholder="Comment"
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
        ></textarea>
        <button onClick={() => getCommentById()}>Reply</button>
      </div>
    </main>
  );
};

export default Reply;
