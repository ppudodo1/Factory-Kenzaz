import React from "react";
import styles from "./AddComment.module.scss";
const AddComment = () => {
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
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email Address" />
        <textarea name="comment" id="" placeholder="Comment"></textarea>
        <button>Submit</button>
      </div>
    </main>
  );
};

export default AddComment;
