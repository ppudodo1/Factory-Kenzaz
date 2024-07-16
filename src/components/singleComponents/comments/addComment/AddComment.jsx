import React, { useState } from "react";
import styles from "./AddComment.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../../features/storedComments/commentsSlice";

const AddComment = ({ articleId }) => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.arrOfComments);
  const userEmail = useSelector((state) => state.user.user.email);
  const userDisplayName = useSelector((state) => state.user.user.displayName);
  const validateForm = () => {
    const newErrors = {};

    if (!comment) newErrors.comment = "Comment is required";
    return newErrors;
  };
  const cancelComment = () => {
    setUsername("");
    setComment("");
    setEmail("");
  };
  const commentSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      const currentDateTime = new Date();
      const formattedDateTime = currentDateTime.toLocaleString();
      dispatch(
        addComment({
          userDisplayName,
          userEmail,
          comment,
          replyComments: [],
          formattedDateTime,
          articleId,
        })
      );
      setUsername("");
      setEmail("");
      setComment("");
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={styles["add-comment-container"]}>
      <h1>Add your Comment</h1>
      <p>
        Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec
        hac ultrices nulla non netus. Placerat vehicula donec non suscipit
        egestas, augue vel suspendisse. Et felis venenatis blandit sed est
        ultrices, adipiscing urna.
      </p>
      <form onSubmit={commentSubmit} className={styles["comment-input"]}>
        {errors.userName && (
          <p className={styles["error-message"]}>{errors.userName}</p>
        )}

        {errors.email && (
          <p className={styles["error-message"]}>{errors.email}</p>
        )}
        <textarea
          name="comment"
          id=""
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        {errors.comment && (
          <p className={styles["error-message"]}>{errors.comment}</p>
        )}
        <div className={styles["add-comment-button-container"]}>
          <button type="submit">Submit</button>
          <button onClick={cancelComment}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
