import React, { useState } from "react";
import styles from "./Reply.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { replyToComment } from "../../../../features/storedComments/commentsSlice";

const Reply = ({ id, onReplySubmit }) => {
  let [username, setUsername] = useState("");
  let [userComment, setUserComment] = useState("");
  const [emptyComment, setEmptyComment] = useState(false);
  const userDisplayName = useSelector((state) => state.user.user.displayName);
  const dispatch = useDispatch();

  const getCommentById = () => {
    if (userComment !== "") {
      let replyComment = {
        name: userDisplayName,
        comment: userComment,
      };
      dispatch(replyToComment({ id, replyComment }));
      setUsername("");
      setUserComment("");
      onReplySubmit();
    } else {
      setEmptyComment(true);
    }
  };
  return (
    <div className={styles["reply-comment-container"]}>
      <h1>Add your Reply</h1>
      {emptyComment && <p>Comment required</p>}
      <div className={styles["comment-input"]}>
        <textarea
          name="comment"
          id=""
          placeholder="Comment"
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
        ></textarea>
        <div className={styles["reply-button-container"]}>
          <button onClick={() => getCommentById()}>Reply</button>
          <button onClick={onReplySubmit}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Reply;
