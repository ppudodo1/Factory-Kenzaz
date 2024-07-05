import React from "react";
import styles from "./AddComment.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddComment = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const commentSubmit = () => {
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString();
    let commentObj = {
      user: userName,
      userEmail: email,
      userComment: comment,
      date: formattedDateTime,
      replyComments: [],
    };
    let currentArrOfComments =
      JSON.parse(localStorage.getItem("comments")) || [];
    currentArrOfComments.push(commentObj);
    localStorage.setItem("comments", JSON.stringify(currentArrOfComments));
    console.log("CurrentArrOfCommments: ", currentArrOfComments);
    setUsername("");
    setEmail("");
    setComment("");
    window.location.reload();
  };
  return (
    <main className={styles["add-comment-container"]}>
      <h1>Add your Comment</h1>
      <p>
        Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec
        hac ultrices nulla non netus. Placerat vehicula donec non suscipit
        egestas, augue vel suspendisse. Et felis venenatis blandit sed est
        ultrices, adipiscing urna.
      </p>
      <div className={styles["comment-input"]}>
        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="comment"
          id=""
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button onClick={commentSubmit}>Submit</button>
      </div>
    </main>
  );
};

export default AddComment;
